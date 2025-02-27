//Funcoes de Arrays
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

//forEach
//O método forEach() executa uma dada função em cada elemento de um array.
//O método forEach() não retorna nada (undefined).
//O método forEach() não altera o array original.
//O método forEach() não executa a função para elementos do array sem valores.
//O método forEach() pode ser mais lento que o loop for.

//Exemplo 1
frutas.forEach(function(fruta){
    console.log(fruta);
});

//Exemplo 2
function imprimirFruta(fruta){
    console.log(fruta);
}

frutas.forEach(imprimirFruta);

//Exemplo 3
frutas.forEach(function(fruta){
    console.log(fruta);
    console.log('---');
});

//utilizando o join
console.log(frutas.join(' - '));

//utilizando o split
let nome = 'Lucas, Henrique, Silva';
let nomes = nome.split(', ');
console.log(nomes);

//utilizando o pop
let fruta = frutas.pop();
console.log(fruta);

//utilizando o push 
frutas.push('Melão');
console.log(frutas);

//utilizando o shift
let fruta1 = frutas.shift();
console.log(fruta1);

//utilizando o unshift
frutas.unshift('Manga');
console.log(frutas);

//utilizando o slice
let frutas2 = frutas.slice(1, 3);
console.log(frutas2);

//utilizando o sort
frutas.sort();
console.log(frutas);