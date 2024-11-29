// Load cart items from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = ''; // Clear current items
    let total = 0;

    cart.forEach(product => {
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartItems.appendChild(item);
        total += product.price * product.quantity; // Calculate total
    });

    cartTotal.textContent = total;
}

// Remove product from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload cart
}

// Clear entire cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Checkout is not working yet...');

});

// Load the cart on page load
window.onload = loadCart;