console.log("hij werkt");

const menuBtn = document.querySelector(`.navbar button`);
const menu = document.querySelector(`nav`);
const img = document.querySelector(`.naturel`);

menuBtn.addEventListener(`click`, showMenu);

function showMenu(e) {
  console.log(`ff testen`);
  menu.classList.toggle(`active`);
}

function appear(element) {
  const target = document.querySelector(element);
  const top = target.getBoundingClientRect().top;
  console.log(top);
}

window.addEventListener("scroll", function () {
  appear("section:nth-of-type(1) img");
});
