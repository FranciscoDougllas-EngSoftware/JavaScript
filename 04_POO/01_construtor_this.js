//Orientação a Objetos - Construtor e This

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

//Instanciando um objeto
let person = new Person('Lucas', 25);
console.log(person); //Person { name: 'Lucas', age: 25 }

//Instanciando outro objeto
let person2 = new Person('João', 30);
console.log(person2); //Person { name: 'João', age: 30 }

let person3 = new Person('Maria', 35);
console.log(`${person3.name} tem ${person3.age} anos.`); //Maria tem 35 anos.