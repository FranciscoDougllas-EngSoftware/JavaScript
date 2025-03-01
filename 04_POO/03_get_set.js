//Get e set
class Person{
    _age = 10;
    steps = 0;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get age(){ //getters
        return this._age;
    }
    set age(value){ //setters
        this._age = value;
    }
}