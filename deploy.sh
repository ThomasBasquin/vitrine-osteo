#!/usr/bin/env bash
# Déploiement du site statique. Le repo vit sur le VPS : copie locale vers /var/www.
set -euo pipefail

DEST="${DEST:-/var/www/mariewach.fr}"

npm run build
rsync -a --delete dist/ "${DEST}/"
echo "Déployé dans ${DEST}"
