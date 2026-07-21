import fs from 'fs';
import path from 'path';

const baseDir = 'c:/Users/harsh/Desktop/stralchemy/client/public/case-studies';

const items = fs.readdirSync(baseDir);

items.forEach(item => {
  const itemPath = path.join(baseDir, item);
  
  if (fs.statSync(itemPath).isDirectory()) {
    let slug = item.toLowerCase();
    slug = slug.replace(/\s&\s/g, '-').replace(/\s+/g, '-');
    
    const files = fs.readdirSync(itemPath);
    const pdfFile = files.find(f => f.endsWith('.pdf'));
    
    if (pdfFile) {
      const oldPdfPath = path.join(itemPath, pdfFile);
      const newPdfPath = path.join(baseDir, `${slug}.pdf`);
      
      fs.renameSync(oldPdfPath, newPdfPath);
      console.log(`Moved ${pdfFile} to ${slug}.pdf`);
    }
    
    fs.rmSync(itemPath, { recursive: true, force: true });
    console.log(`Deleted folder ${item}`);
  }
});
console.log('Done!');
