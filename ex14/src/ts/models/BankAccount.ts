class BankAccount { //public class BankAccount{}
    holder: string; //public String holder
    private balance: number = 0; //private float balance = 0

    //Intsance
    constructor(holder: string) { //public BankAccount(String holder)
        this.holder = holder; // this.holder = holder
    };

    deposit(value: number): void {
        this.balance += value;
    };

    withdraw(value: number): void {
        if (value > this.balance){
            console.log("Insufficient balance.");
            return;
        }
        this.balance -= value;
    };

    checkBalance(): void {
        console.log(`Balance of ${this.holder}: ${this.balance}`);
    }
}

const BankAccount1 = new BankAccount("Rafael");
BankAccount1.deposit(500);
BankAccount1.withdraw(200);
BankAccount1.checkBalance();
