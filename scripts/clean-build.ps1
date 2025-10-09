# Clean Build Script for GitHub Pages Deployment (PowerShell)
# This script ensures a clean build environment

Write-Host "🧹 Cleaning previous build artifacts..." -ForegroundColor Yellow

# Remove build directory
if (Test-Path "build") {
    Write-Host "Removing build directory..." -ForegroundColor Cyan
    Remove-Item -Recurse -Force "build"
}

# Remove generated CSS
if (Test-Path "public/styles/output.css") {
    Write-Host "Removing generated CSS..." -ForegroundColor Cyan
    Remove-Item -Force "public/styles/output.css"
}

# Remove node modules cache
if (Test-Path "node_modules/.cache") {
    Write-Host "Removing node modules cache..." -ForegroundColor Cyan
    Remove-Item -Recurse -Force "node_modules/.cache"
}

# Remove yarn cache
Write-Host "Clearing yarn cache..." -ForegroundColor Cyan
yarn cache clean

# Remove any temporary files
Write-Host "Removing temporary files..." -ForegroundColor Cyan
Get-ChildItem -Path . -Include "*.tmp", "*.log" -Recurse | Remove-Item -Force

Write-Host "✅ Clean build environment ready!" -ForegroundColor Green
