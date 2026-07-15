const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Scale down text-4xl md:text-5xl lg:text-6xl -> text-3xl md:text-4xl lg:text-5xl
    content = content.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-4xl lg:text-5xl');
    
    // Scale down text-5xl md:text-6xl -> text-4xl md:text-5xl
    content = content.replace(/text-5xl md:text-6xl/g, 'text-4xl md:text-5xl');

    // Scale down text-4xl md:text-5xl -> text-3xl md:text-4xl
    content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl md:text-4xl');

    // Stats section text-5xl xl:text-6xl -> text-4xl xl:text-5xl
    content = content.replace(/text-5xl xl:text-6xl/g, 'text-4xl xl:text-5xl');

    // Home Hero text-5xl lg:text-6xl -> text-4xl lg:text-5xl
    content = content.replace(/text-5xl lg:text-6xl/g, 'text-4xl lg:text-5xl');
    
    // MarketingChannels text-3xl md:text-5xl -> text-2xl md:text-4xl
    content = content.replace(/text-3xl md:text-5xl/g, 'text-2xl md:text-4xl');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  }
});
