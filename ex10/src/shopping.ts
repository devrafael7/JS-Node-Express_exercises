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

//filter

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

console.log(RemoveItemFromCart('cap'))






