// Products Database
const products = {
    1: {
        name: "Lace Trim Tops",
        price: 10.46,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 128,
        description: "Elegant lace trim tops perfect for any occasion. Made with high-quality fabric that ensures comfort and style. Features delicate lace detailing and a flattering fit.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-11/22225081762/ZD__0501.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081762/ZD__0503.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081762/ZD__0495.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081762/ZD__0494.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081762/ZD__0493.jpg"
        ],
        colors: [{name: "White", image: "https://zandokh.com/image/catalog/products/2025-11/22225081762/ZD__0501.jpg"}],
        availableSizes: ["XS", "S", "M", "L"],
        material: "95% Cotton, 5% Elastane",
        style: "Casual",
        fit: "Regular Fit"
    },
    2: {
        name: "Regular T-Shirt With Printed",
        price: 11.86,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 95,
        description: "Comfortable regular t-shirt with trendy printed design. Perfect for casual everyday wear with a relaxed fit.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5136.jpg",
            "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5142.jpg",
            "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5131.jpg",
            "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5129.jpg",
            "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5137.jpg",
            "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5128.jpg"
        ],
        colors: [{name: "Multi", image: "https://zandokh.com/image/catalog/products/2025-12/22225091838/ZD__5136.jpg"}],
        availableSizes: ["S", "M", "L", "XL"],
        material: "100% Cotton",
        style: "Casual",
        fit: "Regular Fit"
    },
    3: {
        name: "Hip Cut Line Skirt",
        price: 8.95,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 87,
        description: "Stylish hip cut line skirt with modern design. Perfect for creating versatile looks from casual to semi-formal.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-04/12225031163/11042025afternoon14193.jpg",
            "https://zandokh.com/image/catalog/products/2025-04/12225031163/11042025afternoon14176.jpg",
            "https://zandokh.com/image/catalog/products/2025-04/12225031163/11042025afternoon14184.jpg",
            "https://zandokh.com/image/catalog/products/2025-04/12225031163/11042025afternoon14194.jpg",
            "https://zandokh.com/image/catalog/products/2025-04/12225031163/11042025afternoon14192.jpg"
        ],
        colors: [
            {name: "Light Blue", image: "https://zandokh.com/image/catalog/products/2025-04/12225031163/11042025afternoon14193.jpg"},
            {name: "Mint", image: "https://zandokh.com/image/catalog/products/2025-04/12225031163/AFTERNOON15269.jpg"}
        ],
        availableSizes: ["XS", "S", "M"],
        material: "Polyester Blend",
        style: "Smart Casual",
        fit: "A-Line"
    },
    4: {
        name: "Satin Flared Midi Skirt",
        price: 13.96,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 112,
        description: "Elegant satin flared midi skirt with luxurious feel. Perfect for special occasions and evening events.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511678.jpg",
            "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511664.jpg",
             "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511675.jpg",
            "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511683.jpg",
            "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511682.jpg"
        ],
        colors: [
            {name: "Charcoal Gray", image: "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511678.jpg"},
            {name: "Gold", image: "https://zandokh.com/image/catalog/products/2025-07/12225041327/AFTERNOON28.06.202511657.jpg"}
        ],
        availableSizes: ["S", "M", "L"],
        material: "Satin",
        style: "Elegant",
        fit: "Flared"
    },
    5: {
        name: "Cropped Knitted Polo Shirts",
        price: 28.95,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 76,
        description: "Trendy cropped knitted polo shirt with modern styling. Comfortable knit fabric perfect for layering.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8330.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8335.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8331.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8326.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8325.jpg"
        ],
        colors: [
            {name: "White", image: "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8330.jpg"},
            {name: "Light Blue", image: "https://zandokh.com/image/catalog/products/2025-11/22225081683/ZD__8304.jpg"}
        ],
        availableSizes: ["XS", "S", "M", "L", "XL"],
        material: "Knitted Cotton",
        style: "Casual",
        fit: "Cropped"
    },
    6: {
        name: "Regular Knitted Polo Shirts",
        price: 28.95,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 89,
        description: "Classic regular knitted polo shirt. Versatile piece that works for both casual and smart-casual occasions.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-11/22225081776/TAKK7672.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081776/TAKK7678.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081776/TAKK7671.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081776/TAKK7670.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081776/TAKK7669.jpg"
        ],
        colors: [{name: "Ivory", image: "https://zandokh.com/image/catalog/products/2025-11/22225081776/TAKK7669.jpg"}],
        availableSizes: ["M", "L", "XL"],
        material: "Knitted Cotton",
        style: "Smart Casual",
        fit: "Regular Fit"
    },
    7: {
        name: "Midi Slitted Skirt",
        price: 28.95,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 103,
        description: "Elegant midi skirt with stylish slit detail. Perfect for creating sophisticated looks.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1454.jpg",
            "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1449.jpg",
            "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1456.jpg",
            "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1459.jpg",
            "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1459.jpg"

        ],
        colors: [
            {name: "Black", image: "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1454.jpg"},
            {name: "Gray", image: "https://zandokh.com/image/catalog/products/2025-09/22225061587/ZD__1482.jpg"}
        ],
        availableSizes: ["XS", "S", "L", "XL"],
        material: "Polyester Blend",
        style: "Elegant",
        fit: "Midi"
    },
    8: {
        name: "Cropped Denim Jackets",
        price: 28.95,
        oldPrice: null,
        discount: 0,
        rating: 4.0,
        reviews: 134,
        description: "Trendy cropped denim jacket perfect for layering. Classic denim style with modern cropped cut.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-11/22225081615%20/ZD__5513.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081615%20/ZD__5509.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081615%20/ZD__5513.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081615%20/ZD__5517.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/22225081615%20/ZD__5518.jpg"
        ],
        colors: [{name: "Beige", image: "https://zandokh.com/image/catalog/products/2025-11/22225081615%20/ZD__5513.jpg"}],
        availableSizes: ["S", "M", "L"],
        material: "Denim",
        style: "Casual",
        fit: "Cropped"
    },
    9: {
        name: "Regular Denim Jackets",
        price: 28.95,
        oldPrice: 41.36,
        discount: 30,
        rating: 4.0,
        reviews: 98,
        description: "Classic regular denim jacket. Timeless piece that never goes out of style.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-10/22225051448/TAKK8899.jpg",
            "https://zandokh.com/image/catalog/products/2025-10/22225051448/TAKK8892.jpg",
            "https://zandokh.com/image/catalog/products/2025-10/22225051448/TAKK8889.jpg",
            "https://zandokh.com/image/catalog/products/2025-10/22225051448/TAKK8883%20copy.jpg",
            "https://zandokh.com/image/catalog/products/2025-10/22225051448/TAKK8881.jpg"
        ],
        colors: [{name: "Blue", image: "https://zandokh.com/image/catalog/products/2025-10/22225051448/TAKK8899.jpg"}],
        availableSizes: ["XS", "S", "M", "L", "XL"],
        material: "Denim",
        style: "Casual",
        fit: "Regular Fit"
    },
    10: {
        name: "Slim Fitted T-Shirt",
        price: 28.95,
        oldPrice: 41.36,
        discount: 30,
        rating: 4.0,
        reviews: 156,
        description: "Sleek slim fitted t-shirt that hugs your body perfectly. Modern cut for a contemporary look.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-05/22225031376/ZANDO290520250480.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/22225031376/ZANDO290520250471.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/22225031376/ZANDO290520250475.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/22225031376/ZANDO290520250482.jpg",
            "https://zandokh.com/image/catalog/products/2025-05/22225031376/ZANDO290520250481.jpg"

        ],
        colors: [{name: "Black", image: "https://zandokh.com/image/catalog/products/2025-05/22225031376/ZANDO290520250480.jpg"}],
        availableSizes: ["XS", "M", "L"],
        material: "Cotton Blend",
        style: "Casual",
        fit: "Slim Fit"
    },
    11: {
        name: "Regular Sweatshirts",
        price: 28.95,
        oldPrice: 41.36,
        discount: 30,
        rating: 4.0,
        reviews: 142,
        description: "Comfortable regular sweatshirt perfect for relaxed days. Soft fabric with cozy feel.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-11/12225102260/ZD__8516.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/12225102260/ZD__8518.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/12225102260/ZD__8513.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/12225102260/ZD__8513.jpg",
            "https://zandokh.com/image/catalog/products/2025-11/12225102260/ZD__8511.jpg"
        ],
        colors: [{name: "Grey", image: "https://zandokh.com/image/catalog/products/2025-11/12225102260/ZD__8516.jpg"}],
        availableSizes: ["S", "M", "XL"],
        material: "Cotton Fleece",
        style: "Casual",
        fit: "Regular Fit"
    },
    12: {
        name: "QUILTED TECHNICAL JACKET",
        price: 24.95,
        oldPrice: null,
        discount: 0,
        rating: 4.5,
        reviews: 167,
        description: "Technical quilted jacket with modern design. Perfect for outdoor activities and casual wear. Water-resistant fabric.",
        images: [
            "https://static.zara.net/assets/public/3ca2/3cbf/f779471f9235/12641e1dccad/01437995800-a1/01437995800-a1.jpg?ts=1761299560170&w=1125"
        ],
        colors: [{name: "Black", image: "https://static.zara.net/assets/public/3ca2/3cbf/f779471f9235/12641e1dccad/01437995800-a1/01437995800-a1.jpg?ts=1761299560170&w=1125"}],
        availableSizes: ["M", "L", "XL"],
        material: "100% Polyester",
        style: "Technical",
        fit: "Regular Fit"
    },
    13: {
        name: "LEATHER JACKET WITH POCKETS",
        price: 32.95,
        oldPrice: null,
        discount: 0,
        rating: 4.5,
        reviews: 203,
        description: "Classic leather jacket with functional pockets. Premium quality leather with modern styling. Perfect for any season.",
        images: [
            "https://static.zara.net/assets/public/9a81/374c/5c5d40a69ec8/b02474382f3b/05388400500-p/05388400500-p.jpg?ts=1767102371312&w=1024"
        ],
        colors: [{name: "Black", image: "https://static.zara.net/assets/public/9a81/374c/5c5d40a69ec8/b02474382f3b/05388400500-p/05388400500-p.jpg?ts=1767102371312&w=1024"}],
        availableSizes: ["S", "M", "L", "XL"],
        material: "100% Leather",
        style: "Classic",
        fit: "Regular Fit"
    },
    14: {
        name: "Basketball Cap",
        price: 8.95,
        oldPrice: null,
        discount: 0,
        rating: 5.0,
        reviews: 312,
        description: "Elegant leather watch with minimalist design. Perfect accessory for any outfit. Water-resistant with Japanese movement.",
        images: [
            "https://zandokh.com/image/catalog/products/2025-12/5582505108/TAKK9039.jpg"
        ],
        colors: [
            {name: "white", image: "https://zandokh.com/image/catalog/products/2025-12/5582505108/TAKK9039.jpg"}
        ],
        availableSizes: ["One Size"],
        material: "Genuine Leather, Stainless Steel",
        style: "Classic",
        fit: "Adjustable"
    }
};

