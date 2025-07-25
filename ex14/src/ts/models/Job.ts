class Employee { 
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    totalSalary(): number {
        return this.baseSalary;
    }
}

class Manager extends Employee{
    constructor(name: string, baseSalary: number, public bonus: number){
        super(name, baseSalary);
    }

    totalSalary(): number {
        return this.baseSalary + this.bonus;
    }
}

const employee1 = new Employee("Lucas", 1600);
const manager1 = new Manager("Marcio", 5000, 1000);

console.log(`${employee1.name}: $:${employee1.totalSalary()}`);
console.log(`${manager1.name}: $:${manager1.totalSalary()}`);