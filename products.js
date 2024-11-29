// Sample Product Data
const products = [
    { id: 1, name: "Toy Car", price: 30, type: "toys", ageGroup: "kids", image: "media/lamba.jpg" },
    { id: 2, name: "Smartphone", price: 500, type: "electronics", ageGroup: "adults", image: "media/smartphone.jpg" },
    { id: 3, name: "Doll", price: 20, type: "toys", ageGroup: "kids", image: "media/doll.jfif" },
    { id: 4, name: "Headphones", price: 100, type: "electronics", ageGroup: "adults", image: "media/headphones.jpg" },
    { id:5, name: "Teddy", price: 250, type: "toys", ageGroup: "kids", image:"media/teddy.jpg"}
];

// Dynamically Load Products
function loadProducts(filter = {}) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; // Clear existing products

    const filteredProducts = products.filter(product => {
        return (filter.ageGroup === 'all' || product.ageGroup === filter.ageGroup) &&
               (filter.type === 'all' || product.type === filter.type) &&
               (filter.price === 'all' || 
                (filter.price === 'low' && product.price < 50) ||
                (filter.price === 'mid' && product.price >= 50 && product.price <= 100) ||
                (filter.price === 'high' && product.price > 100));
    });

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>

            <div class="details">
                <p>${product.name}</p>
                <p>Price: $${product.price}</p>
                <p>Type: ${product.type}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(productCard);
    });
}

function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (!selectedProduct) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity
    } else {
        selectedProduct.quantity = 1; // Add new product with quantity
        cart.push(selectedProduct);
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    alert(`${selectedProduct.name} added to cart!`);
}

// Handle Filter Changes
document.querySelectorAll('.sidebar select').forEach(select => {
    select.addEventListener('change', () => {
        const filter = {
            ageGroup: document.getElementById('age-group').value,
            type: document.getElementById('type').value,
            price: document.getElementById('price-range').value,
        };
        loadProducts(filter);
    });
});

function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';  // Show matching product
        } else {
            product.style.display = 'none';  // Hide non-matching product
        }
    });
}


// Initial Load
loadProducts({ ageGroup: 'all', type: 'all', price: 'all' });

