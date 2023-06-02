import express, { Request, Response } from "express"; // Colocando o Request, Response ele já sabe que é o path e callback do req,res
import { engine } from "express-handlebars";
import validateEnv from "./utils/validateEnv";
import router from "./router/router";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
validateEnv();

const publicPath = `${process.cwd()}/public`;
const PORT = process.env.PORT ?? 3333; // As ?? significam que: Se o primeiro for falso, o segundo será o escolhido. É um curto circuito.
const app = express();

app.use(router);

app.use("/css", express.static(`${publicPath}/public/css`));
app.use("/js", express.static(`${publicPath}/public/js`));
app.use("/img", express.static(`${publicPath}/public/img`));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

console.log(`${process.cwd()}/public`);

app.use(morgan("short"));

//TODO Bagunçado, era pra estar no router eu acho

// app.use((req, res, next) => {
//     // Um middleware que joga o next pro próximo
//     console.log("Nhaí");
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Um teste! 🐱 Miau");
// });

app.listen(PORT, () => {
    console.log(`💫 Aplicação rodando na porta ${PORT}!`);
});
