const http = require('http');
const fs = require('fs');
const path = require('path');

// This tiny Node server is used so the demo app can run locally
// without needing Docker or any extra framework.
const port = 3000;
const publicDir = path.join(__dirname, 'app');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

const server = http.createServer((req, res) => {
  const requestedPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(publicDir, requestedPath);

  // Prevent directory traversal and keep the example simple.
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }

    const extension = path.extname(filePath);
    const contentType = mimeTypes[extension] || 'text/plain; charset=utf-8';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Demo app is available at http://127.0.0.1:${port}`);
});
