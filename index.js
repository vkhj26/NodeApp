const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1 style="font-family:Arial;text-align:center;margin-top:20%">Hola ðŸ‘‹</h1>');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});