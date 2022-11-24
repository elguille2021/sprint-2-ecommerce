/* import { productoServices } from "../servicios/productos-servicios.js";
//import { formatPrice } from "../formatterPrices.js";

const nuevoProduto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="preco">${formatPrice(price)}</p>
            <a class="ver-produto" href="../produto.html?id=${id}">Ver Produto</a>
        </div>   
    `;
  card.innerHTML = contenido; */

  import { productoServices } from "../servicios/productos-servicios.js";
  //import { formatPrice } from "../formatterPrices.js";
  
const nuevoProducto = (name, price, imageUrl, description,id ) => {
    const card = document.createElement("div");  //recorre el DOM <!--<p>${formatPrice(price)}</p>   descrição-->
    const contenido = `
          <div>
              <img src="${imageUrl}" alt="img">
              <h1 ${name} </h1>
              <p>${price}</p>
              <h1>${description}</h1>
              <h1>${id}</h1>
              
          </div>   
      `;
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
}
const producto = document.querySelector("[datos-productos]");
const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento =>  {
            producto.appendChild(nuevoProducto(elemento.none, elemento.price, elemento.imageUrl, elemento.description, elemento.id))
        });

    } catch (error) {
        console.log(error);
    }
}

render();