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

// const foodItems = document.querySelectorAll(".food-container");
// const priceResult = document.querySelector(".price-result");
// let foodPrice = 0;

// function calculateTotalPrice() {
//     const cart = getCart();
//     return cart.reduce((total, item) => {
//         return total + (item.price * item.quantity);
//     }, 0);
// }

// const totalPrice = calculateTotalPrice();

// foodItems.forEach(item => {
//     item.addEventListener("click", (e) => {
//         // Remove red outline from ALL items
//         foodItems.forEach(food => {
//             food.classList.remove("selected");
//             const info = food.querySelector(".food-information");
//             if (info) {
//                 info.classList.remove("show-info");
//             }
//         });

//         // Add red outline to the clicked item
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
//     });
// });

// // Food Items Database
// const foodDatabase = {
//     "Hotcakes": { price: 86, image: "images/breakfast/Hotcakes.png" },
//     "Bacon": { price: 130, image: "images/breakfast/baconBuscuit.png", name: "Bacon, Egg & Cheese Biscuit" },
//     "EggMcMuffin": { price: 150, image: "images/breakfast/EggMcMuffin.png", name: "Egg McMuffin" },
//     "SausageMcGriddles": { price: 350, image: "images/breakfast/SausageMcGriddle.png", name: "Sausage McGriddles" },
//     "SausageMcMuffin": { price: 120, image: "images/breakfast/SausageMcMuffin.png", name: "Sausage McMuffin with Egg" },
//     "SausageEgg": { price: 600, image: "images/breakfast/BaconEggNCheeseBagel.png", name: "Sausage, Egg & Cheese Bagel" },

//     "DailyDouble": { price: 280, image: "images/burgers/dailyDouble.jpg", name: "Daily Double" },
//     "McDouble": { price: 175, image: "images/burgers/mcDouble.jpg", name: "McDouble" },
//     "QuarterPounderCheese": { price: 220, image: "images/burgers/quarterPounderCheese.jpg", name: "Quarter Pounder with Cheese" },
//     "BaconQuarterPounder": { price: 250, image: "images/burgers/baconQuarterPounder.jpg", name: "Bacon Quarter Pounder with Cheese" },
//     "BigMac": { price: 280, image: "images/burgers/bigMac.jpg", name: "Big Mac" },
//     "DoubleQuarterPounder": { price: 330, image: "images/burgers/doubleQuarterPounder.jpg", name: "Double Quarter Pounder with Cheese" },

//     "Fries": { price: 80, image: "images/fries/fries.jpg", name: "Fries" },
//     "AppleSlices": { price: 50, image: "images/fries/apple.jpg", name: "Apple Slices" },

//     "RanchSnackWrap": { price: 95, image: "images/snack/ranchSnackWrap.jpg", name: "Ranch snack Wrap" },
//     "SpicySnackWrap": { price: 99, image: "images/snack/spicySnackWrap.jpg", name: "Spicy Snack Wrap" },

//     "Coca-Cola": { price: 55, image: "images/beverages/coke.jpg", name: "Coca-Cola" },
//     "DrPepper": { price: 55, image: "images/beverages/drPepper.jpg", name: "Dr Pepper" },
//     "Fanta": { price: 55, image: "images/beverages/fanta.jpg", name: "Fanta" },
//     "Lemonade": { price: 65, image: "images/beverages/lemonade.jpg", name: "Lemonade" },
//     "Sprite": { price: 55, image: "images/beverages/sprite.jpg", name: "Sprite" },
//     "FrozenCoca-Cola": { price: 45, image: "images/beverages/frozenCoke.jpg", name: "Frozen Coca-Cola" },
//     "FrozenFantaBlue": { price: 45, image: "images/beverages/frozenFanta.jpg", name: "Frozen Fanta Blue Raspberry" },

//     "McFlurry": { price: 65, image: "images/sweets/mcFlurry.jpg", name: "McFlurry with OREO" },
//     "HotFudge": { price: 58, image: "images/sweets/hotFudge.jpg", name: "Hot Fudge Sundae" },
//     "VanillaCone": { price: 22, image: "images/sweets/vanillaCone.jpg", name: "Vanilla Cone" },
//     "ChocolataShake": { price: 75, image: "images/sweets/chocolataShake.jpg", name: "Chocolate Shake" },
//     "StawberryShake": { price: 75, image: "images/sweets/strawberryShake.jpg", name: "Strawberry Shake" },
//     "VanillaShake": { price: 75, image: "images/sweets/vanillaShake.jpg", name: "Vanilla Shake" },

