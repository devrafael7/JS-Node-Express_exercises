"use strict";
//1.
//Class Creation
class Person {
    //Instance Creation
    constructor(name, age, profession) {
        this.name = name; //this.name = name;
        this.age = age; //this.age = age;
        this.profession = profession; //this.profession = profession;
    }
    //Method Creation
    presenting() {
        //System.out.println(Content + name + age + profession);
        console.log(`Hi, my name is ${this.name}, i'm ${this.age} and i'm also a ${this.profession}.`);
    }
}
//Object Creation
const p1 = new Person("Rafael", 19, "Software Engineer"); // Person p1 = new Person(insert whatever you want);
p1.presenting(); //p1.presenting();
