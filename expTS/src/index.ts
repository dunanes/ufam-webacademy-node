import express, { Request, Response } from "express"; // Colocando o Request, Response ele já sabe que é o path e callback do req,res
import validateEnv from "./utils/validateEnv";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333; // As ?? significam que: Se o primeiro for falso, o segundo será o escolhido. É um curto circuito.
const app = express();

app.use(morgan("combined"));

app.use((req, res, next) => {
    // Um middleware que joga o next pro próximo
    console.log("Nhaí");
    next();
});

app.get("/", (req, res) => {
    res.send("Um teste! 🐱 Miau");
});

app.listen(PORT, () => {
    console.log(`💫 Aplicação rodando na porta ${PORT}!`);
});