//     "HamburgerHappyMeal": { price: 115, image: "images/happyMeal/hamburgerHappyMeal.jpg", name: "Hamburger Happpy Meal" },
//     "4PieceMcNuggets": { price: 125, image: "images/happyMeal/4McNuggetsHappyMeal.jpg", name: "4 Piece McNuggets Happy Meal" },
//     "6PieceMcNuggets": { price: 150, image: "images/happyMeal/6mcNuggetsHappyMeal.jpg", name: "6 Piece McNuggets Happy Meal" },

//     "Ranch": { price: 10, image: "images/condiments/ranch.jpg", name: "Ranch" },
//     "Mustard": { price: 10, image: "images/condiments/mustard.jpg", name: "Mustard" },
//     "Mayonaise": { price: 10, image: "images/condiments/mayonaise.jpg", name: "Mayonaise" },
//     "Ketchup": { price: 10, image: "images/condiments/ketchup.jpg", name: "Ketchup" },
//     "HoneyMustard": { price: 10, image: "images/condiments/honeyMustard.jpg", name: "Honey Mustard" },
//     "CreamyChilli": { price: 10, image: "images/condiments/creamyChilli.jpg", name: "Creamy Chilli" },
//     "SpicyBuffalo": { price: 10, image: "images/condiments/spicyBuffalo.jpg", name: "Spicy Buffalo" },
//     "SweetNSour": { price: 10, image: "images/condiments/sweetNSour.jpg", name: "Sweet and Sour" },
//     "TangyBBQ": { price: 10, image: "images/condiments/tangyBBQ.jpg", name: "Tangy BBQ" },
//     "Honey": { price: 10, image: "images/condiments/honey.jpg", name: "Honey" }
// };

// // Get cart from storage or initialize empty cart
// function getCart() {
//     const cart = JSON.parse(localStorage.getItem('mcdoCart') || '[]');
//     return cart;
// }

// // Save cart to storage
// function saveCart(cart) {
//     localStorage.setItem('mcdoCart', JSON.stringify(cart));
// }

// // Add to Cart Logic
// const cartButton = document.querySelectorAll(".add-to-cart");

// cartButton.forEach(crtBtn => {
//     crtBtn.addEventListener('click', () => {
//         const itemKey = crtBtn.dataset.cart;
//         const itemData = foodDatabase[itemKey];
        
//         if (itemData) {
//             const cart = getCart();
            
