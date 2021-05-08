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
        subTotal = subTotal.toFixed(2);
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

//if(checkboxEl.checked) //this says if a radio button or checkbox is checked

//to access form data:
function amountPaid() {
    const form = document.getElementById('paymentForm');
    const data = new FormData(form);
    let cashTendered = data.get ('cashPayment');
    //parseFloat(cashTendered);
    return parseFloat(cashTendered);
} 
   

function getRadio(){
return document.querySelector("input[type=radio]:checked").value    
}

const form = document.getElementById('paymentForm');
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(amountPaid());
    console.log(getRadio());
    console.log("this is your grand total " + grandTotal);
    let changeBack= grandTotal - cashTendered;
    console.log(changeBack);
    
    
    //amount paid (Grand Total)- amount due = change due, if less than zero, then insufficient pymnt, try again Bish
   })
   

//for cash payments
//if radio button selected is cash
//then take amount paid, subtract amount due and provide change due
//see previous lab for checking money
//reference lines 94-95 in checkout.html for id etc