const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT ?? 3333; // As ?? significam que: Se o primeiro for falso, o segundo será o escolhido. É um curto circuito.
const app = express();

app.get("/", (req, res) => {
    res.end("Um teste! 🐱 Miau");
});

app.listen(PORT, () => {
    console.log(`💫 Aplicação rodando na porta ${PORT}!`)
});