import { Request, Response, NextFunction } from "express";
import { Tipo } from "./tipoLogs";
import fs from "fs";

function criaLog(tipo: Tipo, caminhoLog: string) {
    // console.log("CaminhoLog: " + caminhoLog);
    return (req: Request, res: Response, next: NextFunction) => {
        console.log("chamada!");
        let saida;
        if (tipo === "completo") {
            saida = `${new Date().toISOString()}, ${req.url}, ${req.method}\n`;
        } else if (tipo === "simples") {
            saida = `${new Date().toISOString()}, ${req.url}, ${req.method},
            ${req.httpVersion}, ${req.get("User-Agent")}`;
        } else {
            saida = "Erro :(\n";
        }
        fs.writeFile(caminhoLog, saida, { flag: "a" }, (err) => {
            if (err) throw err;
        });
        next();
    };
}

export default criaLog;
