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
        let list = "<tr><th></th><th></th></tr>\n";
        let i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= cart.length-1; i++) {
            list += "<tr><td>" + `<img src=${cart[i].image} class=makeup>` + "</td>\n<td>"
            list += "<tr><td>" + cart[i].name + "</td>\n<td>"
            list += "<tr><td>" + cart[i].price + "</td>\n<td>"
        }
        //If no item exists in the cart.
        if (list == "<tr><th></th><th></th></tr>\n") {
            list += "<tr><td><i></i></td>\n<td><i></i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list').innerHTML = list;
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

    let name = document.forms.ShoppingList.name.JSON.stringify(cartFromStorage);
    let data = document.forms.ShoppingList.data.JSON.stringify(cartFromStorage);
    localStorage.setItem(name, data);
    doShowAll();

}

function SaveItem() {

    var name = document.forms.ShoppingList.name.JSON.stringify(cartFromStorage);
    var data = document.forms.ShoppingList.data.JSON.stringify(cartFromStorage);
    localStorage.setItem(name, data);
    doShowAll();

}

if (localStorage.getItem('cart[i].name') !=null)
            {
              //update
              localStorage.setItem('cart[i].name',JSON.stringify(cartFromStorage));
              document.forms.ShoppingList.data.JSON.stringify(cartFromStorage) = localStorage.getItem('cart[i].name');
            }

    doShowAll();

function RemoveItem() {
let name=document.forms.ShoppingList.name.JSON.stringify(cartFromStorage);
document.forms.ShoppingList.data.JSON.stringify(cartFromStorage)=localStorage.removeItem(name);
doShowAll();
}

function ClearAll() {
    localStorage.clear();
    doShowAll();
}
