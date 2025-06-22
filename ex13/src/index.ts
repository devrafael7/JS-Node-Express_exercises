//console.log("hello world!")

//1
function describeUser(name: string, age: number, isAdmin: boolean) : string {
    return `${name} is ${age} years old and admin: ${isAdmin}`;
}

//console.log(describeUser('Rafael', 19, true));

//2

type TypeOfProduct = {
    name: string;
    price: number;
}

const ShoppingCart: TypeOfProduct[] = [];

function AddProduct(p: TypeOfProduct): any {
    ShoppingCart.push(p);
}

function ProductType(ProductName : string, ProductPrice: number) : void {
    const Product: TypeOfProduct = {name: ProductName, price: ProductPrice};
    AddProduct(Product);
    console.log(ShoppingCart);
}

//ProductType('Mouse', 50)

//3

interface Person {
    name: string;
    age: number;
}

 







