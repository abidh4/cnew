let ham = document.querySelector(".ham");
let side = document.querySelector(".side-bar");
let sideOpen = false;
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
