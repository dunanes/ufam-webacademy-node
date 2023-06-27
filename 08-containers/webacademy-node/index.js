const http = require("http");

const servidor = http.createServer((req, res) => {
    res.end("<h1>Use Docker! 😸</h1>");
});

servidor.listen(4567, () => console.log("Rodando"));