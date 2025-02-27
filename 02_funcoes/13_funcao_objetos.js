//Funcoes dentro de Objetos

let pessoa  = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    detalhes: function(){
        return `${this.nome} ${this.sobrenome} tem ${this.idade} anos.`;
    }
}

console.log(pessoa.detalhes()); // João Silva tem 30 anos.