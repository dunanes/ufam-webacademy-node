type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
    private static contador: number = 0;
    private _nome: string;
    private _categoria: string;
    private _preco: number;
    private _status: Status;
    private _codigo: number;

    constructor(nome: string, categoria: string, preco: number, status: Status) {
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._status = status;
        this._codigo = Produto.contador++;
        Produto.contador++;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get categoria(): string {
        return this._categoria;
    }
    public set categoria(value: string) {
        this._categoria = value;
    }

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }

    public get status(): Status {
        return this._status;
    }
    public set status(value: Status) {
        this._status = value;
    }

    public get codigo(): number {
        return this._codigo;
    }
}

class ProdutoInfantil extends Produto {
    private _faixa_etaria: number;

    private validaIdade(faixa_etaria: number): number {
        if (faixa_etaria <= 12) {
            return faixa_etaria;
        } else {
            throw new Error("Faixa etária incompatível! 😡");
        }
    }

    constructor(
        nome: string,
        categoria: string,
        preco: number,
        status: Status,
        faixa_etaria: number
    ) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = this.validaIdade(faixa_etaria);
    }

    get faixa_etaria(): number {
        return this._faixa_etaria;
    }
    set faixa_etaria(value: number) {
        this._faixa_etaria = value;
    }
}

const sabaoParaBebe = new ProdutoInfantil(
    "Sabão para Bebê",
    "Cuidados Pessoais",
    22,
    "ESGOTADO",
    2
);

console.log("📷---PRODUTO---🎨")
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