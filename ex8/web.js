let shoppingCart = [];

let qtdItem = (Math.random(10) * 10).toFixed(0);

function AddToShoppingCart(){
    shoppingCart.push(qtdItem);
    console.log(`${qtdItem} was added to the shopping cart!`);
    console.log(`You have ${shoppingCart} in the cart right now.`)
};

//AddToShoppingCart();

function RemoveFromShoppingCart(qtdToRemove){
    if (qtdItem <= 0){
        console.log(`you can't remove more items.. current quantity of items: ${qtdItem}`);
    } else if (qtdItem < qtdToRemove){
        qtdItem = 0;
    } else {
        qtdItem = qtdItem - qtdToRemove;
    };
    shoppingCart = qtdItem;
    console.log(`Current quantity of items in the shopping cart: ${shoppingCart}`);
};

//RemoveFromShoppingCart(4);

let NshoppingCart = [];
let NqtdItem = 0;

function AddItemByName(product){
    NshoppingCart.push(product);
};

//AddItemByName("Shoes");
//AddItemByName("Glasses");
//AddItemByName("Ring");
//
//console.log(NshoppingCart);


function RemoveItemByName(product){
    NshoppingCart = NshoppingCart.filter(newArray => {
        return newArray !== product;
    });
    console.log(NshoppingCart);
};

//RemoveItemByName("Ring");

let cartByNameAndPrice = [];

function AddToCartByNameAndPrice({product, price}){
    cartByNameAndPrice.push({product, price});
    console.log(cartByNameAndPrice);;
};

AddToCartByNameAndPrice({product: "earring", price: 29.99});
AddToCartByNameAndPrice({product: "collar", price: 72});





