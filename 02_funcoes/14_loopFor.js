//Utilizando o LoopFor

let pessoa  = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    detalhes: function() {
        return `${this.nome} ${this.sobrenome} tem ${this.idade} anos.`;
    }
};

for (let prop in pessoa) {
    console.log(prop);
}


//Caclulando a quantidade de propriedades
for(let i = 1; i <= 10; i ++){
    console.log(i);
}