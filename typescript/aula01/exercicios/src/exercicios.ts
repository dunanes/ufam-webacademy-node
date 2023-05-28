interface livro {
    titulo: string;
    preco: number;
    categoria?: categoria // Categoria opcional
};

interface autor {
    nome: string;
    idade: number;
};

enum categoria { // Categoria como enum
    romance = "Romance",
    ficcaoCientifica = "Ficção Científica",
    terror = "Terror",
    literatura = "Literatura",
    cientifico = "Científico",
    culinario = "Culinário"
};

type autorLivro = autor | livro;

const livro1: livro = {
    titulo: "A Odisseia de Pi: O Pesadelo Continua 3.14",
    preco: 314.00,
    categoria: categoria.terror
};

const livro2: livro = {
    titulo: "O Amor em Pedaços: Como Cortar um Bolo",
    preco: 30.50,
    categoria: categoria.culinario
};

const livro3: livro = {
    titulo: "A Segunda Guerra de Marte",
    preco: 2.99,
    categoria: categoria.literatura
};

const livro4: livro = {
    titulo: "Victoria",
    preco: 25.00,
    categoria: categoria.romance
};

const biblioteca: Map<string, autorLivro> = new Map();
biblioteca.set(livro1.titulo, livro1);
biblioteca.set(livro2.titulo, livro2);
biblioteca.set(livro3.titulo, livro3);
biblioteca.set(livro4.titulo, livro4);

biblioteca.forEach((item) => {
    if ('categoria' in item) {
        console.log("Livro");
        item.titulo.includes(" ") ? console.log("Título: ", item.titulo.toLowerCase()) : console.log("Título: ", item.titulo.toUpperCase());
        console.log("Preço: R$", item.preco);
        console.log("Categoria: ", item.categoria);
    }
});