class Animal {
    makeSound(): void {
        console.log("Generic Sound.");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("au au!")
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("miau!")
    }
}

const dog1 = new Dog;
const cat1 = new Cat;

dog1.makeSound();
cat1.makeSound();