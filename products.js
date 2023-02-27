const productCard = document.querySelector('.product-card');

class Clothes {
  constructor(id, name,price, category, image) {
    this.id = id;
    this.name = name;
    //this.brand = brand;
    this.price = price;
    this.category=category;                           
    this.image=image;
  }
}

const clothes=[
  new Clothes(1 ,"Camiseta selección Argentina 3 estrellas",23000,"camisetas","./Assets/productos/camiseta seleccion arg.jpg"),
  new Clothes(2 ,"Remera selección Argentina 3 estrellas",17000,"remera","./Assets/productos/remera arg campeon.jpg"),            
  new Clothes(3 ,"Botines X Speedportal 3 cesped",30000,"botines","./Assets/productos/botines.jpg"),
  new Clothes(4,"BUZO DE CUELLO REDONDO ADIDAS X LEGO® TECH PACK",20999,"buzo","./Assets/productos/BUZO ADIDAS.jpg")

]

/*Renderizado de cards*/

const RenderCards = ({id, name, price, category, image})=>{
  return`<div class="product-card-info">
  <img
    src="${image}"
    alt="${name}"
  />
  <div class="product-card-top">
    <h4>${name}</h4>
    <p>$${price}</p>
    <span>envio gratis!</span>
  </div>

  <div class="product-card-bottom">
    <button data-id="${id}">Agregar al carrito</button>
  </div>
</div>`
}

const RenderCardsHTML =(arreglo)=>{
  productCard.innerHTML=arreglo.map ((products)=>RenderCards(products)).join('');
}

RenderCardsHTML(clothes);

const searchProducts =(e) =>{
  e.preventDefault();
  let searchName = productSearchName.value.toLowerCase();
  const ProductForName = (products,category)=>{
    let indumentaria = indumentaria.toLowerCase();
    return indumentaria.indcludes(category);
  }
}