//             // Check if item already exists in cart
//             const existingItem = cart.find(item => item.key === itemKey);
            
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 cart.push({
//                     key: itemKey,
//                     name: itemData.name || itemKey,
//                     price: itemData.price,
//                     image: itemData.image,
//                     quantity: 1
//                 });
//             }
            
//             saveCart(cart);
//             console.log('Item added to cart:', itemKey);
//             console.log('Current cart:', cart);

//             console.log(itemData.price)
//             foodPrice += itemData.price;
//             console.log(foodPrice);

//             if(priceResult) {
//                  priceResult.innerHTML = `Total Price: ${totalPrice}`;
//             }
           
//         }
//     });
// });

// const checkoutContainer = document.querySelector('.checkout-container');

// // ============================================
// // CART PAGE (cart.js) - Create separate file
// // ============================================

// // This code should run on cart.html page only
// if (window.location.pathname.includes('cart.html')) {
    
//     function getCart() {
//         const cart = JSON.parse(localStorage.getItem('mcdoCart') || '[]');
//         return cart;
//     }
    
//     function saveCart(cart) {
//         localStorage.setItem('mcdoCart', JSON.stringify(cart));
//     }
    
//     function createCartItem(item) {
//         // Create main container
//         const container = document.createElement('div');
//         container.className = 'c-item-main-container';
//         container.dataset.itemKey = item.key;
        
//         // Create image and name section
//         const imgNameDiv = document.createElement('div');
//         imgNameDiv.className = 'c-img-name';
        
//         const imgContainer = document.createElement('div');
//         imgContainer.className = 'c-img-container';
        
//         const img = document.createElement('img');
//         img.src = item.image;
//         img.alt = item.name;
//         img.height = 50;
        
//         imgContainer.appendChild(img);
        
//         const nameQuantityDiv = document.createElement('div');
//         nameQuantityDiv.className = 'c-name-quantity';
        
//         const nameH3 = document.createElement('h3');
//         nameH3.textContent = item.name;
        
//         const quantityP = document.createElement('p');
//         quantityP.textContent = `Quantity: ${item.quantity}`;
        
//         nameQuantityDiv.appendChild(nameH3);
//         nameQuantityDiv.appendChild(quantityP);
        
//         imgNameDiv.appendChild(imgContainer);
//         imgNameDiv.appendChild(nameQuantityDiv);
        
//         // Create price and cancel section
//         const priceCancelDiv = document.createElement('div');
//         priceCancelDiv.className = 'c-price-cancel';
        
//         const priceDiv = document.createElement('div');
//         priceDiv.className = 'c-price';
        
//         const priceP = document.createElement('p');
//         priceP.textContent = `₱${item.price}`;
        
//         priceDiv.appendChild(priceP);
        
//         const closeInfoDiv = document.createElement('div');
//         closeInfoDiv.className = 'c-close-info';
        
//         const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//         closeSvg.setAttribute('class', 'c-close');
//         closeSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//         closeSvg.setAttribute('height', '32px');
//         closeSvg.setAttribute('viewBox', '0 -960 960 960');
//         closeSvg.setAttribute('width', '32px');
//         closeSvg.setAttribute('fill', '#5f6368');
        
//         const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         path.setAttribute('d', 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z');
        
//         closeSvg.appendChild(path);
//         closeInfoDiv.appendChild(closeSvg);
        
//         // Add click event to remove item
//         closeInfoDiv.addEventListener('click', () => {
//             removeCartItem(item.key);
//             container.remove();
            
//             if (priceResult) {
//                 const totalPrice = calculateTotalPrice();
//                 priceResult.innerHTML = `Total Price: ₱ ${totalPrice}`;
//             }

//             renderCart();
//         });
        
//         priceCancelDiv.appendChild(priceDiv);
//         priceCancelDiv.appendChild(closeInfoDiv);
        
//         // Append all sections to main container
//         container.appendChild(imgNameDiv);
//         container.appendChild(priceCancelDiv);
        
//         return container;
//     }
    
//     function removeCartItem(itemKey) {
//         let cart = getCart();
//         cart = cart.filter(item => item.key !== itemKey);
//         saveCart(cart);
//         console.log('Item removed from cart:', itemKey);
//     }
    
//     function renderCart() {
//         const cart = getCart();
//         const cartBody = document.querySelector('.c-main-body');
        
//         // Clear existing items (remove the static examples)
//         cartBody.innerHTML = '';
        
//         if (cart.length === 0) {
//             const emptyMessage = document.createElement('p');
//             emptyMessage.classList = "empty-cart";
//             emptyMessage.textContent = 'Your cart is empty';
//             emptyMessage.style.textAlign = 'center';
//             emptyMessage.style.marginTop = '50px';
//             emptyMessage.style.fontSize = '18px';
//             emptyMessage.style.color = '#666';
//             cartBody.appendChild(emptyMessage);
//             checkoutContainer.classList.add("checkout-none");
//             return;

            
//         } else {
//             checkoutContainer.classList.remove("checkout-none");
//         }
        
//         // Create cart items
//         cart.forEach(item => {
//             const cartItem = createCartItem(item);
//             cartBody.appendChild(cartItem);
//         });
//     }
    
//     // Initialize cart page
//     renderCart();
// }

// document.addEventListener('DOMContentLoaded', () => {
//     if (priceResult) {
//         const totalPrice = calculateTotalPrice();
//         priceResult.innerHTML = `Total Price: ₱${totalPrice}`;
//     }
// });

// // Checkout Container

// const cancelOrder = document.querySelector('.cancel-order');
// const confirmCancelOrder = document.querySelector('.confirm-cancel-orders');

// cancelOrder.addEventListener('click', () => {
//     confirmCancelOrder.classList.remove('confirm-none');
// });

// const confirmNo = document.querySelector('.confirm-no-container');

// confirmNo.addEventListener('click', () => {
//     confirmCancelOrder.classList.add('confirm-none');
// });

// // Confirm Yes

// const confirmYes = document.querySelector('.confirm-yes-container');

// confirmYes.addEventListener('click', () => {
//     // 1. Clear cart from localStorage
//     localStorage.removeItem('mcdoCart');

//     // 2. Re-render cart UI (cart.html)
//     if (window.location.pathname.includes('cart.html')) {
//         renderCart();
//     }

//     // 3. Reset total price display
//     if (priceResult) {
//         priceResult.innerHTML = 'Total Price: ₱ 0';
//     }

//     // 4. Hide confirmation modal
//     confirmCancelOrder.classList.add('confirm-none');

//     console.log('All cart items removed');
// });


// CLAUDE CODE

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

        const cartButton = document.querySelectorAll(".add-to-cart");

        cartButton.forEach(cart => {
            cart.addEventListener('click', () => {
                setTimeout(() => {
                    info.classList.remove("show-info");
                    item.classList.remove("selected");
                    cancelOutside.classList.remove("show-cancel-info");
                }, 400); 
            });
        });
    });
});

