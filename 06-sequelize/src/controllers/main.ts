import { Request, Response } from "express";

const principal = (req: Request, res: Response) => {
  res.send("Bem-vindo ao meu site!");
};

const sobre = (req: Request, res: Response) => {
  res.send("Página sobre");
};

const bemvindoNome = (req: Request, res: Response) => {
  res.send(`Seja bem vindo ${req.params.nome}`);
};

export default { principal, sobre, bemvindoNome };
