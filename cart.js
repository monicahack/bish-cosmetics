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

        //If no item exists in the cart.
        if (cartItems == `<td><tr></tr></td>`) {
            cartItems += `<td><tr>Your cart is empty</tr></td>`;
        }
        //Bind the data to HTML table.
        document.getElementById('cartList').innerHTML = cartItems;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}

doShowAll();

let cartFromStorage = JSON.parse(window.localStorage.getItem('cart'));

localStorage.setItem('cart',JSON.stringify(cartFromStorage));
localStorage.getItem('cart');
localStorage.removeItem('cart[i].name');

function SaveItem() {

    let name = document.forms.shoppingCart.name.JSON.stringify(cartFromStorage);
    let data = document.forms.shoppingCart.data.JSON.stringify(cartFromStorage);
    localStorage.setItem(name, data);
    doShowAll();

}

if (localStorage.getItem('cart[i].name') !=null)
        {
        //update
        localStorage.setItem('cart[i].name',JSON.stringify(cartFromStorage));
        document.forms.shoppingCart.data.JSON.stringify(cartFromStorage) = localStorage.getItem('cart[i].name');
        }
    doShowAll();

function RemoveItem() {
let name=document.forms.shoppingCart.name.JSON.stringify(cartFromStorage);
document.forms.shoppingCart.data.JSON.stringify(cartFromStorage)=localStorage.removeItem(name);
doShowAll();
}

function ClearAll() {
    localStorage.clear();
    doShowAll();
}
