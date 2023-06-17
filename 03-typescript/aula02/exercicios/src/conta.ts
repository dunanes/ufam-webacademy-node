abstract class Conta {
    protected codigo: number;
    protected saldo: number;
    protected banco: string;

    constructor(codigo: number, saldo: number, banco: string) {
        this.codigo = codigo;
        this.saldo = saldo;
        this.banco = banco;
    }

    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
}

class PJ extends Conta {
    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado! 💵");
        } else {
            console.log("Saldo insuficiente! 💸");
        }
    }
}

class PF extends Conta {
    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado! 💵");
        } else {
            console.log("Saldo insuficiente! 💸");
        }
    }
}

class Cliente {
    private _nome: string;
    private _idade: number;
    private _cpf: number;
    private _conta: Conta | null;

    constructor(nome: string, idade: number, cpf: number) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._conta = null;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    get cpf(): number {
        return this._cpf;
    }

    set cpf(cpf: number) {
        this._cpf = cpf;
    }

    get conta(): Conta | null {
        return this._conta;
    }

    set conta(conta: Conta | null) {
        this._conta = conta;
    }
}

function adicionarConta(cliente: Cliente, conta: Conta): void {
    cliente.conta = conta;
}


// Testes

const clientes: Cliente[] = [];

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