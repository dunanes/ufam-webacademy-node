const http = require("http");
const fs = require("fs");

const PORT = 3333;

const folder = "./files";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.foreach(f => res.write(`${f}\n`));
            res.end("Instituto de Computação");
        }
    });
});

server.listen(PORT, () => {
    console.log(`Rodando na porta: ${PORT}`)
})