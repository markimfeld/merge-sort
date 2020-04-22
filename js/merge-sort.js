const btnNavBar = document.getElementById("btn-nav-bar");

const sideNav = document.getElementById("side-nav");
const mainContent = document.getElementsByClassName("hide");

btnNavBar.addEventListener(("click"), () => {
  sideNav.style.transform = `translateX(0%)`;
  for (let e of mainContent) {
    e.style.opacity = 0.4;
  }
});

const btnNavClose = document.getElementById("btn-nav-close");

btnNavClose.addEventListener(("click"), () => {
  sideNav.style.transform = `translateX(-100%)`;
  for (let e of mainContent) {
    e.style.opacity = 1;
  }
});