"use strict";
class Produto {
    constructor(nome, categoria, preco, status) {
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = status;
        this._codigo = Produto.contador++;
        Produto.contador++;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get categoria() {
        return this._categoria;
    }
    set categoria(value) {
        this._categoria = value;
    }
    get preco() {
        return this._preco;
    }
    set preco(value) {
        this._preco = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get codigo() {
        return this._codigo;
    }
}
Produto.contador = 0;
class ProdutoInfantil extends Produto {
    validaIdade(faixa_etaria) {
        if (faixa_etaria <= 12) {
            return faixa_etaria;
        }
        else {
            throw new Error("Faixa etária incompatível! 😡");
        }
    }
    constructor(nome, categoria, preco, status, faixa_etaria) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = this.validaIdade(faixa_etaria);
    }
    get faixa_etaria() {
        return this._faixa_etaria;
    }
    set faixa_etaria(value) {
        this._faixa_etaria = value;
    }
}
const sabaoParaBebe = new ProdutoInfantil("Sabão para Bebê", "Cuidados Pessoais", 22, "ESGOTADO", 2);
console.log("📷---PRODUTO---🎨");
console.log(sabaoParaBebe.nome);
sabaoParaBebe.nome = "Novo Sabão";
console.log(sabaoParaBebe.nome);
console.log(sabaoParaBebe.codigo);
console.log(sabaoParaBebe.faixa_etaria);
sabaoParaBebe.faixa_etaria = 10;
console.log(sabaoParaBebe.faixa_etaria);
// const sabao = new ProdutoInfantil(
//     "Sabão para Bebê",
//     "Cuidados Pessoais",
//     22,
//     "ESGOTADO",
//     22
// );
