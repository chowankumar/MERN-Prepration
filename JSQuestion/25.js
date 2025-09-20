//Create a prototype for a Product object with properties like name, price, and quantity. Add a method to the Product prototype to calculate the total value.
function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.calculateTotalValue = function(){
return this.price*this.quantity
}

const product1 = new Product("Widget",10,5);
const totalValue1 = product1.calculateTotalValue();

//product2
const product2 = new Product("Gadget",50,2);
const totalValue2 = product2.calculateTotalValue();

console.log(`Total Value of ${product1.name}: $${totalValue1}`)
console.log(`Total Value of ${product2.name}: $${totalValue2}`)

console.log(Product.prototype);

console.log(product1)

// Prototype : An object from which other objects inherit methods and properties.
// this : refers to the current object instance being created.
// Using .prototype allows you to share the method across all instances instead of defining it separately for each one (saves memory).