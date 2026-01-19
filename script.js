// const foodItems = document.querySelectorAll(".food-container");

// foodItems.forEach(item => {
//     item.addEventListener("click", (e) => {

//         // 1️⃣ Remove red outline from ALL items
//         foodItems.forEach(food => {
//             food.classList.remove("selected");

//             const info = food.querySelector(".food-information");
//             if (info) {
//                 info.classList.remove("show-info");
//             }
//         });

//         // 2️⃣ Add red outline to the clicked item
//         item.classList.add("selected");

//         const info = item.querySelector(".food-information");

//         info.addEventListener('click', (e) => {
//             e.stopPropagation();
//         })

//         if (info) { 
//             info.classList.add("show-info");
//         }

//         const cancelOutside = item.querySelector(".cancel-info");
//         cancelOutside.classList.add("show-cancel-info");

//         cancelOutside.addEventListener('click', (e) => {
//             e.stopPropagation();
//             info.classList.remove("show-info");
//             item.classList.remove("selected");
//             cancelOutside.classList.remove("show-cancel-info");
//         })


//         const cancel = item.querySelector(".close-info");

//         cancel.addEventListener('click', () => {
//             info.classList.remove("show-info");
//             item.classList.remove("selected");
//             cancelOutside.classList.remove("show-cancel-info");
//         });

        

//         // Optional: read data attribute
//         // console.log(item.dataset.food);
//     });
// });

// // Food Prices
// const hotcakes = 452;
// const bacon = 512;

// let price;
// let total = 0;

// const cartButton = document.querySelectorAll(".cart-button");

// cartButton.forEach(crtBtn => {
//     crtBtn.addEventListener('click', () => {
//         if(crtBtn.dataset.cart === "Hotcakes") {
//             price = hotcakes;
//             total += price;
//         } else if (crtBtn.dataset.cart === "Bacon") {
//             price = bacon;
//             total += price;
//         }

//         console.log(`price: ${price}`);
//         console.log(`total: ${total}`);
//     });
// });

// ============================================
// MENU PAGE (script.js)
// ============================================

const foodItems = document.querySelectorAll(".food-container");
const priceResult = document.querySelector(".price-result");
let foodPrice = 0;

function calculateTotalPrice() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

const totalPrice = calculateTotalPrice();

foodItems.forEach(item => {
    item.addEventListener("click", (e) => {
        // Remove red outline from ALL items
        foodItems.forEach(food => {
            food.classList.remove("selected");
            const info = food.querySelector(".food-information");
            if (info) {
                info.classList.remove("show-info");
            }
        });

        // Add red outline to the clicked item
        item.classList.add("selected");

        const info = item.querySelector(".food-information");

        info.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        if (info) { 
            info.classList.add("show-info");
        }

        const cancelOutside = item.querySelector(".cancel-info");
        cancelOutside.classList.add("show-cancel-info");

        cancelOutside.addEventListener('click', (e) => {
            e.stopPropagation();
            info.classList.remove("show-info");
            item.classList.remove("selected");
            cancelOutside.classList.remove("show-cancel-info");
        })

        const cancel = item.querySelector(".close-info");

        cancel.addEventListener('click', () => {
            info.classList.remove("show-info");
            item.classList.remove("selected");
            cancelOutside.classList.remove("show-cancel-info");
        });
    });
});

