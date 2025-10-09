#!/bin/bash

# Clean Build Script for GitHub Pages Deployment
# This script ensures a clean build environment

echo "🧹 Cleaning previous build artifacts..."

# Remove build directory
if [ -d "build" ]; then
    echo "Removing build directory..."
    rm -rf build/
fi

# Remove generated CSS
if [ -f "public/styles/output.css" ]; then
    echo "Removing generated CSS..."
    rm -f public/styles/output.css
fi

# Remove node modules cache
if [ -d "node_modules/.cache" ]; then
    echo "Removing node modules cache..."
    rm -rf node_modules/.cache
fi

# Remove yarn cache
echo "Clearing yarn cache..."
yarn cache clean

# Remove any temporary files
echo "Removing temporary files..."
find . -name "*.tmp" -delete
find . -name "*.log" -delete

echo "✅ Clean build environment ready!"
