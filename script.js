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
let cart = JSON.parse(localStorage.getItem("cart")) || [];

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

// Mostrar resumen del pedido en la página de confirmación
function loadOrderSummary() {
    const orderSummary = document.getElementById("order-summary");
    orderSummary.innerHTML = '';
    
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const orderItem = `
            <div class="row mb-3">
                <div class="col-md-8">
                    <p>${item.name} x ${item.quantity}</p>
                </div>
                <div class="col-md-4 text-end">
                    <p>$${item.price * item.quantity}</p>
                </div>
            </div>
        `;
        orderSummary.innerHTML += orderItem;
    });
    
    // Mostrar total del pedido
    const totalSummary = `
        <div class="row">
            <div class="col-md-8"><strong>Total</strong></div>
            <div class="col-md-4 text-end"><strong>$${total}</strong></div>
        </div>
    `;
    orderSummary.innerHTML += totalSummary;
}

// Confirmar el pedido
function confirmOrder() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        alert("Pedido confirmado. ¡Gracias por tu compra!");
        cart = [];  // Limpiar el carrito
        localStorage.setItem("cart", JSON.stringify(cart));  // Guardar el carrito vacío
        window.location.href = "index.html";  // Redirigir a la página de inicio
    }
}

// Cargar carrito y resumen de pedido
if (document.getElementById("cart-items")) {
    loadCart();
}

if (document.getElementById("order-summary")) {
    loadOrderSummary();
}
