(function() {
let productList = document.querySelector(".productArray");

const products = [
    {
    name: "Bish Slap",
    category: "Nail Polish",
    description: "Shellac with a Smack",
    price: 14.99,
    quantity: 0,
    },
    {
    name: "Side Eye",
    category: "Eye Shadow",
    description: "Smokey Eye Palette",
    price: 29.99,
    quantity: 0,
    },    
    {
    name: "Basic Bish",
    category: "Powder",
    description: "Loose and Pressed Powder Combo",
    price: 21.99,
    quantity: 0,
    },
    {
    name: "Bad Bish",
    category: "Eye Liner",
    description: "Dramatic Liquid Eyeliner Pencil",
    price: 14.99,
    quantity: 0,
    },   
    {
    name: "Pretty Little Bish",
    category: "Lip Gloss",
    description: "Roller Ball Lip Gloss Set",
    price: 21.99,
    quantity: 0,
    }, 
    {
    name: "Petty Little Bish",
    category: "Contouring",
    description: "Highlighter and Lowlighter Combo",
    price: 29.99,
    quantity: 0,
    }, 
    {
    name: "Ratchet Bish",
    category: "Concealer",
    description: "Creamy Coverage for All Imperfections",
    price: 24.99,
    quantity: 0,
    }, 
    {
    name: "Big Bish",
    category: "Mascara",
    description: "Amplifying Liquid Mascara with Patented Wand to Separate Lashes",
    price: 19.99,
    quantity: 0,
    }, 
    {
    name: "Bish Better Have My Money",
    category: "Lipstick",
    description: "Matte Lipstick That Says Pay Up or Kiss Me Goodbye",
    price: 14.99,
    quantity: 0,
    },
    {
    name: "One Bish, Two Bish",
    category: "Faux Eyelashes",
    description: "Long and Full Faux Eyelash Kit with Magnetic Eyeliner",
    price: 39.99,
    quantity: 0,
    },
    {
    name: "Clean Bish",
    category: "Makeup Remover",
    description: "Reusable and Washable Makeup Remover Cloth with Trial-Size Spritzer",
    price: 39.99,
    quantity: 0,
    }              
]
//leaving products in order above, and will change order physically in array if we want them to show differently on page
//for of loop
/* 
need to add images. See this example https://stackoverflow.com/questions/8810927/showing-an-image-from-an-array-of-images-javascript
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "GoldSassyLips.png";

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
} */

 products.forEach ((indivProduct, i) =>  {
    let productItems = "<ul>";
    let button = document.createElement('button');
    console.log(indivProduct);
    productItems += "<li>" + indivProduct.name + "</li>";
    productItems += "<li>" + indivProduct.category + "</li>";
    productItems += "<li>" + indivProduct.description + "</li>";
    productItems += "<li>" + indivProduct.price + "</li>";
    productItems += `<button data-id=${i}>Add to cart</button>`
    productItems += "</ul>";
    productList.innerHTML += productItems;
}) 
 
  let cart = [
    {
        name: products.name, 
        price: products.price,
        quantity: products.quantity,
    },
    {
      name: products.name, 
      price: products.price,
      quantity: products.quantity,
    }
]

let cartToLocal = JSON.stringify(cart);

window.localStorage.setItem('cart',cartToLocal);

let cartFromStorage = JSON.parse(window.localStorage.getItem('cart'));

cartFromStorage.push({
    name:'item3', 
    price:1.50,
    quantity: 3
})
localStorage.setItem('cart', JSON.stringify(cartFromStorage));

//localStorage.setItem('cart',"[]")
localStorage.clear()

/**
 * Example 2 add to cart
 */
let items = [
    {
        name:'item', 
        price:3.50,
        quantity: 2
    },
    {
        name:'item2', 
        price:0.50,
        quantity: 20
    }
]
cartFromStorage=[];


})();
