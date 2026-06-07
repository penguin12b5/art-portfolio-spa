const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const port = process.env.PORT || 8000;

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

const safeJoin = (base, target) => {
  const targetPath = '.' + path.posix.normalize('/' + target);
  return path.join(base, targetPath);
};

const serveFile = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/admin/api/stats') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(
      JSON.stringify({
        status: 'ok',
        scope: url.searchParams.get('scope') || 'alltime',
        message: 'Stub admin stats endpoint for local development',
      })
    );
    return;
  }

  let filePath = safeJoin(rootDir, url.pathname);

  if (url.pathname === '/' || url.pathname.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (url.pathname === '/') {
        serveFile(path.join(rootDir, 'index.html'), res);
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      serveFile(path.join(filePath, 'index.html'), res);
      return;
    }

    serveFile(filePath, res);
  });
});

server.listen(port, () => {
  console.log(`Local development server running at http://localhost:${port}`);
  console.log('Admin stats endpoint stubbed at /admin/api/stats');
});
