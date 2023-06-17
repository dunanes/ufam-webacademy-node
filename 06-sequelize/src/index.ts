import express, { Request, Response } from "express";
import router from "./router/router";
import dotenv from "dotenv";
import morgan from "morgan";
import validateEnv from "./utils/validateEnv";

const PORT = process.env.PORT || 3333;
const publicPath = `${process.cwd()}/public`;

dotenv.config();
validateEnv();

const app = express();
app.use(router);
app.use(morgan("short")); //? Dá erro em algumas rotas?
app.use("/css", express.static(`${publicPath}/css`));
app.use("/js", express.static(`${publicPath}/js`));
app.use("/img", express.static(`${publicPath}/img`));

app.use((req: Request, res: Response) => {
  res.statusCode = 404;
  res.end("404!");
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
