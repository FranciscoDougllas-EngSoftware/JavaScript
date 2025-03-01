//Orientação a Objetos - Construtor e This

class Person{
    age = 0;
    steps = 0;
    constructor(name, age){
        this.name = name;
    }
    takeAstep(){
        this.steps++;
        console.log(`${this.name} deu um passo.`);
    }
    setAge(newAge){
        if(typeof newAge === 'number'){
            this.age = newAge;
    }
}

let p1 = new Person('Joao');
let p2 = new Person('Maria');
let p3 = new Person('Lucas');

p1.takeAstep();
p2.takeAstep();
p3.takeAstep();
p1.takeAstep();
p2.takeAstep();
p3.takeAstep();

console.log(p1.steps); //2
console.log(p2.steps); //2
console.log(p3.steps); //2

p1.setAge(25);
p2.setAge(30);
p3.setAge(35);
console.log(p1.age); //25
console.log(p2.age); //30
console.log(p3.age); //35