import { Router } from "express";

const router = Router();

//TODO Falta separar as rotas dos controles

router.get("/", (req, res) => {
    res.send("Página principal do site");
});

router.get("/sobre", (req, res) => {
    res.send("Página sobre");
});

router.get("/hb1", (req, res) => {
    res.render("hb1", {
        mensagem: "E aí",
        layout: false,
    });
});

router.get("/hb2", (req, res) => {
    res.render("hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
        layout: false,
    });
});

router.get("/hb3", (req, res) => {
    const professores = [
        { nome: "Ana", sala: 1000 },
        { nome: "Bruno", sala: 1001 },
        { nome: "Carla", sala: 1002 },
        { nome: "Davi", sala: 1003 },
    ];
    res.render("hb3", { professores, layout: false });
});

export default router;
