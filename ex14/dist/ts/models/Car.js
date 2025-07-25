"use strict";
class Car {
    //Instance
    constructor(brand, model) {
        this.speed = 0; //public float speed
        this.brand = brand;
        this.model = model;
    }
    accelerate() {
        this.speed += 10;
        console.log(`Accelerating. Speed: ${this.speed} km/h`);
    }
    ;
    brake() {
        this.speed = Math.max(0, this.speed - 10);
        console.log(`Braking. Speed: ${this.speed} km/h`);
    }
    ;
}
;
const Car1 = new Car("Toyota", "Corolla");
Car1.accelerate();
Car1.brake();
