const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');

// Parse environment variables
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    let value = match[2].trim();
    // Remove quotes
    value = value.replace(/^["']|["']$/g, '');
    envVars[key] = value;
  }
});

// Set environment variables
process.env.NEXT_PUBLIC_TINA_CLIENT_ID = envVars.NEXT_PUBLIC_TINA_CLIENT_ID;
process.env.TINA_TOKEN = envVars.TINA_TOKEN;
process.env.TINA_SEARCH_TOKEN = envVars.TINA_SEARCH_TOKEN;

console.log('TINA_CLIENT_ID:', process.env.NEXT_PUBLIC_TINA_CLIENT_ID ? 'found' : 'missing');
console.log('TINA_TOKEN:', process.env.TINA_TOKEN ? 'found' : 'missing');
console.log('TINA_SEARCH_TOKEN:', process.env.TINA_SEARCH_TOKEN ? 'found' : 'missing');

try {
  console.log('\nStarting Tina build...\n');
  execSync('bunx tinacms build', { 
    stdio: 'inherit',
    env: process.env 
  });
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
