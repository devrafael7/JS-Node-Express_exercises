"use strict";
//1.
class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
    presenting() {
        console.log(`Hi, my name is ${this.name}, i'm ${this.age} and i'm also a ${this.profession}.`);
    }
}
const p1 = new Person("Rafael", 19, "Software Engineer");
p1.presenting();
