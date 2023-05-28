"use strict";
var cores;
(function (cores) {
    cores["branco"] = "#FFFFFF";
    cores["preto"] = "#000000";
})(cores || (cores = {}));
console.log(cores["branco"]);
var permissao;
(function (permissao) {
    permissao[permissao["ADMIN"] = 0] = "ADMIN";
    permissao[permissao["USUARIO"] = 1] = "USUARIO";
    permissao[permissao["SUPORTE"] = 2] = "SUPORTE";
})(permissao || (permissao = {}));
console.log("permissao.ADMIN", permissao.ADMIN);
console.log("permissao.SUPORTE", permissao.SUPORTE);
var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous["Segunda"] = "Segunda-feira";
    Heterogeneous[Heterogeneous["Terca"] = 1] = "Terca";
    Heterogeneous[Heterogeneous["Quarta"] = 2] = "Quarta";
    Heterogeneous[Heterogeneous["Quinta"] = 3] = "Quinta";
    Heterogeneous[Heterogeneous["Sexta"] = 4] = "Sexta";
    Heterogeneous[Heterogeneous["Sabado"] = 5] = "Sabado";
    Heterogeneous[Heterogeneous["Domingo"] = 18] = "Domingo";
})(Heterogeneous || (Heterogeneous = {}));
console.log(Heterogeneous["Segunda"]);
console.log(Heterogeneous.Segunda);
