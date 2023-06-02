import { Request, Response } from "express";

const principal = (req: Request, res: Response) => {
    res.send("Página principal do site");
};

const sobre = (req: Request, res: Response) => {
    res.send("Página sobre");
};

const hb1 = (req: Request, res: Response) => {
    res.render("hb1", {
        mensagem: "E aí",
        layout: false,
    });
};

const hb2 = (req: Request, res: Response) => {
    res.render("hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
        layout: false,
    });
};

const hb3 = (req: Request, res: Response) => {
    const professores = [
        { nome: "Ana", sala: 1000 },
        { nome: "Bruno", sala: 1001 },
        { nome: "Carla", sala: 1002 },
        { nome: "Davi", sala: 1003 },
    ];
    res.render("hb3", { professores, layout: false });
};
export default { principal, sobre, hb1, hb2, hb3 };
