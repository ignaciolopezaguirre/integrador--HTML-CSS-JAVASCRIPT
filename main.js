// Menú hamburguesa//

const navbar = document.querySelector(".navbarList");

const openNavbar = (e) => {
  if (
    e.target.classList.contains("toggleMenu") &&
    !navbar.classList.contains("media-nav")
  ) {
    navbar.classList.add("media-nav");
    return;
  }
  if (e.target.classList.contains("Referencia")) {
    navbar.classList.remove("media-nav");
  }
  if (
    e.target.classList.contains("toggleMenu") &&
    navbar.classList.contains("media-nav")
  ) {
    navbar.classList.remove("media-nav");
  }
};

const init = () => {
  window.addEventListener("click", openNavbar);
};

init();
