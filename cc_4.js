let products = [
    {name: "Charger", category: "electronics", price: 15, inventory: 30 },  
    {name: "Hat", category: "apparel", price: 20, inventory: 15 },
    {name: "Apples", category: "groceries", price: 2, inventory: 100 },
    {name: "Paper Plates", category: "household", price: 8, inventory: 10 },
    {name: "Gum", category: "candy", price: 1, inventory: 20 }
];
for (let product of products) {
    switch (product.category) {
        case "electronics":
            product.price *= 0.8;
            break;
            case "apparel":
                product.price *= 0.85;
                break;
                case "groceries":
                    case "household":
                        product.price *= 0.9;
                        break;
                        default:
                            break;
    }
}
let customerType = "student";
for (let i = 1; i <= 3; i++) {
    let total = 0;
    for (let product of products) {
        if (product.inventory > 0) {
            total += product.price;
            product.inventory--;
        }
    }
if (customerType === "student") {
    total *= 0.95;
} else if (customerType === "senior") {
total *= 0.93;
}
console.log("Customer " + i + " Total: $" + total.toFixed(2));
}
let oneProduct = products[0];
for (let key in oneProduct) {
    console.log(key + ": " + oneProduct[key]);
}
for (let product of products) {
    for (let [key, value] of Object.entries(product)) {
        console.log(key + ": " + value);
    }
}