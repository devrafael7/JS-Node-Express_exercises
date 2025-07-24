"use strict";
class Student {
    //Instance
    constructor(name, grade1, grade2) {
        //public Student(String name, float grade1, float grade2){}
        this.name = name;
        this.grade1 = grade1;
        this.grade2 = grade2;
    }
    get average() {
        return Number(((this.grade1 + this.grade2) / 2).toFixed(2));
    }
    get approved() {
        return this.average >= 7;
    }
}
;
const student1 = new Student("Rafael", 85.4, 90.2);
console.log(`Average: ${student1.average}, Status: ${student1.approved ? "Approved" : "Not Approved"}`);
