// Menú hamburguesa//

const navbar = document.querySelector(".navbarList");

const openNavbar = (e) => {
  if (e.target.classList.contains("toggleMenu")) {
    navbar.classlist.add("display-nav")= "flex";
    
  }
};

const closeNavBar = (e) =>{
    if(e.target.classList.contains("Referencia")){
      navbar.classlist.remove("display-nav")= "none";
      
    }

}

const init = () => {
  window.addEventListener("click", openNavbar);
  window.addEventListener("click", closeNavBar);
  
};

init();




