const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('==> Construindo o projeto Astro...');
execSync('npm run build', { stdio: 'inherit' });

// Garante o arquivo .nojekyll para o GitHub Pages não ignorar pastas _astro
const distDir = path.join(__dirname, '..', 'dist');
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

console.log('==> Publicando build estático na branch gh-pages...');
execSync('git init', { cwd: distDir, stdio: 'inherit' });
execSync('git config core.longpaths true', { cwd: distDir, stdio: 'inherit' });
execSync('git checkout -B gh-pages', { cwd: distDir, stdio: 'inherit' });
execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
execSync('git commit -m "deploy: update github pages"', { cwd: distDir, stdio: 'inherit' });
execSync('git push -f https://github.com/idedigitalbr/site-power-rh-graci.git gh-pages', { cwd: distDir, stdio: 'inherit' });
fs.rmSync(path.join(distDir, '.git'), { recursive: true, force: true });

console.log('==> Deploy no GitHub Pages concluído com sucesso!');
