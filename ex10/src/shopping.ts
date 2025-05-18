type Cart = {
    product: string;
    price: number;
    quantity: number;
    size?: string;
}

const userCart: Cart[] = [
    {product: 'shoes', price: 29.99, quantity: 1, size: '38'},
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






