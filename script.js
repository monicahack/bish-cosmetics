(function() {
let productList = document.querySelector(".productArray");

const products = [
    {
    name: "Bish Slap",
    category: "Nail Polish",
    description: "Shellac with a Smack",
    price: 14.99,
    quantity: 0,
    image: "Assets/BishNailPolish.jpg"
    },
    {
    name: "Side Eye",
    category: "Eye Shadow",
    description: "Smokey Eye Palette",
    price: 29.99,
    quantity: 0,
    image: "Assets/Smokyeye.PNG"
    },    
    {
    name: "Basic Bish",
    category: "Powder",
    description: "Loose and Pressed Powder Combo",
    price: 21.99,
    quantity: 0,
    image: "Assets/Loosepowder.PNG"
    },
    {
    name: "Bad Bish",
    category: "Eye Liner",
    description: "Dramatic Liquid Eyeliner Pencil",
    price: 14.99,
    quantity: 0,
    image: "Assets/eyeliner.jpg"
    },   
    {
    name: "Pretty Little Bish",
    category: "Lip Gloss",
    description: "Roller Ball Lip Gloss Set",
    price: 21.99,
    quantity: 0,
    image: "Assets/lipgloss.jpg"
    }, 
    {
    name: "Petty Little Bish",
    category: "Contouring",
    description: "Highlighter and Lowlighter Combo",
    price: 29.99,
    quantity: 0,
    image: "Assets/HighlighterCombo.jpg"
    }, 
    {
    name: "Ratchet Bish",
    category: "Concealer",
    description: "Creamy Coverage for All Imperfections",
    price: 24.99,
    quantity: 0,
    image: "Assets/Concealer.jpg"
    }, 
    {
    name: "Big Bish",
    category: "Mascara",
    description: "Amplifying Liquid Mascara with Patented Wand to Separate Lashes",
    price: 19.99,
    quantity: 0,
    image: "Assets/Mascara.jpg"
    }, 
    {
    name: "Bish Better Have My Money",
    category: "Lipstick",
    description: "Matte Lipstick That Says Pay Up or Kiss Me Goodbye",
    price: 14.99,
    quantity: 0,
    image: "Assets/Mattelip.jpg"
    

    },
    {
    name: "One Bish, Two Bish",
    category: "Faux Eyelashes",
    description: "Long and Full Faux Eyelash Kit with Magnetic Eyeliner",
    price: 39.99,
    quantity: 0,
    image: "Assets/Eyelashes.jpg"
    },
    {
    name: "Clean Bish",
    category: "Makeup Remover",
    description: "Reusable and Washable Makeup Remover Cloth with Trial-Size Spritzer",
    price: 39.99,
    quantity: 0,
    image: "Assets/Makeupremover.jpg"
    }              
]

 products.forEach ((indivProduct, i) =>  {
    let productItems = "<ul>";
    productItems += `<img src=${indivProduct.image} class=makeup>`
    
    console.log(indivProduct);
    productItems += "<li>" + indivProduct.name + "</li>";
    productItems += "<li>" + indivProduct.category + "</li>";
    productItems += "<li>" + indivProduct.description + "</li>";
    productItems += "<li>" + indivProduct.price + "</li>";
    productItems += `<button data-id=${i}>Add to cart</button>`
    productItems += "</ul>";
    productList.innerHTML += productItems;
}) 

let cartFromStorage = JSON.parse(window.localStorage.getItem('cart'));

let myButtons = document.querySelectorAll('button');
myButtons.forEach((myButton)=> {
    myButton.addEventListener('click',(event)=>{
        if(event.target.hasAttribute('data-id')){
            if(!cartFromStorage) {
                cartFromStorage = [];
            }
            let id = event.target.getAttribute('data-id');
            cartFromStorage.push(products[id]);
            localStorage.setItem('cart',JSON.stringify(cartFromStorage));
    }})
})

})();