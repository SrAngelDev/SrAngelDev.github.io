#!/bin/bash

# -----------------------------
# Script de despliegue a GitHub
# -----------------------------

# Colores (opcionales, funcionan en Git Bash / WSL)
GREEN="\033[0;32m"
RED="\033[0;31m"
NC="\033[0m"

# Obtener rama actual automáticamente
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Generar mensaje de commit con fecha y hora
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
COMMIT_MESSAGE="deploy_$DATE"

echo -e "${GREEN}📥 Actualizando repositorio local...${NC}"
git pull origin $BRANCH

echo -e "${GREEN}➕ Añadiendo cambios...${NC}"
git add .

echo -e "${GREEN}📝 Creando commit con mensaje: $COMMIT_MESSAGE ${NC}"
git commit -m "$COMMIT_MESSAGE"

echo -e "${GREEN}🚀 Subiendo cambios a GitHub (rama: $BRANCH)...${NC}"
git push origin $BRANCH

echo -e "${GREEN}✅ Despliegue completado con éxito.${NC}"
