const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req,res) => {
    const src = fs.createReadStream("./Ficheros_Isilon_07_06.csv");
    src.pipe(res);
});

server.listen(8000);