class Car { //public class Car
    brand: string; //public String brand
    model: string; //public String model
    speed: number = 0; //public float speed

    //Instance
    constructor(brand: string, model:string){ //public Car(String brand, String model, String speed)
        this.brand = brand; 
        this.model = model;
    }

    accelerate(): void {
        this.speed += 10;
        console.log(`Accelerating. Speed: ${this.speed} km/h`);
    };

    brake(): void {
        this.speed = Math.max(0, this.speed - 10);
        console.log(`Braking. Speed: ${this.speed} km/h`);
    };
};

const Car1 = new Car("Toyota", "Corolla");
Car1.accelerate();
Car1.brake();
