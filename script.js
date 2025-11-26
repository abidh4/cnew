let content = document.querySelector(".content");
let side = document.querySelector(".side-bar");
let ham = document.querySelector(".ham");
let lbtn = document.querySelector(".left-btn");
let rbtn = document.querySelector(".right-btn");
let dot1 = document.querySelector(".dot-1");
let dot2 = document.querySelector(".dot-2");
let dot3 = document.querySelector(".dot-3");
let sbar = document.querySelector(".sbar");
let sugbox = document.querySelector(".sugbox");

let sideOpen = false;
const imageLinks = ["land-1.jpg", "land-2.png", "land-3.png"];
const sugArr = [
  "T-shirts",
  "Shirts",
  "Jeans",
  "Pants",
  "Shorts",
  "Dresses",
  "Skirts",
  "Jackets",
  "Sweatshirts",
  "Hoodies",
  "Shoes",
  "Sneakers",
  "Sandals",
  "Flip-flops",
  "Bags",
  "Backpacks",
  "Watches",
  "Sunglasses",
  "Ethnic Wear",
  "Activewear",
];

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
  showImage(i);
});
rbtn.addEventListener("click", () => {
  i++;
  if (i > 2) {
    i = 0;
  }
  showImage(i);
});

setInterval(() => {
  i++;
  if (i > 2) {
    i = 0;
  }
  showImage(i);
}, 3000);

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
window.addEventListener("load", () => {
  const textElement = document.getElementById("type-text");
  const fullText = textElement.textContent.toUpperCase().trim();
  textElement.textContent = "";
  let index = 0;
  function typeLetter() {
    console.log("typeLetter function running");
    if (index < fullText.length) {
      textElement.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeLetter, 80);
    }
  }
  typeLetter();
});

sbar.addEventListener("focus", (e) => {
  console.log("Sbar Focused!");
});
sbar.addEventListener("blur", (e) => {
  sugbox.textContent = "";
  sugbox.classList.remove("active");
});
sbar.addEventListener("input", () => {
  let inv = sbar.value.trim();
  sugbox.textContent = "";
  if (!sugbox.textContent) {
    sugbox.classList.remove("active");
  }
  sugArr.forEach((elem, i) => {
    if (elem.toLowerCase().startsWith(inv) && inv !== "") {
      const row = document.createElement("div");
      const div = document.createElement("div");
      const del = document.createElement("span");
      del.className = "delbtn";
      div.className = "divelem";
      row.className = "sugelem";
      div.textContent = elem;
      del.textContent = "X";
      row.appendChild(div);
      row.appendChild(del);
      sugbox.appendChild(row);
      sugbox.classList.add("active");
    }
  });

  let focus = -1;
  const rowArr = document.querySelectorAll(".sugelem");

  function highLightElem(focus) {
    rowArr.forEach((e, i) => {
      if (i === focus) {
        e.children[0].style.background = "yellow";
        sbar.value = "";
        sbar.value = e.children[0].textContent;
        e.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        e.children[0].style.background = "white";
      }
    });
  }

  sbar.addEventListener("keydown", (e) => {
    if (e.key == "ArrowDown") {
      focus++;
      if (focus >= rowArr.length) {
        focus = 0;
      }

      if (!rowArr.length) {
        return;
      } else {
        highLightElem(focus);
      }
    } else if (e.key == "ArrowUp") {
      focus--;
      if (focus < 0) {
        focus = rowArr.length - 1;
      }
      if (!rowArr.length) {
        return;
      } else {
        highLightElem(focus);
      }
    }
  });
});
