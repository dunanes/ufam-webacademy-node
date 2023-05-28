"use strict";
;
;
var categoria;
(function (categoria) {
    categoria["romance"] = "Romance";
    categoria["ficcaoCientifica"] = "Fic\u00E7\u00E3o Cient\u00EDfica";
    categoria["terror"] = "Terror";
    categoria["literatura"] = "Literatura";
    categoria["cientifico"] = "Cient\u00EDfico";
    categoria["culinario"] = "Culin\u00E1rio";
})(categoria || (categoria = {}));
;
const livro1 = {
    titulo: "A Odisseia de Pi: O Pesadelo Continua 3.14",
    preco: 314.00,
    categoria: categoria.terror
};
const livro2 = {
    titulo: "O Amor em Pedaços: Como Cortar um Bolo",
    preco: 30.50,
    categoria: categoria.culinario
};
const livro3 = {
    titulo: "A Segunda Guerra de Marte",
    preco: 2.99,
    categoria: categoria.literatura
};
const livro4 = {
    titulo: "Victoria",
    preco: 25.00,
    categoria: categoria.romance
};
const biblioteca = new Map();
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
