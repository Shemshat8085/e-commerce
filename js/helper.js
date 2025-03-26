import { elements } from "./ui.js";

const saveToLocaleStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const getFromLocalStorage =() => {
    const strData = localStorage.getItem("cart");

    return strData ? JSON.parse(strData) : [];
};



const updateCartIcon = (cart) => {
    const cartIcon = document.querySelector("#cart-icon");

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    cartIcon.setAttribute("data-quantity", totalQuantity);
}

const calculateCartTotal = (cart) => {
   return  cart.reduce((total,product) => total + product.price*product.quantity, 0);
};

const displayCartTotal = (cart) => {

    const total=calculateCartTotal(cart);

    console.log(total)

    elements.cartTotal.textContent=`Total: $ ${total.toFixed(2)}`;
};

export {saveToLocaleStorage, getFromLocalStorage, updateCartIcon, calculateCartTotal, displayCartTotal};

