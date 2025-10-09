# 🚀 GitHub Pages Deployment Guide

Este documento explica cómo funciona el sistema de deployment optimizado para GitHub Pages.

## 📋 Configuración Actual

### Flujo de Deployment
- **Branch de desarrollo**: `development` (solo build, sin deploy)
- **Branch de producción**: `main` (build + deploy)
- **Trigger de build**: Push a `development` o Pull Request
- **Trigger de deploy**: Push a `main` (después de merge de PR)
- **Deployment automático**: ✅ Solo en `main`

### Workflow Optimizado

El workflow está configurado para evitar artifacts viejos mediante:

1. **Limpieza completa** antes de cada build
2. **Cache de dependencias** para builds más rápidos
3. **Verificación pre-deployment** para detectar problemas
4. **Artifacts temporales** con retención de 1 día
5. **Cancelación de builds concurrentes** para evitar conflictos

## 🛠️ Scripts Disponibles

### Desarrollo Local
```bash
# Desarrollo con hot reload
yarn start

# Generar CSS y observar cambios
yarn watch

# Build de producción limpio
yarn build:production
```

### Limpieza
```bash
# Limpieza general (Node.js)
yarn clean

# Limpieza en Windows
yarn clean:win

# Limpieza en Unix/Linux/Mac
yarn clean:unix
```

### Build
```bash
# Build normal
yarn build

# Build con limpieza previa
yarn build:clean

# Build de producción completo
yarn build:production
```

## 🔧 Proceso de Deployment

### 1. Desarrollo (Branch `development`)
```bash
# Hacer cambios en el código
git add .
git commit -m "feat: nueva funcionalidad"
git push origin development
```

**Resultado**: ✅ Build automático (sin deploy)
- Limpia artifacts anteriores
- Instala dependencias con cache
- Verifica archivos requeridos
- Genera CSS optimizado
- Construye la aplicación
- Sube artifacts para revisión

### 2. Crear Pull Request
```bash
# Crear PR de development a main
# En GitHub: New Pull Request
# Base: main ← Compare: development
```

**Resultado**: ✅ Build de PR (sin deploy)
- Verifica que el PR compile correctamente
- Sube artifacts para revisión
- Permite revisar cambios antes del merge

### 3. Merge a Main (Deployment)
```bash
# Merge PR en GitHub
# O merge local:
git checkout main
git merge development
git push origin main
```

**Resultado**: 🚀 Deploy automático a GitHub Pages
- Build de producción limpio
- Deploy inmediato a GitHub Pages
- URL pública actualizada

## 🚨 Solución de Problemas

### Artifacts Viejos
Si ves artifacts viejos:
1. Verifica que estés en la branch `development`
2. Ejecuta `yarn clean` localmente
3. Haz push de los cambios
4. El workflow limpiará automáticamente

### Build Fallido
Si el build falla:
1. Revisa los logs en GitHub Actions
2. Ejecuta `yarn build:production` localmente
3. Verifica que todos los archivos estén presentes
4. Corrige los errores y haz push

### CSS No Actualizado
Si el CSS no se actualiza:
1. Ejecuta `yarn watch` para regenerar
2. O ejecuta `yarn build:production`
3. Haz commit y push de los cambios

## 📁 Estructura de Archivos

```
.github/
├── workflows/
│   └── static.yml          # Workflow principal
└── pages.yml               # Configuración de Pages

scripts/
├── clean-build.js          # Limpieza (Node.js)
├── clean-build.ps1         # Limpieza (PowerShell)
├── clean-build.sh          # Limpieza (Bash)
└── pre-deploy.js           # Verificación pre-deployment

public/
├── styles/
│   └── output.css          # CSS generado (ignorado en git)
└── build/                  # Build de producción (ignorado en git)
```

## ⚡ Optimizaciones

### Performance
- ✅ Cache de dependencias de Yarn
- ✅ Builds paralelos cuando es posible
- ✅ Artifacts con retención mínima
- ✅ Limpieza automática de cache

### Confiabilidad
- ✅ Verificación pre-deployment
- ✅ Builds atómicos (todo o nada)
- ✅ Cancelación de builds conflictivos
- ✅ Logs detallados para debugging

### Mantenimiento
- ✅ Scripts de limpieza multiplataforma
- ✅ Configuración centralizada
- ✅ Documentación completa
- ✅ Monitoreo de deployment

## 🔗 Enlaces Útiles

- [GitHub Actions](https://github.com/aarjona1991/aarjona1991.github.io/actions)
- [GitHub Pages](https://aarjona1991.github.io/)
- [Configuración de Pages](https://github.com/aarjona1991/aarjona1991.github.io/settings/pages)

## 📞 Soporte

Si tienes problemas con el deployment:
1. Revisa este documento
2. Consulta los logs de GitHub Actions
3. Ejecuta los scripts de limpieza localmente
4. Verifica la configuración de GitHub Pages
