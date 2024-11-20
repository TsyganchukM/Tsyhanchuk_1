const title = "mAcer Laptop"; 
const models = ['TEST', 'COPPER', 'NONEX']; 
const colors = ['black', 'silver', 'space gray', 'white', 'blue'];
const materials = ['aluminum', 'plastic', 'carbon fiber', 'magnesium alloy'];
let availability = true; 
let scratches = null; 
let price = 18000; 

const productDetails = {
    title,
    models, 
    colors,
    materials: [...new Set(materials)], 
    availability,
    scratches,
    price,
};


console.log("Product Details:");
console.table(productDetails);