// Food Items Database
const foodDatabase = {
    "Hotcakes": { price: 188, image: "images/breakfast/Hotcakes.png" },
    "Bacon": { price: 233, image: "images/breakfast/baconBuscuit.png", name: "Bacon, Egg & Cheese Biscuit" },
    "EggMcMuffin": { price: 195, image: "images/breakfast/EggMcMuffin.png", name: "Egg McMuffin" },
    "SausageMcGriddles": { price: 210, image: "images/breakfast/SausageMcGriddle.png", name: "Sausage McGriddles" },
    "SausageMcMuffin": { price: 250, image: "images/breakfast/SausageMcMuffin.png", name: "Sausage McMuffin with Egg" },
    "SausageEgg": { price: 200, image: "images/breakfast/BaconEggNCheeseBagel.png", name: "Sausage, Egg & Cheese Bagel" },
    "DailyDouble": { price: 315, image: "images/burgers/dailyDouble.jpg", name: "Daily Double" },
    "McDouble": { price: 300, image: "images/burgers/mcDouble.jpg", name: "McDouble" },
    "QuarterPounderCheese": { price: 320, image: "images/burgers/quarterPounderCheese.jpg", name: "Quarter Pounder with Cheese" },
    "BaconQuarterPounder": { price: 333, image: "images/burgers/baconQuarterPounder.jpg", name: "Bacon Quarter Pounder with Cheese" },
    "BigMac": { price: 350, image: "images/burgers/bigMac.jpg", name: "Big Mac" },
    "DoubleQuarterPounder": { price: 350, image: "images/burgers/doubleQuarterPounder.jpg", name: "Double Quarter Pounder with Cheese" },

    "HamburgerHappyMeal": { price: 480, image: "images/happyMeal/hamburgerHappyMeal.jpg", name: "Hamburger Happpy Meal" },
    "4PieceMcNuggets": { price: 430, image: "images/happyMeal/4McNuggetsHappyMeal.jpg", name: "4 Piece McNuggets Happy Meal" },
    "6PieceMcNuggets": { price: 450, image: "images/happyMeal/6mcNuggetsHappyMeal.jpg", name: "6 Piece McNuggets Happy Meal" }
};

// Get cart from storage or initialize empty cart
function getCart() {
    const cart = JSON.parse(localStorage.getItem('mcdoCart') || '[]');
    return cart;
}

// Save cart to storage
function saveCart(cart) {
    localStorage.setItem('mcdoCart', JSON.stringify(cart));
}

// Add to Cart Logic
const cartButton = document.querySelectorAll(".add-to-cart");

cartButton.forEach(crtBtn => {
    crtBtn.addEventListener('click', () => {
        const itemKey = crtBtn.dataset.cart;
        const itemData = foodDatabase[itemKey];
        
        if (itemData) {
            const cart = getCart();
            
            // Check if item already exists in cart
            const existingItem = cart.find(item => item.key === itemKey);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    key: itemKey,
                    name: itemData.name || itemKey,
                    price: itemData.price,
                    image: itemData.image,
                    quantity: 1
                });
            }
            
            saveCart(cart);
            console.log('Item added to cart:', itemKey);
            console.log('Current cart:', cart);

            console.log(itemData.price)
            foodPrice += itemData.price;
            console.log(foodPrice);

            if(priceResult) {
                 priceResult.innerHTML = `Total Price: ${totalPrice}`;
            }
           
        }
    });
});

const checkoutContainer = document.querySelector('.checkout-container');

// ============================================
// CART PAGE (cart.js) - Create separate file
// ============================================

