"use strict";
class BankAccount {
    //Intsance
    constructor(holder) {
        this.balance = 0; //private float balance = 0
        this.holder = holder; // this.holder = holder
    }
    ;
    deposit(value) {
        this.balance += value;
    }
    ;
    withdraw(value) {
        if (value > this.balance) {
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= value;
    }
    ;
    checkBalance() {
        console.log(`Balance of ${this.holder}: ${this.balance}`);
    }
}
const BankAccount1 = new BankAccount("Rafael");
BankAccount1.deposit(500);
BankAccount1.withdraw(200);
BankAccount1.checkBalance();
