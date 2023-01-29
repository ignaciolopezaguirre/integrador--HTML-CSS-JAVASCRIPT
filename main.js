// Menú hamburguesa//

const navbar = document.querySelector(".navbarList");

const openNavbar = (e) => {
  if (e.target.classList.contains("toggleMenu")) {
    navbar.style.display = "flex";
  }
};

const closeNavBar = (e) =>{
    if(e.target.classList.contains("Referencia")){
        navbar.style.display = "none";
    }

}

const init = () => {
  window.addEventListener("click", openNavbar);
  window.addEventListener("click", closeNavBar);
  
};

init();


