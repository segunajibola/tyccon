// =================================================== Slider
const nextArrow = document.querySelector(".nextArrow");
const PrevArrow = document.querySelector(".PrevArrow");
const hero = document.querySelector(".hero");

nextArrow.addEventListener("click", changeBg);
PrevArrow.addEventListener("click", changeBg);

function changeBg() {
  hero.classList.toggle("hero-banner");
}

// ================================================== Modal
const modal = document.querySelector(".popModal");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});
close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ================================= Menu

const menu = document.querySelector(".mobile_menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("mobile__menu-toggel");
});
