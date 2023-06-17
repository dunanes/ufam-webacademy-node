const http = require("http");
const fs = require("fs");
const link = require("./helpers/utils");

// const strHelper = require('./helpers/str_helper');
// let icomp = "Instituto de Computação";
// console.log(strHelper.lower(icomp));
// console.log(strHelper.upper(icomp));

require('dotenv').config();

const PORT = process.env.PORT || 3333;

const folder = process.argv[2];

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url === "/") {
        fs.readdir(folder, (err, files) => {
            if (err) {
                console.log(err);
            } else {
                files.forEach(file => res.write(link.create(file)));
                res.end("Instituto de Computação");
            }
        });
    } else {
        fs.readFile(`${folder}/${req.url}`, (err, content) => {
            res.write(link.voltar());
            res.end(content);
        })
    }
});

server.listen(PORT, () => {
    console.log(`Rodando na porta: ${PORT}`);
})