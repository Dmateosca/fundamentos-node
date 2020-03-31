const http = require('http');
const server = http.createServer();

server.on("request",(solicitud,respuesta)=>{
    let body = [];
    console.log(solicitud.headers);
    console.log(solicitud.url);
    console.log(solicitud.body);
    solicitud.on('data', (chunk) => {
        body.push(chunk);
    })
    .on('end', ()=>{
        body = Buffer.concat(body).toString();
        console.log(body);
       
    })
    respuesta.end();
});
server.listen(8001);