function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}

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
        salesTax = salesTax.toFixed(2);
        grandTotal = grandTotal.toFixed(2);
        
        let checkoutItems = "<ul>";
        checkoutItems += "<li>" + "Sub Total: " + "$" + `${subTotal}` + "</li>"
        checkoutItems += "<li>" + "6% Sales Tax: " + "$" + `${salesTax}` + "</li>"
        checkoutItems += "<li>" + "Total Due: " + "$" + `${grandTotal}` + "</li>"
        checkoutItems += "</ul>";
        let checkoutTotals = document.querySelector(".checkoutContainer");
        checkoutTotals.innerHTML += checkoutItems;
           
}
getTotal();
console.log(grandTotal);

//for cash payments
//if radio button selected is cash
//then take amount paid, subtract amount due and provide change due
//see previous lab for checking money
//reference lines 94-95 in checkout.html for id etc