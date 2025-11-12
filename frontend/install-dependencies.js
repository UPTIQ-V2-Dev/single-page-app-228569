#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Setting up dependencies...');

try {
  // Check if pnpm-lock.yaml exists and remove it
  const lockFile = path.join(process.cwd(), 'pnpm-lock.yaml');
  if (fs.existsSync(lockFile)) {
    console.log('Removing pnpm-lock.yaml...');
    fs.unlinkSync(lockFile);
  }

  // Install dependencies using npm
  console.log('Installing dependencies with npm...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('Dependencies installed successfully!');
  console.log('You can now run: npm run build');
  
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
}