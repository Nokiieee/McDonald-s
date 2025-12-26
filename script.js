// const item = document.querySelector('.food-container');

// item.addEventListener('click', () => {
//     console.log(item.dataset.food);
// })

// Select all food items
// const foodItems = document.querySelectorAll(".food-container");

// foodItems.forEach(item => {
//     item.addEventListener("click", () => {
//         const foodName = item.dataset.food;
//         handleFoodClick(foodName, item);
//     });
// });

// // Function that runs when food is clicked
// function handleFoodClick(foodName, element) {
//     console.log(foodName);

//     // Example actions
//     element.classList.toggle("active");
// }

const foodItems = document.querySelectorAll(".food-container");

foodItems.forEach(item => {
    item.addEventListener("click", () => {

        // 1️⃣ Remove red outline from ALL items
        foodItems.forEach(food => {
            food.classList.remove("selected");
        });

        // 2️⃣ Add red outline to the clicked item
        item.classList.add("selected");

        // Optional: read data attribute
        console.log(item.dataset.food);
    });
});


