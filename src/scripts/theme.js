// Thème circadien : clair entre le lever et le coucher du soleil (calculés
// pour les coordonnées du cabinet, équation du temps incluse — précision ±2 min),
// sombre la nuit. Inliné dans le <head> avant le premier rendu pour éviter
// tout flash. Bascule manuelle possible (sessionStorage), voir Circadian.astro.
(function () {
  var coords = window.__SITE_COORDS || { lat: 48.32319, lon: 7.33155 };
  var RAD = Math.PI / 180;

  function sunTimes(date) {
    var day = Math.floor((date.getTime() - Date.UTC(date.getFullYear(), 0, 0)) / 864e5);
    var B = (RAD * 360 / 365) * (day - 81);
    var eotMinutes = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
    var decl = -23.44 * RAD * Math.cos((RAD * 360 / 365) * (day + 10));
    var lat = coords.lat * RAD;
    var cosH = (Math.sin(-0.83 * RAD) - Math.sin(lat) * Math.sin(decl)) / (Math.cos(lat) * Math.cos(decl));
    cosH = Math.min(1, Math.max(-1, cosH));
    var halfDayHours = Math.acos(cosH) / RAD / 15;
    var solarNoonUTC = 12 - coords.lon / 15 - eotMinutes / 60;

    function atUTCHour(hours) {
      var d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
      d.setUTCMinutes(Math.round(hours * 60));
      return d;
    }

    return {
      sunrise: atUTCHour(solarNoonUTC - halfDayHours),
      sunset: atUTCHour(solarNoonUTC + halfDayHours),
    };
  }

  function getOverride() {
    try { return sessionStorage.getItem('theme'); } catch (e) { return null; }
  }

  function apply() {
    var now = new Date();
    var sun = sunTimes(now);
    var auto = now >= sun.sunrise && now < sun.sunset ? 'light' : 'dark';
    var override = getOverride();
    var theme = override === 'light' || override === 'dark' ? override : auto;
    var root = document.documentElement;
    if (!root.classList.contains(theme)) {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }
    document.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme: theme, sunrise: sun.sunrise, sunset: sun.sunset },
    }));
  }

  function toggle() {
    var isDark = document.documentElement.classList.contains('dark');
    try { sessionStorage.setItem('theme', isDark ? 'light' : 'dark'); } catch (e) {}
    apply();
  }

  window.__circadian = { sunTimes: sunTimes, apply: apply, toggle: toggle };
  apply();
  setInterval(apply, 60000);
  // Astro reset les attributs de <html> à chaque navigation (ClientRouter) et ne
  // rejoue pas ce script inline déjà exécuté : sans ce hook, le thème retombe
  // systématiquement au défaut non stylé après un changement de page.
  document.addEventListener('astro:after-swap', apply);
})();
