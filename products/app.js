const productCenter = document.querySelector('.products-center');

const url = 'https://course-api.com/javascript-store-products';

// const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//     fetchDadJoke();
// });

const fetchProducts = async () => {
    productCenter.innerHTML = '<div class="loading"></div>';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        productCenter.innerHTML = '<p class="error">there was an error</p>';
    }
};

// fetchProducts();

const displayProducts = (list) => {
    const productList = list
        .map((product) => {
            const { id } = product;
            const { name: title, price } = product.fields;
            const { url: img } = product.fields.image[0];
            const formatPrice = price / 100;

            return `<a href="product.html?id=${id}&name=john&age=25" class="single-product">
        <img src="${img}" alt="${title}" class="single-product-img img">
        <footer>
            <h5 class="name">${title}</h5>
            <span class="price>${formatPrice}</span>
        </footer>
        </a>`;
        })
        .join('');
        productCenter.innerHTML = `<div class="products-container">${productList}</div>`
}

const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
}

start();