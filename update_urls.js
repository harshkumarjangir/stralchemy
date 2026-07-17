const fs = require('fs');
const path = require('path');

const dirs = [
  'c:/Users/harsh/Desktop/stralchemy/client/src',
  'c:/Users/harsh/Desktop/stralchemy/admin/src'
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('http://localhost:5000')) {
        // Replace single quoted 'http://localhost:5000/...' with `${import.meta.env.VITE_API_URL}/...`
        content = content.replace(/'http:\/\/localhost:5000([^']*)'/g, '`${import.meta.env.VITE_API_URL}$1`');
        
        // Replace double quoted "http://localhost:5000/..." with `${import.meta.env.VITE_API_URL}/...`
        content = content.replace(/"http:\/\/localhost:5000([^"]*)"/g, '`${import.meta.env.VITE_API_URL}$1`');
        
        // Replace within template literals: `http://localhost:5000/...
        content = content.replace(/http:\/\/localhost:5000/g, '${import.meta.env.VITE_API_URL}');
        
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

dirs.forEach(processDir);
console.log('Done');
