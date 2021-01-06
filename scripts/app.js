console.log("hij werkt");

const menuBtn = document.querySelector(`.navbar button`);
const menu = document.querySelector(`nav`);
const desc = document.querySelector(`section:nth-of-type(1) h1`);

menuBtn.addEventListener(`click`, showMenu);
window.addEventListener(`scroll`, appearScroll);

function showMenu(e) {
  console.log(`ff testen`);
  menu.classList.toggle(`active`);
}

function appearScroll() {
  const title = document.querySelector(`section:nth-of-type(1)`);
  let titlePosition = title.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.4;
  console.log(title);

  if (titlePosition < screenPosition) {
    title.classList.add(`appear`);
  }
}
