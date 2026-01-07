// Product Data
const products = [
    {
        id: 1,
        name: "Lace Trim Tops",
        price: 10.46,
        originalPrice: null,
        category: "women",
        size: ["S", "M", "L"],
        image: "https://zandokh.com/image/catalog/products/2025-11/22225081762/ZD__0501.jpg",
        rating: 4,
        isNew: false,
        isPromo: false
    },
    {
        id: 2,
        name: "Regular T-Shirt With Printed",
        price: 11.86,
        originalPrice: null,
        category: "women",
        size: ["S", "M", "L", "XL"],
        image: "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5136.jpg",
        rating: 4,
        isNew: false,
        isPromo: false
    },
    {
        id: 3,
        name: "Hip Cut Line Skirt",
        price: 8.95,
        originalPrice: null,
        category: "women",
        size: ["S", "M", "L"],
        image: "https://zandokh.com/image/catalog/products/2025-04/12225031163/11042025afternoon14192.jpg",
        rating: 4,
        isNew: false,
        isPromo: false
    },
    {
        id: 4,
        name: "Satin Flared Midi Skirt",
        price: 13.96,
        originalPrice: null,
        category: "women",
        size: ["M", "L", "XL"],
        image: "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511678.jpg",
        rating: 4,
        isNew: true,
        isPromo: false
    },
    {
        id: 5,
        name: "Cropped Knitted Polo Shirts",
        price: 28.95,
        originalPrice: null,
        category: "women",
        size: ["S", "M", "L"],
        image: "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8335.jpg",
        rating: 4,
        isNew: true,
        isPromo: false
    },
    {
        id: 6,
        name: "Regular Knitted Polo Shirts",
        price: 28.95,
        originalPrice: null,
        category: "women",
        size: ["M", "L", "XL"],
        image: "https://zandokh.com/image/catalog/products/2025-11/22225081776/TAKK7678.jpg",
        rating: 4,
        isNew: true,
        isPromo: false
    },
    {
        id: 7,
        name: "Midi Slitted Skirt",
        price: 28.95,
        originalPrice: null,
        category: "women",
        size: ["S", "M", "L", "XL"],
        image: "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1449.jpg",
        rating: 4,
        isNew: true,
        isPromo: false
    },
    {
        id: 8,
        name: "Cropped Denim Jackets",
        price: 19.95,
        originalPrice: 28.95,
        category: "women",
        size: ["S", "M", "L"],
        image: "https://zandokh.com/image/catalog/products/2025-11/22225081615%20/ZD__5509.jpg",
        rating: 4,
        isNew: false,
        isPromo: true
    },
    {
        id: 9,
        name: "Regular Denim Jackets",
        price: 21.95,
        originalPrice: 28.95,
        category: "women",
        size: ["M", "L", "XL"],
        image: "https://zandokh.com/image/catalog/products/2025-10/22225051448/TAKK8892.jpg",
        rating: 4,
        isNew: false,
        isPromo: true
    },
    {
        id: 10,
        name: "Slim Fitted T-Shirt",
        price: 15.95,
        originalPrice: 24.95,
        category: "women",
        size: ["S", "M", "L", "XL"],
        image: "https://zandokh.com/image/catalog/products/2025-05/22225031376/ZANDO290520250471.jpg",
        rating: 4,
        isNew: false,
        isPromo: true
    },
    {
        id: 11,
        name: "Regular Sweatshirts",
        price: 22.95,
        originalPrice: 32.95,
        category: "women",
        size: ["M", "L", "XL"],
        image: "https://zandokh.com/image/catalog/products/2025-11/12225102260/ZD__8518.jpg",
        rating: 4,
        isNew: false,
        isPromo: true
    },
    {
        id: 12,
        name: "QUILTED TECHNICAL JACKET",
        price: 24.95,
        originalPrice: null,
        category: "men",
        size: ["M", "L", "XL"],
        image: "https://static.zara.net/assets/public/3ca2/3cbf/f779471f9235/12641e1dccad/01437995800-a1/01437995800-a1.jpg?ts=1761299560170&w=1125",
        rating: 4.5,
        isNew: false,
        isPromo: false
    },
    {
        id: 13,
        name: "LEATHER JACKET WITH POCKETS",
        price: 32.95,
        originalPrice: null,
        category: "men",
        size: ["S", "M", "L", "XL"],
        image: "https://static.zara.net/assets/public/9a81/374c/5c5d40a69ec8/b02474382f3b/05388400500-p/05388400500-p.jpg?ts=1767102371312&w=1024",
        rating: 4.5,
        isNew: false,
        isPromo: false
    },
    {
        id: 14,
        name: "Basketball Cap",
        price: 8.95,
        originalPrice: null,
        category: "accessories",
        size: ["One Size"],
        image: "https://zandokh.com/image/catalog/products/2025-12/5582505108/TAKK9039.jpg",
        rating: 5,
        isNew: false,
        isPromo: false
    }
];

