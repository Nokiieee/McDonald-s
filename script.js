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
    item.addEventListener("click", (e) => {

        // 1️⃣ Remove red outline from ALL items
        foodItems.forEach(food => {
            food.classList.remove("selected");

            const info = food.querySelector(".food-information");
            if (info) {
                info.classList.remove("show-info");
            }
        });

        // 2️⃣ Add red outline to the clicked item
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

        

        // Optional: read data attribute
        console.log(item.dataset.food);
    });
});


