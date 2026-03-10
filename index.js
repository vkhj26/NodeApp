const http = require('http');
const Redis = require('ioredis');

// Configura Redis apuntando al Service de Kubernetes
const redis = new Redis({
  host: 'redis-service.nodeapp-lab.svc.cluster.local', // Service de Redis en k8s
  port: 6379
});

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  try {
    // Guardamos un valor de prueba en Redis
    await redis.set('mensaje', 'Hola desde Redis 🎉', 'EX', 60); // expira en 60s

    // Leemos el valor de Redis
    const valor = await redis.get('mensaje');

    // Mostramos en la página
    res.end(`<h1 style="font-family:Arial;text-align:center;margin-top:20%">
               ${valor}
             </h1>`);
  } catch (err) {
    console.error('Error Redis:', err);
    res.end('<h1>Error conectando a Redis</h1>');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});