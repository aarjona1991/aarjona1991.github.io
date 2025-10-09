# 🔄 Flujo de Trabajo de Deployment

## Diagrama de Flujo

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Development   │    │   Pull Request  │    │      Main       │
│     Branch      │    │  (dev → main)   │    │     Branch      │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          │ Push                 │ Create PR            │ Merge PR
          ▼                      ▼                      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Build Only    │    │   Build Only    │    │ Build + Deploy  │
│   (No Deploy)   │    │   (No Deploy)   │    │   to GitHub     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
          │                      │                      │
          │                      │                      │
          ▼                      ▼                      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Upload Artifacts│    │  Upload Artifacts│    │  🚀 LIVE SITE   │
│   (7 days)      │    │   (3 days)      │    │  GitHub Pages   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Estados del Workflow

### 🔧 Development Branch
- **Trigger**: Push a `development`
- **Acción**: Build + Upload artifacts
- **Deploy**: ❌ No
- **Propósito**: Desarrollo y testing

### 🔍 Pull Request
- **Trigger**: PR de `development` a `main`
- **Acción**: Build + Upload artifacts
- **Deploy**: ❌ No
- **Propósito**: Revisión de código

### 🚀 Main Branch
- **Trigger**: Push a `main` (después de merge)
- **Acción**: Build + Deploy a GitHub Pages
- **Deploy**: ✅ Sí
- **Propósito**: Producción

## Ventajas del Flujo

### ✅ Control de Calidad
- Builds en PR para verificar cambios
- Solo deploys después de merge aprobado
- Separación clara entre desarrollo y producción

### ✅ Prevención de Errores
- No deploys accidentales desde development
- Verificación de builds antes del merge
- Artifacts separados por contexto

### ✅ Flexibilidad
- Desarrollo libre en `development`
- Revisión controlada en PRs
- Deploy controlado en `main`

## Comandos Útiles

```bash
# Desarrollo
git checkout development
git add .
git commit -m "feat: nueva funcionalidad"
git push origin development

# Crear PR
# En GitHub: New Pull Request
# Base: main ← Compare: development

# Merge PR (después de aprobación)
# En GitHub: Merge Pull Request
# O localmente:
git checkout main
git merge development
git push origin main
```
