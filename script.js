// Datos de los productos (estos pueden ser reemplazados por una base de datos o API)
const products = [
    { id: 1, name: 'Producto 1', price: 100, category: 'Categoría 1', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Producto 2', price: 200, category: 'Categoría 1', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Producto 3', price: 300, category: 'Categoría 1', image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Producto 4', price: 400, category: 'Categoría 2', image: 'https://via.placeholder.com/200' },
    { id: 5, name: 'Producto 5', price: 500, category: 'Categoría 2', image: 'https://via.placeholder.com/200' },
    { id: 6, name: 'Producto 6', price: 600, category: 'Categoría 2', image: 'https://via.placeholder.com/200' },
    { id: 7, name: 'Producto 7', price: 700, category: 'Categoría 3', image: 'https://via.placeholder.com/200' },
    { id: 8, name: 'Producto 8', price: 800, category: 'Categoría 3', image: 'https://via.placeholder.com/200' },
    { id: 9, name: 'Producto 9', price: 900, category: 'Categoría 3', image: 'https://via.placeholder.com/200' },
    { id: 10, name: 'Producto 10', price: 1000, category: 'Categoría 4', image: 'https://via.placeholder.com/200' },
    { id: 11, name: 'Producto 11', price: 1100, category: 'Categoría 4', image: 'https://via.placeholder.com/200' },
    { id: 12, name: 'Producto 12', price: 1200, category: 'Categoría 4', image: 'https://via.placeholder.com/200' },
    { id: 13, name: 'Producto 13', price: 1300, category: 'Categoría 5', image: 'https://via.placeholder.com/200' },
    { id: 14, name: 'Producto 14', price: 1400, category: 'Categoría 5', image: 'https://via.placeholder.com/200' },
    { id: 15, name: 'Producto 15', price: 1500, category: 'Categoría 5', image: 'https://via.placeholder.com/200' },
    { id: 16, name: 'Producto 16', price: 1600, category: 'Categoría 6', image: 'https://via.placeholder.com/200' },
    { id: 17, name: 'Producto 17', price: 1700, category: 'Categoría 6', image: 'https://via.placeholder.com/200' },
    { id: 18, name: 'Producto 18', price: 1800, category: 'Categoría 6', image: 'https://via.placeholder.com/200' },
    { id: 19, name: 'Producto 19', price: 1900, category: 'Categoría 7', image: 'https://via.placeholder.com/200' },
    { id: 20, name: 'Producto 20', price: 2000, category: 'Categoría 7', image: 'https://via.placeholder.com/200' },
    { id: 21, name: 'Producto 21', price: 2100, category: 'Categoría 7', image: 'https://via.placeholder.com/200' },
    { id: 22, name: 'Producto 22', price: 2200, category: 'Categoría 8', image: 'https://via.placeholder.com/200' },
    { id: 23, name: 'Producto 23', price: 2300, category: 'Categoría 8', image: 'https://via.placeholder.com/200' },
    { id: 24, name: 'Producto 24', price: 2400, category: 'Categoría 8', image: 'https://via.placeholder.com/200' },
    { id: 25, name: 'Producto 25', price: 2500, category: 'Categoría 9', image: 'https://via.placeholder.com/200' }
];

// Carrito de compras
let cart = [];

// Mostrar productos en la página principal
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';
    
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

// Mostrar productos en el carrito
function loadCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = `
            <div class="row mb-3">
                <div class="col-md-8">
                    <p>${item.name} x ${item.quantity}</p>
                </div>
                <div class="col-md-4 text-end">
                    <p>$${item.price * item.quantity}</p>
                </div>
            </div>
        `;
        cartItems.innerHTML += cartItem;
    });
}

// Función de inicio de sesión
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Inicio de sesión exitoso.");
    window.location.href = "index.html";  // Redirigir a la página principal
});

// Función de registro
document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registro exitoso.");
    window.location.href = "login.html";  // Redirigir a la página de inicio de sesión
});

// Llamar a las funciones de carga al cargar la página
if (document.getElementById("product-list")) {
    loadProducts();
}

if (document.getElementById("cart-items")) {
    loadCart();
}

// Añadir eventos a los botones "Agregar al carrito"
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = parseInt(event.target.getAttribute("data-id"));
        addToCart(productId);
    }
});
