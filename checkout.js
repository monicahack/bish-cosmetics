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


function amountPaid() {
    const form = document.getElementById('paymentForm');
    const data = new FormData(form);
    let cashTendered = data.get ('cashPayment');
    
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
    let cashTendered = amountPaid();
    if (cashTendered >= grandTotal) {
        let paymentItems = "<ul>"
        let changeBack = cashTendered - grandTotal;
        changeBack = changeBack.toFixed(2);
        console.log((changeBack));
        let payment = JSON.parse(window.localStorage.getItem('payment'));
        if(!payment) {
            payment = [];
        }
        payment.push(cashTendered);
        payment.push(changeBack);
        paymentItems += "<li>" + "Amount Paid: " + "$" + `${cashTendered}` + "</li>"
        paymentItems += "<li>" + "Change Due: " + "$" + `${changeBack}` + "</li>"
        paymentItems += "</ul>";
        let paymentInfo = document.querySelector(".paymentInfo");
        paymentInfo.innerHTML += paymentItems;
        localStorage.setItem('payment',JSON.stringify(payment));
        window.location.replace("receipt.html");

    } else {
        alert("Insufficient payment, please try again Bish");
    }
   })