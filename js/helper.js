
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

export {saveToLocaleStorage, getFromLocalStorage, updateCartIcon};