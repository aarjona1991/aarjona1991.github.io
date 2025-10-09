#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Pre-deployment verification...');

// Check if required files exist
const requiredFiles = [
  'public/index.html',
  'src/index.tsx',
  'package.json',
  'tailwind.config.js'
];

const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:');
  missingFiles.forEach(file => console.error(`  - ${file}`));
  process.exit(1);
}

// Check if build directory exists and is not empty
if (!fs.existsSync('build') || fs.readdirSync('build').length === 0) {
  console.error('❌ Build directory is missing or empty. Run "yarn build" first.');
  process.exit(1);
}

// Check if CSS file exists
if (!fs.existsSync('public/styles/output.css')) {
  console.warn('⚠️  CSS file not found. Run "yarn watch" or "yarn build:production" first.');
}

// Check package.json for required scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredScripts = ['build', 'start', 'clean'];

const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script]);

if (missingScripts.length > 0) {
  console.error('❌ Missing required scripts in package.json:');
  missingScripts.forEach(script => console.error(`  - ${script}`));
  process.exit(1);
}

// Check for environment variables
if (!fs.existsSync('.env')) {
  console.warn('⚠️  .env file not found. Using default values from personalInfo.ts');
}

console.log('✅ Pre-deployment verification passed!');
console.log('🚀 Ready for deployment to GitHub Pages');
