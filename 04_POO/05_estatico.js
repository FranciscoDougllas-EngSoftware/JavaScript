class Person{
    static hands = 2;
    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`Hi! My name is ${this.name} e tenho ${Person.hands} mãos`);
    }
}

let p1 = new Person('João');
p1.sayHi(); // Hi! My name is João e tenho 2 mãos