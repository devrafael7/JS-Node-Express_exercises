class Product { // public class Product{}
    name: string; //private String name
    price: number; //private float price;
    quantity: number; //private float quantity

    //Instance
    constructor(name: string, price: number, quantity: number){ //public Product(String name, float price, float quantity){};
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    };

    //Method

    show(): void { // public void show();
        console.log(this.name + this.price + this.quantity);
    }

    totalValue(): number { //public float totalValue()
        return this.price * this.quantity;
    };  
};

const prod1 = new Product("Notebook", 850.90, 4);
prod1.show();
console.log("Total value in stock" + prod1.totalValue());

