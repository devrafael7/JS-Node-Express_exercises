const fs = require("fs");

/*


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
*/

function GenerateUserID(){
    return crypto.randomUUID();
}

const userID = GenerateUserID();

const userDataFile = `${userID}.json`;

function SaveCartToFile(){
    fs.writeFileSync("cart.json", JSON.stringify(cartByNameAndPrice, null, 2));
};

let cartByNameAndPrice = [];

function AddToCartByNameAndPrice({product, price}){
    cartByNameAndPrice.push({product, price});
    SaveCartToFile();
    console.log(cartByNameAndPrice);;
};

AddToCartByNameAndPrice({product: "Earring", price: 29.99});
AddToCartByNameAndPrice({product: "Collar", price: 72});
AddToCartByNameAndPrice({product: "Hat", price: 15});
//AddToCartByNameAndPrice({product: "Pants", price: 59.99});

let finalBalance = 0;

if (cartByNameAndPrice.length === 0){
    return;
} else {
    function RemoveItemByNameAndPrice({product}){
        cartByNameAndPrice = cartByNameAndPrice.filter(cartItem => {
            return cartItem.product.toLowerCase() !== product.toLowerCase();
        });
        SaveCartToFile();
        console.log(cartByNameAndPrice);
    };
    
    RemoveItemByNameAndPrice({product: "hat"});
    
    let totalPrice = 0;
    function FindTotalPrice(){
        totalPrice = cartByNameAndPrice.reduce((total, item)=>{
            return total + item.price;
        },0);
        console.log(totalPrice);
    };
    
    FindTotalPrice();
    
    let userPoints = 0;
    let discountApplied = false;
    const balance = (Math.random(10) * 200).toFixed(2);
    function CheckBalance(){
        console.log(balance);
        let isSufficient = false;
        if (balance >= totalPrice){
            isSufficient = true;
        };
    
        const balanceStatus = isSufficient ? `Sufficient Balance`: `Insufficient Balance`;
        console.log(balanceStatus);
    
        function BuyProducts(){
            if (isSufficient){
                finalBalance = balance - totalPrice;
                if (discountApplied){
                    finalBalance -= userPoints;
                }
                userPoints = 0;
                console.log(`Purchase made successfully! Your current balance is: ${(finalBalance).toFixed(2)}`);
            } else {
                console.log(`It needs ${(totalPrice - balance).toFixed(2)} to make the purchase`);
            };
    
                    
            function EarnPointsPerPurchase(){
                userPoints += Math.floor(totalPrice / 10);
                console.log(`You have ${userPoints}`);
            };
    
            function ApplyDiscount(){
                discountApplied = true;            
            }
    
            if (isSufficient){
                EarnPointsPerPurchase();
            }; 
    
            if (isSufficient){
                ApplyDiscount();
            }; 
    
        };
    
        BuyProducts();
    };
    
    CheckBalance();
   
    /*

    function SearchProduct({productName}){
        return cartByNameAndPrice.some(item => item.product === productName) ? `Product Found` : `Product Not Found`;
    };
    
    //console.log(SearchProduct({productName: "earring"}));
    
    function SearchProductByKeyword({product}){
        const lowerKeyword = product.toLowerCase();
    
        const filteredKeyword = cartByNameAndPrice.filter(item => item.product.toLowerCase().includes(lowerKeyword));
        return filteredKeyword.length ? filteredKeyword: `Product not found by keyword`;
    };
    
    console.log(SearchProductByKeyword({product: "earr"}));
    console.log(SearchProductByKeyword({product: "p"}));    
    */

    const userData = {
        id: userID,
        cart: cartByNameAndPrice,
        points: userPoints,
        currentBalance: finalBalance
    };

    function CreateUserDataFile(){

        fs.writeFileSync(userDataFile, JSON.stringify(userData, null, 2), (err) => {
            if (err) {
                console.log(`Error creating the file.. ${err}`)
            } else {
                console.log(`File created successfully!`);
            };
        });
    };

    CreateUserDataFile();
};

