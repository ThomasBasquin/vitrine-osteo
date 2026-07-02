#!/usr/bin/env bash
# Déploiement du site statique vers le VPS.
# Prérequis : accès SSH au VPS, rsync installé des deux côtés.
set -euo pipefail

VPS_HOST="${VPS_HOST:-user@mon-vps}"          # à adapter ou exporter avant l'appel
VPS_PATH="${VPS_PATH:-/var/www/osteo}"        # racine servie par nginx

npm run build
rsync -avz --delete dist/ "${VPS_HOST}:${VPS_PATH}/"
echo "Déployé sur ${VPS_HOST}:${VPS_PATH}"
