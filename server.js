const http = require('http');
const fs = require('fs');

// req es request o petición, res respuesta 
    const handleServer = function (req, res) {
        // leyendo árchivos HTML
        fs.readFile('./gemetria.html', (err, html) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(html);
            res.end()
        }
    )}

const server = http.createServer(handleServer)

server.listen(8080)