// Load product on page load
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1';
    const product = products[productId];

    if (product) {
        // Update page title
        document.title = product.name + ' - NR Fashion Store';

        // Update product name
        document.querySelector('h1.fw-bold').textContent = product.name;

        // Update price
        const priceElement = document.querySelector('h3.text-danger');
        const oldPriceElement = document.querySelector('.text-muted del');
        
        if (product.discount > 0 && product.oldPrice) {
            // Show discount for products with discount
            priceElement.innerHTML = `
                US $${product.price.toFixed(2)} 
                <span class="badge bg-danger ms-2">-${product.discount}%</span>
            `;
            oldPriceElement.textContent = `US $${product.oldPrice.toFixed(2)}`;
            oldPriceElement.parentElement.style.display = 'block';
        } else {
            // Show only price for products without discount (IDs 1-8)
            priceElement.innerHTML = `US $${product.price.toFixed(2)}`;
            oldPriceElement.parentElement.style.display = 'none';
        }

        // Update images
        const mainImage = document.getElementById('mainImage');
        mainImage.src = product.images[0];

        const thumbnailContainer = document.querySelector('.thumbnail-list');
        thumbnailContainer.innerHTML = '';
        product.images.forEach((img, index) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.className = `thumbnail-item img-fluid rounded ${index === 0 ? 'active' : ''}`;
            thumb.onclick = function() { changeMainImage(this); };
            thumb.alt = `Product Image ${index + 1}`;
            thumbnailContainer.appendChild(thumb);
        });

        // Update colors dynamically
        const colorsHeading = document.querySelector('.mb-4:has(.color-option) h5');
        colorsHeading.textContent = `${product.colors.length} Color${product.colors.length > 1 ? 's' : ''} available`;
        
        const colorContainerParent = document.querySelector('.mb-4:has(.color-option) .d-flex');
        colorContainerParent.innerHTML = '';
        
        product.colors.forEach((color, index) => {
            const colorDiv = document.createElement('div');
            colorDiv.className = `color-option ${index === 0 ? 'active' : ''} rounded`;
            colorDiv.style.border = index === 0 ? '3px solid #333' : '1px solid #e0e0e0';
            
            const img = document.createElement('img');
            img.src = color.image;
            img.alt = color.name;
            img.className = 'rounded';
            
            const p = document.createElement('p');
            p.className = 'mb-0 small';
            p.textContent = color.name;
            
            colorDiv.appendChild(img);
            colorDiv.appendChild(p);
            
            colorDiv.onclick = function() {
                // Remove active from all
                document.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('active');
                    opt.style.border = '1px solid #e0e0e0';
                });
                // Add active to clicked
                this.classList.add('active');
                this.style.border = '3px solid #333';
                
                // Update main image
                document.getElementById('mainImage').src = color.image;
                
                // Update thumbnails if color has different images
                const firstThumb = document.querySelector('.thumbnail-item');
                if (firstThumb) {
                    firstThumb.src = color.image;
                }
            };
            
            colorContainerParent.appendChild(colorDiv);
        });

        // Update sizes dynamically
        const allSizes = ['XS', 'S', 'M', 'L', 'XL'];
        const sizeContainer = document.querySelector('.mb-4:has(.size-btn) .d-flex');
        sizeContainer.innerHTML = '';
        
        allSizes.forEach((size, index) => {
            const button = document.createElement('button');
            button.className = 'size-btn rounded';
            button.textContent = size;
            
            if (product.availableSizes && product.availableSizes.includes(size)) {
                button.onclick = function() { selectSize(this); };
                // Set first available size as active
                if (index === allSizes.indexOf(product.availableSizes[0])) {
                    button.classList.add('active');
                }
            } else {
                button.classList.add('disabled');
                button.disabled = true;
            }
            
            sizeContainer.appendChild(button);
        });

        // Update product details
        const detailsList = document.querySelector('#details .accordion-body ul');
        detailsList.innerHTML = `
            <li><strong>Material:</strong> ${product.material}</li>
            <li><strong>Style:</strong> ${product.style}</li>
            <li><strong>Fit:</strong> ${product.fit}</li>
            <li><strong>Care:</strong> Machine wash cold</li>
        `;
    }
});
    
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    
    // Add fade out effect
    mainImage.classList.add('changing');
    
    // Remove active class from all thumbnails
    document.querySelectorAll('.thumbnail-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Wait for fade out, then change image and fade in
    setTimeout(() => {
        mainImage.src = thumbnail.src;
        mainImage.classList.remove('changing');
    }, 250);
    
    // Smooth scroll thumbnail into view
    thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function selectSize(button) {
    // Remove active class from all size buttons
    document.querySelectorAll('.size-btn:not(.disabled)').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    button.classList.add('active');
}

function increaseQty() {
    const input = document.getElementById('quantity');
    const currentValue = parseInt(input.value);
    if (currentValue < parseInt(input.max)) {
        input.value = currentValue + 1;
        // Add small animation effect
        input.style.transform = 'scale(1.1)';
        setTimeout(() => {
            input.style.transform = 'scale(1)';
        }, 200);
    }
}

function decreaseQty() {
    const input = document.getElementById('quantity');
    const currentValue = parseInt(input.value);
    if (currentValue > parseInt(input.min)) {
        input.value = currentValue - 1;
        // Add small animation effect
        input.style.transform = 'scale(1.1)';
        setTimeout(() => {
            input.style.transform = 'scale(1)';
        }, 200);
    }
}

function nextImage() {
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const currentActive = document.querySelector('.thumbnail-item.active');
    let currentIndex = Array.from(thumbnails).indexOf(currentActive);
    
    // Move to next image, loop back to first if at the end
    currentIndex = (currentIndex + 1) % thumbnails.length;
    thumbnails[currentIndex].click();
}

function prevImage() {
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const currentActive = document.querySelector('.thumbnail-item.active');
    let currentIndex = Array.from(thumbnails).indexOf(currentActive);
    
    // Move to previous image, loop to last if at the beginning
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    thumbnails[currentIndex].click();
}

// Add to bag modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToBagBtn = document.getElementById('addToBagBtn');
    const imageModal = document.getElementById('imageModal');
    const closeModal = document.getElementById('closeModal');

    if (addToBagBtn && imageModal) {
        addToBagBtn.addEventListener('click', function() {
            imageModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', function() {
            imageModal.style.display = 'none';
        });

        // Close modal when clicking outside the image
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && imageModal.style.display === 'flex') {
                imageModal.style.display = 'none';
            }
        });
    }
});
