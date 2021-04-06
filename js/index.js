// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");
Array.from(navLinks).forEach((link) => {
  link.addEventListener("mouseover", (event) => {
    event.target.style.color = "teal";
  });
  navLinks.forEach((link) => {
    link.addEventListener("mouseleave", (event) => {
      event.target.style.color = "orange";
    });
  });
});

const text = document.getElementsByClassName("content-section");
Array.from(text).forEach((paragraph) => {
  paragraph.addEventListener("pointerenter", (event) => {
    event.target.style.border = "dotted gray thin";
  });
  Array.from(text).forEach((paragraph) => {
    paragraph.addEventListener("pointerleave", (event) => {
      event.target.style.border = "dotted white thin";
    });
    Array.from(text).forEach((paragraph) => {
      paragraph.addEventListener("keypress", (event) => {
        event.target.style.backgroundColor = "gray";
      });
    });
  });
});

const footer = document.getElementsByClassName("footer");
Array.from(footer).forEach((bg) => {
  bg.addEventListener("click", (event) => {
    event.target.style.color = "teal";
    event.target.style.backgroundColor = "lightgray";
  });
});
