let variavelAny: any = "Variável"
console.log(variavelAny)

variavelAny = 34;
console.log(variavelAny)

variavelAny = true;
console.log(variavelAny)

function cadastrarUsuario(nome: any): void {
    console.log(`Usuário ${nome.toUpperCase()} cadastrado`)
}
cadastrarUsuario("Maiara");