//Objetos em JavaScript
let personagem = {
    nome: "Gandalf",
    classe: "Mago",
    nivel: 20,
    vida: 100,
    forca: 50,
    defesa: 30,
    magia: 100,
    caracteristicas: function() {
        return "Nome: " + this.nome + 
           "\nClasse: " + this.classe + 
           "\nNível:  " + this.nivel + 
           "\nVida:   " + this.vida + 
           "\nForça:  " + this.forca + 
           "\nDefesa: " + this.defesa + 
           "\nMagia:  " + this.magia;
    }
};

console.log(personagem.nome);
console.log(personagem.classe);
console.log(personagem.nivel);
console.log(personagem.vida);
console.log(personagem.forca);
console.log(personagem.defesa);
console.log(personagem.magia);
console.log(personagem.caracteristicas());