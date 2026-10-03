const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const types = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };

http.createServer((request, response) => {
  const pathname = request.url === '/' ? '/index.html' : request.url.split('?')[0];
  const file = path.resolve(root, `.${pathname}`);
  if (!file.startsWith(root + path.sep)) return response.writeHead(403).end('Forbidden');
  fs.readFile(file, (error, data) => {
    if (error) return response.writeHead(error.code === 'ENOENT' ? 404 : 500).end('Not found');
    response.writeHead(200, { 'Content-Type': `${types[path.extname(file)] || 'application/octet-stream'}; charset=utf-8` });
    response.end(data);
  });
}).listen(4173, () => console.log('Portfolio: http://localhost:4173'));
