"use strict";
// function cadastrarUsuario(nome: unknown): void {
//     console.log(`Usuário ${nome.toUpperCase()} cadastrado`); // Erro, como esperado, ele faz verificações de tipo
// }
// cadastrarUsuario({ nome: "Maiara" });
function cadastrarUsuario2(nome) {
    if (typeof nome === "string") {
        console.log(`Usuário ${nome.toUpperCase()} cadastrado`);
    }
    else {
        console.log("Não Cadastrado");
    }
}
cadastrarUsuario2("Maiara");
cadastrarUsuario2({});
