type Cart = {
    product: string;
    price: number;
    quantity: number;
    size?: string;
}

const userCart: Cart[] = [
    {product: 'shoes', price: 109.99, quantity: 1, size: '38'},
    {product: 'cap', price: 9.99, quantity: 2},
    {product: 'earring', price: 5.99, quantity: 2}
];

//map()

//console.log(userCart.map(i => i));

const totalPrice: number[] = userCart.map(i => i.quantity * i.price);
//console.log(totalPrice)

const userCartTotal: Cart[] = userCart.map(i => ({
    ...i,
    price: i.price * i.quantity
}));

console.log(userCartTotal);

//filter()

function RemoveItemFromCart(name: string): Cart[]{
    return userCartTotal.map(item => {
        if (item.product === name) {
            if (item.quantity > 1){
                return {
                    ...item,
                    quantity: item.quantity - 1,
                    price: (item.price / item.quantity) * (item.quantity - 1),
                };
            } return null
        }
        return item;
    }).filter(item => item !== null) as Cart[];
}

//forEach()
userCartTotal.forEach(i => console.log(i.price * i.quantity));

//find()
function FindItem(nameSearch: string){
    console.log(userCartTotal.find(i => i.product == nameSearch));
};

FindItem('earring');

//findIndex()
function FindIndexOfItem(nameSearch: string){
    console.log(userCartTotal.findIndex(i => i.product === nameSearch));
};

FindIndexOfItem('earring');


//some()
function IsItMoreThan50() {
    userCartTotal.forEach(i => console.log(`${i.product}: ${i.price >= 50}`));

    const hasItemMoreThan50 = userCartTotal.some(i => i.price >= 50);
    console.log(`Is There some value more or equals 50? ${hasItemMoreThan50}`);
}

IsItMoreThan50();

//reduce

function PriceSum(): number {
    return  userCartTotal.reduce((acc, i) => acc + i.price, 0);
}

console.log(PriceSum());

//includes()

function IsReal(productName: string): boolean{
    return userCartTotal.some(i => i.product.includes(productName));
}

console.log(IsReal('x'));








