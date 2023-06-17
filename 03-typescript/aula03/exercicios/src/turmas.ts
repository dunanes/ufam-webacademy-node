enum Turno {
    Manha = "manhã",
    Tarde = "tarde",
    Noite = "noite",
}

enum AreaCurso {
    Humanas = "humanas",
    Biologicas = "biologicas",
    Exatas = "exatas",
}

class Turma {
    id: number;
    descricao: string;
    turno: Turno;
    curso: { descricao: string; area: AreaCurso };

    constructor(
        id: number,
        descricao: string,
        turno: Turno,
        curso: { descricao: string; area: AreaCurso }
    ) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
}


// Testes

const turmas: Turma[] = [];


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