"use strict";
var Turno;
(function (Turno) {
    Turno["Manha"] = "manh\u00E3";
    Turno["Tarde"] = "tarde";
    Turno["Noite"] = "noite";
})(Turno || (Turno = {}));
var AreaCurso;
(function (AreaCurso) {
    AreaCurso["Humanas"] = "humanas";
    AreaCurso["Biologicas"] = "biologicas";
    AreaCurso["Exatas"] = "exatas";
})(AreaCurso || (AreaCurso = {}));
class Turma {
    constructor(id, descricao, turno, curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
}
// Testes
const turmas = [];
const turma1 = new Turma(1, "Matemágica", Turno.Manha, {
    descricao: "Curso de Matemática",
    area: AreaCurso.Exatas,
});
turmas.push(turma1);
const turma2 = new Turma(2, "Mesopotâmicos", Turno.Tarde, {
    descricao: "Curso de História",
    area: AreaCurso.Humanas,
});
turmas.push(turma2);
const turma400 = new Turma(3, "The Doctors", Turno.Noite, {
    descricao: "Curso de Medicina",
    area: AreaCurso.Biologicas,
});
turmas.push(turma400);
for (const turma of turmas) {
    console.log("ID: ", turma.id);
    console.log("Descrição: ", turma.descricao);
    console.log("Turno: ", turma.turno);
    console.log("Curso: ", turma.curso.descricao);
    console.log("Área: ", turma.curso.area);
    console.log("---------------------------------");
}
