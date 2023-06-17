enum cores {
    branco = "#FFFFFF",
    preto = "#000000"
}
console.log(cores["branco"])

enum permissao {
    ADMIN,
    USUARIO,
    SUPORTE
}
console.log("permissao.ADMIN", permissao.ADMIN)
console.log("permissao.SUPORTE", permissao.SUPORTE)

enum Heterogeneous {
    Segunda = 'Segunda-feira',
    Terca = 1,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 18,
}
console.log(Heterogeneous["Segunda"]);
console.log(Heterogeneous.Segunda);