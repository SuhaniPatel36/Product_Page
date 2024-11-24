const productGrid = document.getElementById('products');
const tabs = document.querySelectorAll('#navtabs li a');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add active class to the clicked tab
        tab.classList.add('active');

    });
});
function addToCart(button) {
    // button.innerText = button.innerText === 'Add to Cart' ? 'Remove from Cart' : 'Add to Cart';
    if (button.innerText === 'Add to Cart') {
        button.innerText = 'Remove from Cart';
        button.style.backgroundColor = '#a893eb';
    } else {
        button.innerText = 'Add to Cart';
        button.style.backgroundColor = "#5e2ced";
    }
}

function filterCategory(category) {
    const products = productGrid.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = '';
            product.parentElement.previousElementSibling.style.display = '';
        } else {
            product.style.display = 'none';
            product.parentElement.previousElementSibling.style.display = 'none';
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
