
const http = require("https");

function sitioWeb(req , res)
{
    res.writeHead(200, {"Content-type": "text/plain"} );
    res.end("Mi primer servidor");


}


let servidor = http.createServer();

servidor.listen(9098, "127.0.0.1");

console.log("Servidor corriendo en el puerto 9098")