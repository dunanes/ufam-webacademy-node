"use strict";
class Conta {
    constructor(codigo, saldo, banco) {
        this.codigo = codigo;
        this.saldo = saldo;
        this.banco = banco;
    }
}
class PJ extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado! 💵");
        }
        else {
            console.log("Saldo insuficiente! 💸");
        }
    }
}
class PF extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado! 💵");
        }
        else {
            console.log("Saldo insuficiente! 💸");
        }
    }
}
class Cliente {
    constructor(nome, idade, cpf) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._conta = null;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }
}
function adicionarConta(cliente, conta) {
    cliente.conta = conta;
}
// Testes
const clientes = [];
const cliente1 = new Cliente("Eu", 24, 999888666);
const contaPJ = new PJ(1, 1000, "Banco Aviões do Forró");
adicionarConta(cliente1, contaPJ);
clientes.push(cliente1);
const cliente2 = new Cliente("Você", 25, 919191919);
const contaPF = new PF(2, 500, "Banco Brega Sem Parar");
adicionarConta(cliente2, contaPF);
clientes.push(cliente2);
const cliente3 = new Cliente("Nós", 49, 500515434);
const contaPF2 = new PF(2, 500, "Banco Brega Sem Parar");
adicionarConta(cliente3, contaPF);
clientes.push(cliente3);
const cliente4 = new Cliente("Nós", 49, 500515434);
const contaPF3 = new PF(2, 500, "Banco Brega Sem Parar");
adicionarConta(cliente4, contaPF);
clientes.push(cliente4);
console.log(clientes);
