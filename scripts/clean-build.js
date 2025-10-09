#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Cleaning previous build artifacts...');

// Function to remove directory recursively
function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    console.log(`Removing ${dirPath}...`);
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

// Function to remove file
function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    console.log(`Removing ${filePath}...`);
    fs.unlinkSync(filePath);
  }
}

// Clean build directory
removeDir('build');

// Clean generated CSS
removeFile('public/styles/output.css');

// Clean node modules cache
removeDir('node_modules/.cache');

// Clean yarn cache
try {
  console.log('Clearing yarn cache...');
  execSync('yarn cache clean', { stdio: 'inherit' });
} catch (error) {
  console.warn('Warning: Could not clear yarn cache:', error.message);
}

// Clean temporary files
function cleanTempFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      cleanTempFiles(filePath);
    } else if (file.endsWith('.tmp') || file.endsWith('.log')) {
      console.log(`Removing temporary file: ${filePath}`);
      fs.unlinkSync(filePath);
    }
  });
}

// Clean temporary files in current directory
if (fs.existsSync('.')) {
  cleanTempFiles('.');
}

console.log('✅ Clean build environment ready!');
