import fetchProducts from "./api.js";
import { addToCart } from "./cart.js";
import { getFromLocalStorage, updateCartIcon } from "./helper.js";
import { elements, renderCartItems, renderProducts } from "./ui.js";





elements.menuIcon.addEventListener("click", () => {
    elements.menu.classList.toggle("open-menu");
});



document.addEventListener("DOMContentLoaded", () => {
   

    if(window.location.pathname.includes("/cart.html")){
       const cart = getFromLocalStorage();

       renderCartItems(cart);

    } else {
        fetchProducts().then((products)=>{
            renderProducts(products, (e) => {
                addToCart(e,products);
            });
            
        })
        .catch((error)=>{
            console.log(`Error: ${error}`);
        })
        
    }

    updateCartIcon(cart);
    
});

fetchProducts();


