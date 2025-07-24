class Student {
  //public class Student
  name: string;
  grade1: number;
  grade2: number;

  //Instance
  constructor(name: string, grade1: number, grade2: number) {
    //public Student(String name, float grade1, float grade2){}
    this.name = name;
    this.grade1 = grade1;
    this.grade2 = grade2;
  }

  get average(): number {
    return Number(((this.grade1 + this.grade2) / 2).toFixed(2));
  }

  get approved(): boolean { //Or// //approved(): boolean{} -> calling object with parentheses/parameter
    return this.average >= 7;
  }
};

const student1 = new Student("Rafael", 85.4, 90.2);
console.log(`Average: ${student1.average}, Status: ${student1.approved ? "Approved" : "Not Approved"}`);

