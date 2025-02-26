//Variaveis em JavaScript

//Existe 3 formas de declarar variaveis em JavaScript
// var, let e const

var a = 3 // var é global e local Mutavel
let b = 4 // let é global e local Mutavel
const c = 5 // const é global e local Imutavel

console.log(a, b, c)

//Tipos de variaveis
const nome = 'Francisco'; //String
const idade = 23; //Number
const altura = 1.75; //float
const casado = false; //Boolean
let bolos = ['chocolate', 'morango', 'limão'] //Array
let pessoa = {
     nome: 'Francisco', 
     idade: 23, 
     altura: 1.75, 
     casado: false} //Object

console.log(nome, idade, altura, casado)
console.log(typeof nome, typeof idade, typeof altura, typeof casado)
console.log(typeof bolos, typeof pessoa)