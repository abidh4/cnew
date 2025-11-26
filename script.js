let ham = document.querySelector(".ham");
let side = document.querySelector(".side-bar");
let lbtn = document.querySelector(".left-btn");
let rbtn = document.querySelector(".right-btn");
let content = document.querySelector(".content");
let dot1 = document.querySelector(".dot-1");
let dot2 = document.querySelector(".dot-2");
let dot3 = document.querySelector(".dot-3");

let sideOpen = false;

const imageLinks = ["land-1.jpg", "land-2.png", "land-3.png"];

document.body.addEventListener("click", () => {
  console.log("Body Clicked");
  if (sideOpen) {
    side.classList.toggle("show");
    sideOpen = !sideOpen;
  }
});
ham.addEventListener("click", (e) => {
  e.stopPropagation();
  sideOpen = !sideOpen;
  console.log(sideOpen);
  side.classList.toggle("show");
});
side.addEventListener("click", (e) => {
  e.stopPropagation();
});

let i = 0;

content.style.backgroundImage = `url(${imageLinks[0]})`;
dot1.style.background = "white";

lbtn.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = 2;
  }
  console.log(i);
  showImage(i);
});
rbtn.addEventListener("click", () => {
  i++;
  if (i > 2) {
    i = 0;
  }
  console.log(i);
  showImage(i);
});


function showImage(index) {
  content.style.backgroundImage = `url(${imageLinks[index]})`;
  if (index == 0) {
    dot1.style.background = "white";
    dot2.style.background = "none";
    dot3.style.background = "none";
  } else if (index === 1) {
    dot1.style.background = "none";
    dot2.style.background = "white";
    dot3.style.background = "none";
  } else {
    dot1.style.background = "none";
    dot2.style.background = "none";
    dot3.style.background = "white";
  }
}