// Food Items Database
const foodDatabase = {
    "Hotcakes": { price: 86, image: "images/breakfast/Hotcakes.png" },
    "Bacon": { price: 130, image: "images/breakfast/baconBuscuit.png", name: "Bacon, Egg & Cheese Biscuit" },
    "EggMcMuffin": { price: 150, image: "images/breakfast/EggMcMuffin.png", name: "Egg McMuffin" },
    "SausageMcGriddles": { price: 350, image: "images/breakfast/SausageMcGriddle.png", name: "Sausage McGriddles" },
    "SausageMcMuffin": { price: 120, image: "images/breakfast/SausageMcMuffin.png", name: "Sausage McMuffin with Egg" },
    "SausageEgg": { price: 600, image: "images/breakfast/BaconEggNCheeseBagel.png", name: "Sausage, Egg & Cheese Bagel" },

    "DailyDouble": { price: 280, image: "images/burgers/dailyDouble.jpg", name: "Daily Double" },
    "McDouble": { price: 175, image: "images/burgers/mcDouble.jpg", name: "McDouble" },
    "QuarterPounderCheese": { price: 220, image: "images/burgers/quarterPounderCheese.jpg", name: "Quarter Pounder with Cheese" },
    "BaconQuarterPounder": { price: 250, image: "images/burgers/baconQuarterPounder.jpg", name: "Bacon Quarter Pounder with Cheese" },
    "BigMac": { price: 280, image: "images/burgers/bigMac.jpg", name: "Big Mac" },
    "DoubleQuarterPounder": { price: 330, image: "images/burgers/doubleQuarterPounder.jpg", name: "Double Quarter Pounder with Cheese" },

    "Fries": { price: 80, image: "images/fries/fries.jpg", name: "Fries" },
    "AppleSlices": { price: 50, image: "images/fries/apple.jpg", name: "Apple Slices" },

    "RanchSnackWrap": { price: 95, image: "images/snack/ranchSnackWrap.jpg", name: "Ranch snack Wrap" },
    "SpicySnackWrap": { price: 99, image: "images/snack/spicySnackWrap.jpg", name: "Spicy Snack Wrap" },

    "Coca-Cola": { price: 55, image: "images/beverages/coke.jpg", name: "Coca-Cola" },
    "DrPepper": { price: 55, image: "images/beverages/drPepper.jpg", name: "Dr Pepper" },
    "Fanta": { price: 55, image: "images/beverages/fanta.jpg", name: "Fanta" },
    "Lemonade": { price: 65, image: "images/beverages/lemonade.jpg", name: "Lemonade" },
    "Sprite": { price: 55, image: "images/beverages/sprite.jpg", name: "Sprite" },
    "FrozenCoca-Cola": { price: 45, image: "images/beverages/frozenCoke.jpg", name: "Frozen Coca-Cola" },
    "FrozenFantaBlue": { price: 45, image: "images/beverages/frozenFanta.jpg", name: "Frozen Fanta Blue Raspberry" },

    "McFlurry": { price: 65, image: "images/sweets/mcFlurry.jpg", name: "McFlurry with OREO" },
    "HotFudge": { price: 58, image: "images/sweets/hotFudge.jpg", name: "Hot Fudge Sundae" },
    "VanillaCone": { price: 22, image: "images/sweets/vanillaCone.jpg", name: "Vanilla Cone" },
    "ChocolataShake": { price: 75, image: "images/sweets/chocolataShake.jpg", name: "Chocolate Shake" },
    "StawberryShake": { price: 75, image: "images/sweets/strawberryShake.jpg", name: "Strawberry Shake" },
    "VanillaShake": { price: 75, image: "images/sweets/vanillaShake.jpg", name: "Vanilla Shake" },

    "HamburgerHappyMeal": { price: 115, image: "images/happyMeal/hamburgerHappyMeal.jpg", name: "Hamburger Happpy Meal" },
    "4PieceMcNuggets": { price: 125, image: "images/happyMeal/4McNuggetsHappyMeal.jpg", name: "4 Piece McNuggets Happy Meal" },
    "6PieceMcNuggets": { price: 150, image: "images/happyMeal/6mcNuggetsHappyMeal.jpg", name: "6 Piece McNuggets Happy Meal" },

    "Ranch": { price: 10, image: "images/condiments/ranch.jpg", name: "Ranch" },
    "Mustard": { price: 10, image: "images/condiments/mustard.jpg", name: "Mustard" },
    "Mayonaise": { price: 10, image: "images/condiments/mayonaise.jpg", name: "Mayonaise" },
    "Ketchup": { price: 10, image: "images/condiments/ketchup.jpg", name: "Ketchup" },
    "HoneyMustard": { price: 10, image: "images/condiments/honeyMustard.jpg", name: "Honey Mustard" },
    "CreamyChilli": { price: 10, image: "images/condiments/creamyChilli.jpg", name: "Creamy Chilli" },
    "SpicyBuffalo": { price: 10, image: "images/condiments/spicyBuffalo.jpg", name: "Spicy Buffalo" },
    "SweetNSour": { price: 10, image: "images/condiments/sweetNSour.jpg", name: "Sweet and Sour" },
    "TangyBBQ": { price: 10, image: "images/condiments/tangyBBQ.jpg", name: "Tangy BBQ" },
    "Honey": { price: 10, image: "images/condiments/honey.jpg", name: "Honey" }
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

// Add to Cart Logic with Animation
const cartButton = document.querySelectorAll(".add-to-cart");

cartButton.forEach(crtBtn => {
    crtBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering parent clicks
        
        const itemKey = crtBtn.dataset.cart;
        const itemData = foodDatabase[itemKey];
        
        if (itemData) {
            // Add animation class
            crtBtn.classList.add('cart-clicked');
            
            // Change button text temporarily
            const cartButtonText = crtBtn.querySelector('.cart-button');
            const originalText = cartButtonText.textContent;
            cartButtonText.textContent = 'ADDED!';
            
            // Remove animation after it completes
            setTimeout(() => {
                crtBtn.classList.remove('cart-clicked');
                cartButtonText.textContent = originalText;
            }, 600);
            
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
                const totalPrice = calculateTotalPrice();
                priceResult.innerHTML = `Total Price: ₱${totalPrice}`;
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
        priceResult.innerHTML = `Total Price: ₱${totalPrice}`;
    }
});

// Checkout Container
const cancelOrder = document.querySelector('.cancel-order');
const confirmCancelOrder = document.querySelector('.confirm-cancel-orders');

if (cancelOrder && confirmCancelOrder) {
    cancelOrder.addEventListener('click', () => {
        confirmCancelOrder.classList.remove('confirm-none');
    });
}

const confirmNo = document.querySelector('.confirm-no-container');

if (confirmNo && confirmCancelOrder) {
    confirmNo.addEventListener('click', () => {
        confirmCancelOrder.classList.add('confirm-none');
    });
}

// Confirm Yes
const confirmYes = document.querySelector('.confirm-yes-container');

if (confirmYes && confirmCancelOrder) {
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
}

