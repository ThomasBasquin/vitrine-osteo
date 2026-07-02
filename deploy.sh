#!/usr/bin/env bash
# Déploiement du site statique. Le repo vit sur le VPS : copie locale vers /var/www.
set -euo pipefail

DEST="${DEST:-/var/www/osteo.thomasbasquin.fr}"

npm run build
rsync -a --delete dist/ "${DEST}/"
echo "Déployé dans ${DEST}"
