"use strict";
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    totalSalary() {
        return this.baseSalary;
    }
}
class Manager extends Employee {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }
    totalSalary() {
        return this.baseSalary + this.bonus;
    }
}
const employee1 = new Employee("Lucas", 1600);
const manager1 = new Manager("Marcio", 5000, 1000);
console.log(`${employee1.name}: $:${employee1.totalSalary()}`);
console.log(`${manager1.name}: $:${manager1.totalSalary()}`);
