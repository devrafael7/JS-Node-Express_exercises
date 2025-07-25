class Item {
    constructor(public name: string, public price: number){}
}

class Order {
    items: Item[];

    constructor(items: Item[]){
        this.items = items;
    }

    total(): number {
        return this.items.reduce((sum, i)=> sum + i.price, 0);
    }
}

const itemsID1 = [new Item("Pizza", 30), new Item("Burguer", 10)];
const orderID1 = new Order(itemsID1);

const itemsID2 = [new Item("Apple Juice", 12)];
const orderID2 = new Order(itemsID2);

console.log("Order Total: ", "Order1: ",orderID1.total(), "Order2: ", orderID2.total());