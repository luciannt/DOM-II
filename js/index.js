//--SELECTORS--

//Navigation Bar Selector
const navBar = document.querySelector(".main-navigation");
//console.log(navBar);

//Navigation Button Selector
const navBtn = navBar.querySelectorAll("a");
console.log(navBtn);

//Welcome Header Selector
const topHeader = document.querySelector(".intro h2");
//console.log(topHeader);

//Let's Go Header Selector
const letsGoHeader = document.querySelector(".content-section h2");
//console.log(letsGoHeader);

//Adventure Header Selector
const adventureHeader = document.querySelector(".inverse-content h2");
//console.log(adventureHeader);

//Destination Header Selector
const destinationHeader = document.querySelector(".content-destination h2");
//console.log(destinationHeader);

//Bus Image Selector
const busImg = document.querySelector(".intro img");
//console.log(busImg);

//Map Image Selector
const mapImg = document.querySelector(".img-content img");
//console.log(mapImg);

//Adventure Image Selector
const adventureImg = document.querySelector(".inverse-content img");
//console.log(adventureImg);

//Destination Image Selector
const destinationImg = document.querySelector(".content-destination img");
//console.log(destinationImg);

const footer = document.querySelector(".footer");
//console.log(footer);

//--STYLING--

navBar.addEventListener("mouseover", (event) => {
  navBar.style.backgroundColor = "beige";
});
