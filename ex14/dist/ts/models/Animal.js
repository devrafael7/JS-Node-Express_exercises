"use strict";
class Animal {
    makeSound() {
        console.log("Generic Sound.");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("au au!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("miau!");
    }
}
const dog1 = new Dog;
const cat1 = new Cat;
dog1.makeSound();
cat1.makeSound();
