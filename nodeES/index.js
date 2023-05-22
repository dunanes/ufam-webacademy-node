import http from "http"
import fs from "fs"
import { createLink, createVolta } from "./helpers/utils"

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
                files.forEach(file => res.write(createLink(file)));
                res.end("Instituto de Computação");
            }
        });
    } else {
        fs.readFile(`${folder}/${req.url}`, (err, content) => {
            res.write(createVolta());
            res.end(content);
        })
    }
});

server.listen(PORT, () => {
    console.log(`Rodando na porta: ${PORT}`);
})