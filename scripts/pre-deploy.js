#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Pre-deployment verification...');

// Check if required source files exist
const requiredFiles = [
  'public/index.html',
  'src/index.tsx',
  'package.json',
  'tailwind.config.js',
  'src/index.css'
];

const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:');
  missingFiles.forEach(file => console.error(`  - ${file}`));
  process.exit(1);
}

// Check package.json for required scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredScripts = ['build', 'start'];

const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script]);

if (missingScripts.length > 0) {
  console.error('❌ Missing required scripts in package.json:');
  missingScripts.forEach(script => console.error(`  - ${script}`));
  process.exit(1);
}

// Check if src directory has React components
const srcFiles = fs.readdirSync('src');
const hasReactFiles = srcFiles.some(file => file.endsWith('.tsx') || file.endsWith('.jsx'));

if (!hasReactFiles) {
  console.error('❌ No React components found in src directory');
  process.exit(1);
}

// Check for environment variables (optional)
if (!fs.existsSync('.env')) {
  console.log('ℹ️  .env file not found. Using default values from personalInfo.ts');
}

// Check if public directory exists
if (!fs.existsSync('public')) {
  console.error('❌ Public directory not found');
  process.exit(1);
}

console.log('✅ Pre-deployment verification passed!');
console.log('🚀 Ready to build and deploy');
