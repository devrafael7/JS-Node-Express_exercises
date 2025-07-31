interface Cart {
  item: string;
  price: number;
}

const cartValue: Cart[] = [
  { item: "keyboard", price: 30 },
  { item: "monitor", price: 180 },
  { item: "coat", price: 70 },
  { item: "bracelet", price: 17 },
];

//map
const discount: Cart[] = cartValue.map((i) => {
  return {
    item: i.item,
    price: i.price - i.price / 2,
  };
});

//filter
const greaterThan50: Cart[] = cartValue.filter(i => i.price > 50);

//find
const FindValue: Cart | undefined = cartValue.find(i => i.item == "keyboard");

//reduce
const totalSum: Number = cartValue.reduce((acc, i) => acc + i.price,0);

//some
const someValue: boolean = cartValue.some(i => i.price > 20);

//every
const everyValue: boolean = cartValue.every(i => i.price > 20);

