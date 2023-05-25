const http = require("http");
const fs = require('fs');

require('dotenv').config();

const PORT = process.env.PORT || 3333;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url === "/") {
        new Promise(function (resolve, reject) {
            fs.readFile("index.html", (err, data) => {
                if (err) {
                    return err;
                }
                resolve(res.end(data));
            });
        })
    }
    else {
        res.end("Error 404\n Not Found 😡")
    }
});

server.listen(PORT, () => {
    console.log(`Rodando na porta: ${PORT}`);
})