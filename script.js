// Datos de los productos
const products = [
    { id: 1, name: 'Producto 1', price: 100, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Producto 2', price: 200, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Producto 3', price: 300, image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Producto 4', price: 400, image: 'https://via.placeholder.com/200' },
    { id: 5, name: 'Producto 5', price: 500, image: 'https://via.placeholder.com/200' },
    { id: 6, name: 'Producto 6', price: 600, image: 'https://via.placeholder.com/200' },
    { id: 7, name: 'Producto 7', price: 700, image: 'https://via.placeholder.com/200' },
    { id: 8, name: 'Producto 8', price: 800, image: 'https://via.placeholder.com/200' },
    { id: 9, name: 'Producto 9', price: 900, image: 'https://via.placeholder.com/200' },
    { id: 10, name: 'Producto 10', price: 1000, image: 'https://via.placeholder.com/200' },
    { id: 11, name: 'Producto 11', price: 1100, image: 'https://via.placeholder.com/200' },
    { id: 12, name: 'Producto 12', price: 1200, image: 'https://via.placeholder.com/200' },
    { id: 13, name: 'Producto 13', price: 1300, image: 'https://via.placeholder.com/200' },
    { id: 14, name: 'Producto 14', price: 1400, image: 'https://via.placeholder.com/200' },
    { id: 15, name: 'Producto 15', price: 1500, image: 'https://via.placeholder.com/200' },
    { id: 16, name: 'Producto 16', price: 1600, image: 'https://via.placeholder.com/200' },
    { id: 17, name: 'Producto 17', price: 1700, image: 'https://via.placeholder.com/200' },
    { id: 18, name: 'Producto 18', price: 1800, image: 'https://via.placeholder.com/200' },
    { id: 19, name: 'Producto 19', price: 1900, image: 'https://via.placeholder.com/200' },
    { id: 20, name: 'Producto 20', price: 2000, image: 'https://via.placeholder.com/200' },
    { id: 21, name: 'Producto 21', price: 2100, image: 'https://via.placeholder.com/200' },
    { id: 22, name: 'Producto 22', price: 2200, image: 'https://via.placeholder.com/200' },
    { id: 23, name: 'Producto 23', price: 2300, image: 'https://via.placeholder.com/200' },
    { id: 24, name: 'Producto 24', price: 2400, image: 'https://via.placeholder.com/200' },
    { id: 25, name: 'Producto 25', price: 2500, image: 'https://via.placeholder.com/200' }
];

// Carrito de compras
let cart = [];

// Mostrar productos en la página principal
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';
    
    console.log(products); // Verifica que los productos estén siendo procesados

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price}</p>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(p => p.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    updateCartCount();
    alert('Producto agregado al carrito');
}

// Actualizar el contador de productos en el carrito
function updateCartCount() {
    const cartCount = cart.reduce((total, product) => total + product.quantity, 0);
    document.getElementById("cart-count").textContent = cartCount;
}

// Llamar a las funciones de carga al cargar la página
// Llamada a la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();  // Llamada para cargar los productos

    // Agregar event listeners a los botones de "Agregar al carrito"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
});

