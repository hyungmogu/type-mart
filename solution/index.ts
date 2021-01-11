import products from './products';

let productName: string = products[0].name;
let shipping: number;
let shippingAddress: string = "123 Springfield Avenue, New York";
let taxPercent: number;
let taxTotal: number;
let total: number;

let product = products.filter(item => {
  if (item.name == productName) {
    return true;
  }
})[0];

if (Number(product.price) >= 25) {
  console.log("Free shipping being provided");
  shipping = 0;
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

if (product.preOrder == 'true') {
  console.log("we’ll send a message when it’s on the way");
}

console.log(`Product name: ${product.name}`);
console.log(`Shipping address: ${shippingAddress}`);
console.log(`Price of the product: ${product.price}`);
console.log(`Tax total: ${product.price}`);
console.log(`Shipping: ${shipping}`);
console.log(`Total amount: ${total}`);