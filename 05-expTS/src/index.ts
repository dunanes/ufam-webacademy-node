import express, { Request, Response } from "express"; // Colocando o Request, Response ele já sabe que é o path e callback do req,res
import { engine } from "express-handlebars";
import validateEnv from "./utils/validateEnv";
import router from "./router/router";
import dotenv from "dotenv";
import morgan from "morgan";
import criaLog from "./middlewares/log";

dotenv.config();
validateEnv();

const publicPath = `${process.cwd()}/public`;
const logPath = `${process.cwd()}/logs`;
const PORT = process.env.PORT ?? 3333; // As ?? significam que: Se o primeiro for falso, o segundo será o escolhido. É um curto circuito.
const app = express();

app.use(router);
app.use("/css", express.static(`${publicPath}/css`));
app.use("/js", express.static(`${publicPath}/js`));
app.use("/img", express.static(`${publicPath}/img`));
// console.log(`${publicPath}/img`);

app.use(criaLog("completo", logPath + "/" + process.env.LOG_FILE));

app.engine(
    "handlebars",
    engine({
        helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    }),
);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(morgan("short"));

app.listen(PORT, () => {
    console.log(`💫 Aplicação rodando na porta ${PORT}!`);
});