// This code should run on cart.html page only
if (window.location.pathname.includes('cart.html')) {
    
    function getCart() {
        const cart = JSON.parse(localStorage.getItem('mcdoCart') || '[]');
        return cart;
    }
    
    function saveCart(cart) {
        localStorage.setItem('mcdoCart', JSON.stringify(cart));
    }
    
    function createCartItem(item) {
        // Create main container
        const container = document.createElement('div');
        container.className = 'c-item-main-container';
        container.dataset.itemKey = item.key;
        
        // Create image and name section
        const imgNameDiv = document.createElement('div');
        imgNameDiv.className = 'c-img-name';
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'c-img-container';
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.height = 50;
        
        imgContainer.appendChild(img);
        
        const nameQuantityDiv = document.createElement('div');
        nameQuantityDiv.className = 'c-name-quantity';
        
        const nameH3 = document.createElement('h3');
        nameH3.textContent = item.name;
        
        const quantityP = document.createElement('p');
        quantityP.textContent = `Quantity: ${item.quantity}`;
        
        nameQuantityDiv.appendChild(nameH3);
        nameQuantityDiv.appendChild(quantityP);
        
        imgNameDiv.appendChild(imgContainer);
        imgNameDiv.appendChild(nameQuantityDiv);
        
        // Create price and cancel section
        const priceCancelDiv = document.createElement('div');
        priceCancelDiv.className = 'c-price-cancel';
        
        const priceDiv = document.createElement('div');
        priceDiv.className = 'c-price';
        
        const priceP = document.createElement('p');
        priceP.textContent = `₱${item.price}`;
        
        priceDiv.appendChild(priceP);
        
        const closeInfoDiv = document.createElement('div');
        closeInfoDiv.className = 'c-close-info';
        
        const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSvg.setAttribute('class', 'c-close');
        closeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        closeSvg.setAttribute('height', '32px');
        closeSvg.setAttribute('viewBox', '0 -960 960 960');
        closeSvg.setAttribute('width', '32px');
        closeSvg.setAttribute('fill', '#5f6368');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z');
        
        closeSvg.appendChild(path);
        closeInfoDiv.appendChild(closeSvg);
        
        // Add click event to remove item
        closeInfoDiv.addEventListener('click', () => {
            removeCartItem(item.key);
            container.remove();
            
            if (priceResult) {
                const totalPrice = calculateTotalPrice();
                priceResult.innerHTML = `Total Price: ₱ ${totalPrice}`;
            }

            renderCart();
        });
        
        priceCancelDiv.appendChild(priceDiv);
        priceCancelDiv.appendChild(closeInfoDiv);
        
        // Append all sections to main container
        container.appendChild(imgNameDiv);
        container.appendChild(priceCancelDiv);
        
        return container;
    }
    
    function removeCartItem(itemKey) {
        let cart = getCart();
        cart = cart.filter(item => item.key !== itemKey);
        saveCart(cart);
        console.log('Item removed from cart:', itemKey);
    }
    
    function renderCart() {
        const cart = getCart();
        const cartBody = document.querySelector('.c-main-body');
        
        // Clear existing items (remove the static examples)
        cartBody.innerHTML = '';
        
        if (cart.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.classList = "empty-cart";
            emptyMessage.textContent = 'Your cart is empty';
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.marginTop = '50px';
            emptyMessage.style.fontSize = '18px';
            emptyMessage.style.color = '#666';
            cartBody.appendChild(emptyMessage);
            checkoutContainer.classList.add("checkout-none");
            return;

            
        } else {
            checkoutContainer.classList.remove("checkout-none");
        }
        
        // Create cart items
        cart.forEach(item => {
            const cartItem = createCartItem(item);
            cartBody.appendChild(cartItem);
        });
    }
    
    // Initialize cart page
    renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
    if (priceResult) {
        const totalPrice = calculateTotalPrice();
        priceResult.innerHTML = `Total Price: ₱ ${totalPrice}`;
    }
});

// Checkout Container

const cancelOrder = document.querySelector('.cancel-order');
const confirmCancelOrder = document.querySelector('.confirm-cancel-orders');

cancelOrder.addEventListener('click', () => {
    confirmCancelOrder.classList.remove('confirm-none');
});

const confirmNo = document.querySelector('.confirm-no-container');

confirmNo.addEventListener('click', () => {
    confirmCancelOrder.classList.add('confirm-none');
});

// Confirm Yes

const confirmYes = document.querySelector('.confirm-yes-container');

confirmYes.addEventListener('click', () => {
    // 1. Clear cart from localStorage
    localStorage.removeItem('mcdoCart');

    // 2. Re-render cart UI (cart.html)
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }

    // 3. Reset total price display
    if (priceResult) {
        priceResult.innerHTML = 'Total Price: ₱ 0';
    }

    // 4. Hide confirmation modal
    confirmCancelOrder.classList.add('confirm-none');

    console.log('All cart items removed');
});



