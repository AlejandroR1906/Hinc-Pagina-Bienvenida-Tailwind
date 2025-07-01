function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          nombre: "Zapatos Clásicos",
          precio: 120000,
          imagen: "Img/Producto1.jpg",
          enlace: "producto1.html"
        },
        {
          nombre: "Camisa Formal",
          precio: 85000,
          imagen: "Img/Producto2.jpg",
          enlace: "producto2.html"
        },
        {
          nombre: "Chaqueta de Cuero",
          precio: 240000,
          imagen: "Img/Producto3.png",
          enlace: "producto3.html"
        }
      ]);
    }, 1500); 
  });
}

function mostrarProductos(productos) {
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = ""; 

  productos.forEach(producto => {
    const productoHTML = `
      <div class="max-w-[400px] text-center text-gray-800">
        <a href="${producto.enlace}">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="w-[300px] h-[400px] object-cover hover:scale-105 hover:opacity-80 transition">
        </a>
        <div class="font-bold text-xl mt-2">${producto.nombre}</div>
        <div class="text-lg text-gray-600">$${producto.precio.toLocaleString()}</div>
      </div>
    `;
    contenedor.innerHTML += productoHTML;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCargar");
  const loader = document.getElementById("loader");

  btn.addEventListener("click", () => {
    btn.disabled = true;
    loader.classList.remove("hidden");

    obtenerProductos()
      .then(productos => {
        mostrarProductos(productos);
        loader.classList.add("hidden");
      })
      .catch(error => {
        console.error("Error al cargar productos:", error);
        loader.textContent = "Error al cargar productos";
      });
  });
});
