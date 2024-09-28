// const menuOpenButton = document.querySelector("#menu-open-button");

// const menuCloseButton = document.querySelector("#menu-close-button");

// menuOpenButton.addEventListener("click", ()=>{
// document.body.classList.toggle("show-mobile-menu")
// })

// menuCloseButton.addEventListener("click", ()=>
//     menuOpenButton.click() );

const menuCloseButton = document.querySelector("#menu-close-button");
const menuOpenButton = document.querySelector("#menu-open-button");
const navMenu = document.querySelector(".nav-menu");
menuOpenButton.addEventListener("click", ()=>{
    console.log("CLick")
    navMenu.classList.toggle("show-mobile-menu")
    })
    menuCloseButton.addEventListener("click", ()=>
            menuOpenButton.click() );


//     const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.querySelector("#menu-close-button");
// const navMenu = document.querySelector(".nav-menu");

// menuOpenButton.addEventListener("click", () => {
//     console.log("Click");
//     navMenu.classList.toggle("show-mobile-menu"); // Toggle the menu visibility
// });

// menuCloseButton.addEventListener("click", () => {
//     navMenu.classList.remove("show-mobile-menu"); // Close the menu when close button is clicked
// });
