//Alterando Objetos
let pessoa = {
    nome: 'João',
    idade: 25,
    profissao: 'Programador',
    novo: [
        {nome: 'Maria', idade: 30},
        {nome: 'Pedro', idade: 35}
    ]
}

console.log(pessoa);
console.log(pessoa.idade);
pessoa.idade = 29;
console.log(pessoa.idade);

console.log(pessoa.novo[0].nome);
pessoa.novo[0].nome = 'Mariana';
console.log(pessoa.novo[0].nome);