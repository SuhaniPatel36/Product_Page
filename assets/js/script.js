const productGrid = document.getElementById('productGrid');

function addToCart(button) {
    button.innerText = button.innerText === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart';
    button.classList.toggle('btn-danger');
}

function filterCategory(category) {
    const products = productGrid.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts() {
    const sortOption = document.getElementById('sortOptions').value;
    const products = Array.from(productGrid.children);
    if (sortOption === 'price-low') {
        products.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (sortOption === 'price-high') {
        products.sort((a, b) => b.dataset.price - a.dataset.price);
    }
    products.forEach(product => productGrid.appendChild(product));
}
