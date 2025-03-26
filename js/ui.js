import { onQuantityChange, removeFromCart } from "./cart.js";

const elements = {
    menuIcon: document.querySelector("#menu-icon"),
    menu: document.querySelector(".navbar"),
    productList: document.querySelector("#product-list"),
    cartContainer: document.querySelector(".cart-items"),
    cartTotal: document.querySelector("#cart-totally"),
} 


const renderProducts=(products,addToCartFunction)=>{
    
    const productHtml=products.map((product)=>
        
        `   <div class="product">
                <img src="${product.image}" alt="product-image" class="product-image">
                <div class="product-info">
                    <h2 class="${product.title}">Fusion Hoodie</h2>
                    <p class="${product.price}">$295</p>
                    <a class="add-to-cart" data-id='${product.id}'>Add to cart</a>
                </div>
            </div>`
    ).join("");

    elements.productList.innerHTML=productHtml;



    const addButtons = document.querySelectorAll(".add-to-cart");

    for (let i=0; i<addButtons.length; i++){
        const addButton = addButtons[i];

        addButton.addEventListener("click", addToCartFunction);
    }
};

//sepetteki urunleri renderlayan fonksiyon

const renderCartItems = (cart) => {
    elements.cartContainer.innerHTML=cart.map((item)=>`
                        <div class="cart-item">
                        <img src="${item.image}" alt="">

                        <div class="cart-item-info">
                            <h2 class="item-title">${item.title}</h2>
                            <input type="number" min="1" value="${item.quantity}"  class="item-quantity" data-id='${item.id}'>
                        </div>

                        <h2 class="item-price">$${item.price}</h2>
                        <button class="remove-from-cart" data-id='${item.id}'>Remove</button>
                    </div>
    `).join("");

    const removeBtns = document.querySelectorAll(".remove-from-cart");

    for (let i=0; i<removeBtns.length; i++){
        const removeBtn = removeBtns[i];
        
        removeBtn.addEventListener("click", removeFromCart);
    }


    const quantityInputs = document.querySelectorAll(".item-quantity");

    for (let k=0; k<quantityInputs.length; k++){
        const quantityInput=quantityInputs[k];

        quantityInput.addEventListener("change", onQuantityChange);
    }
};

export {elements,renderProducts,renderCartItems};