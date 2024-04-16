
const filme = {
    direcao: "Robert Zemeckis",
    nome: "De Volta para o Futuro",
    anoLancamento: 1985,
    elenco: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    jaVi: true
};


console.log("Direção", filme.direcao);
console.log("Ano de Lançamento", filme.anoLancamento);
console.log("Já viu?:", filme.jaVi);


console.log(filme["nome"]);
console.log(filme["elenco"]);