// State
let filteredProducts = [...products];
let currentCategory = 'all';
let selectedSizes = [];
let maxPrice = 1000;
let sortBy = 'featured';
let currentPage = 1;
const productsPerPage = 6;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const productCount = document.getElementById('productCount');
const categoryButtons = document.querySelectorAll('.category-filter');
const sizeCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="size-"]');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const sortSelect = document.getElementById('sortSelect');
const paginationContainer = document.getElementById('paginationContainer');
const resetFiltersBtn = document.getElementById('resetFilters');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Category filters
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterProducts();
        });
    });

    // Size filters
    sizeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const size = e.target.id.replace('size-', '').toUpperCase();
            if (e.target.checked) {
                selectedSizes.push(size);
            } else {
                selectedSizes = selectedSizes.filter(s => s !== size);
            }
            filterProducts();
        });
    });

    // Price range
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            maxPrice = parseInt(e.target.value);
            if (priceValue) {
                priceValue.textContent = `$${maxPrice}`;
            }
            filterProducts();
        });
    }

    // Sort
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortBy = e.target.value;
            sortProducts();
            renderProducts();
        });
    }

    // Reset filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            resetFilters();
        });
    }
}

// Reset all filters
function resetFilters() {
    // Reset category
    currentCategory = 'all';
    categoryButtons.forEach(b => b.classList.remove('active'));
    categoryButtons[0].classList.add('active');
    
    // Reset sizes
    selectedSizes = [];
    sizeCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset price
    maxPrice = 1000;
    if (priceRange) {
        priceRange.value = 1000;
    }
    if (priceValue) {
        priceValue.textContent = '$1000';
    }
    
    // Reset sort
    sortBy = 'featured';
    if (sortSelect) {
        sortSelect.value = 'featured';
    }
    
    // Reset page
    currentPage = 1;
    
    // Refresh products
    filterProducts();
}

// Filter products
function filterProducts() {
    filteredProducts = products.filter(product => {
        // Category filter
        const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
        
        // Size filter
        const sizeMatch = selectedSizes.length === 0 || 
                         selectedSizes.some(size => product.size.includes(size));
        
        // Price filter
        const priceMatch = product.price <= maxPrice;
        
        return categoryMatch && sizeMatch && priceMatch;
    });
    
    currentPage = 1; // Reset to first page when filtering
    sortProducts();
    renderProducts();
    renderPagination();
}

// Sort products
function sortProducts() {
    switch(sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.isNew - a.isNew);
            break;
        default:
            // Featured - keep original order
            break;
    }
}

// Render products
function renderProducts() {
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-inbox" style="font-size: 4rem; color: #ccc;"></i>
                <h4 class="mt-3">No products found</h4>
                <p>Try adjusting your filters</p>
            </div>
        `;
        if (productCount) {
            productCount.textContent = 'Showing 0 of 0 products';
        }
        if (paginationContainer) {
            paginationContainer.innerHTML = '';
        }
        return;
    }
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    paginatedProducts.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
    
    // Update count
    if (productCount) {
        const showing = Math.min(endIndex, filteredProducts.length);
        productCount.textContent = `Showing ${startIndex + 1}-${showing} of ${filteredProducts.length} products`;
    }
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4';
    
    const stars = generateStars(product.rating);
    
    // Price display logic
    let priceHTML = '';
    if (product.isPromo && product.originalPrice) {
        // Promotion products show discount
        priceHTML = `
            <div class="mb-2">
                <span class="text-danger fw-bold">US $${product.price.toFixed(2)}</span>
                <span class="text-muted text-decoration-line-through ms-2">$${product.originalPrice.toFixed(2)}</span>
            </div>
        `;
    } else {
        // New products and regular products - no discount
        priceHTML = `<span class="text-danger fw-bold">US $${product.price.toFixed(2)}</span>`;
    }
    
    col.innerHTML = `
        <a href="product-detail.html?id=${product.id}" class="text-decoration-none">
            <div class="card h-100 shadow-sm">
                <div class="image">
                    <img class="w-100" src="${product.image}" alt="${product.name}">
                </div>
                <div class="title p-3">
                    ${priceHTML}
                    <p class="mt-2 mb-2 text-dark">${product.name}</p>
                    <div class="rating">
                        ${stars}
                    </div>
                </div>
            </div>
        </a>
    `;
    
    return col;
}

// Generate star ratings
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="bi bi-star-fill"></i>';
        } else {
            stars += '<i class="bi bi-star"></i>';
        }
    }
    return stars;
}

// Render pagination
function renderPagination() {
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<ul class="pagination justify-content-center">';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1}); return false;">Previous</a>
        </li>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>
            </li>
        `;
    }
    
    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1}); return false;">Next</a>
        </li>
    `;
    
    paginationHTML += '</ul>';
    paginationContainer.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    renderPagination();
    
    // Scroll to top of products
    if (productGrid) {
        productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
