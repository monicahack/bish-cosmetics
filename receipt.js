function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}

function doShowAll() {
    if (CheckBrowser()) {
        let key = "cart";
        let cart = JSON.parse(localStorage.getItem(key));
        let cartItems = "<tr>";
        let i = 0;
        for (i = 0; i <= cart.length-1; i++) {
            cartItems += "<td id=image>" + `<img src=${cart[i].image} class=cartMakeup>` + "</td>"
            cartItems += "<td id=name>" + cart[i].name + "</td>"
            cartItems += "<td id=price>" + "$" + cart[i].price + "</td>"
            cartItems += "</tr>";
        }

        //Bind the data to HTML table.
        document.getElementById('cartList').innerHTML = cartItems;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}
doShowAll();

let subTotal = 0;
let tax = .06;
let grandTotal = 0;
function getTotal() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++) {
        subTotal += (cart[i].price);
    }
        let salesTax = subTotal * tax;
        grandTotal = subTotal + salesTax;
        subTotal = subTotal.toFixed(2);
        salesTax = salesTax.toFixed(2);
        grandTotal = grandTotal.toFixed(2);
        
        let checkoutItems = "<ul>";
        
        checkoutItems += "<li>" + "Sub Total: " + "$" + `${subTotal}` + "</li>"
        checkoutItems += "<li>" + "6% Sales Tax: " + "$" + `${salesTax}` + "</li>"
        checkoutItems += "<li>" + "Total Due: " + "$" + `${grandTotal}` + "</li>"
        checkoutItems += "</ul>";
        let checkoutTotals = document.querySelector("#checkoutTotals");
        checkoutTotals.innerHTML += checkoutItems;

           
}
getTotal();
console.log(grandTotal);

let cartFromStorage = JSON.parse(window.localStorage.getItem('cart'));

localStorage.setItem('cart',JSON.stringify(cartFromStorage));
localStorage.getItem('cart');
localStorage.removeItem('cart[i].name');




