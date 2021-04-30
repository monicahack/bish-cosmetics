(function() {
let productList = document.querySelector(".productArray");

const products = [
    {
    name: "Bish Slap",
    category: "Nail Polish",
    description: "Shellac with a smack",
    price: 14.99,
    },
    {
    name: "Side Eye",
    category: "Eye Shadow",
    description: "Smokey Eye Palette",
    price: 29.99,
    },    
    {
    name: "Basic Bish",
    category: "Powder",
    description: "Loose and Pressed Powder Combo",
    price: 21.99,
    },
    {
    name: "Bad Bish",
    category: "Eye Liner",
    description: "Dramatic liquid eye liner pencil",
    price: 14.99,
    },   
    {
    name: "Pretty Little Bish",
    category: "Lip Gloss",
    description: "Roller Ball Lip Gloss Set",
    price: 21.99,
    }, 
    {
    name: "Petty Little Bish",
    category: "Contouring",
    description: "Highlighter and Lowlighter Combo",
    price: 29.99,
    }, 
    {
    name: "Ratchet Bish",
    category: "Concealer",
    description: "Creamy coverage for all imperfections",
    price: 24.99,
    }, 
    {
    name: "Big Bish",
    category: "Mascara",
    description: "Amplifying Liquid Mascara With Patented Wand to Separate Lashes",
    price: 19.99,
    }, 
    {
    name: "Bish Better Have My Money",
    category: "Lipstick",
    description: "Matte Lipstick That Says Pay Up or Kiss Me Goodbye",
    price: 14.99,
    },
    {
    name: "One Bish, Two Bish",
    category: "Faux Eyelashes",
    description: "Long and Full Faux Eyelash Kit With Magnetic Eyeliner",
    price: 39.99,
    },
    {
    name: "Clean Bish",
    category: "Makeup Remover",
    description: "Reusable and Washable Makeup Remover Cloth With Trial Size Spritzer",
    price: 39.99
    }              
]
//leaving products in order above, and will change order physically in array if we want them to show differently on page
//for of loop


 for (const indivProduct of products) {
    let productItems = "<ul>";
    console.log(indivProduct);
    productItems += "<li>" + indivProduct.name + "</li>";
    productItems += "<li>" + indivProduct.category + "</li>";
    productItems += "<li>" + indivProduct.description + "</li>";
    productItems += "<li>" + indivProduct.price + "</li>";
    productItems += "</ul>";
    productList.innerHTML += productItems;
  } 
 
  

})();
