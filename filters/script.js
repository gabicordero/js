// import { products } from "./products.js";
const products = [
    {
        id: 'rec43w3ipXvP28vog',
        title: 'high-back bench',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-1.jpeg',
        price: 9.99,
    },
    {
        id: 'rec4f2RIftFCb7aHh',
        title: 'albany table',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-2.jpeg',
        price: 79.99,
    },
    {
        id: 'rec8kkCmSiMkbkiko',
        title: 'accent chair',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-3.jpeg',
        price: 25.99,
    },
    {
        id: 'recBohCqQsot4Q4II',
        title: 'wooden table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-4.jpeg',

        price: 45.99,
    },
    {
        id: 'recDG1JRZnbpRHpoy',
        title: 'dining table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-5.jpeg',

        price: 6.99,
    },
    {
        id: 'recNWGyP7kjFhSqw3',
        title: 'sofa set',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-6.jpeg',
        price: 69.99,
    },
    {
        id: 'recZEougL5bbY4AEx',
        title: 'modern bookshelf',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-7.jpeg',
        price: 8.99,
    },
    {
        id: 'recjMK1jgTb2ld7sv',
        title: 'emperor bed',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-8.jpeg',
        price: 21.99,
    },
    {
        id: 'recmg2a1ctaEJNZhu',
        title: 'utopia sofa',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-9.jpeg',
        price: 39.95,
    },
    {
        id: 'recvKMNR3YFw0bEt3',
        title: 'entertainment center',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-10.jpeg',
        price: 29.98,
    },
    {
        id: 'recxaXFy5IW539sgM',
        title: 'albany sectional',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-11.jpeg',
        price: 10.99,
    },
    {
        id: 'recyqtRglGNGtO4Q5',
        title: 'leather sofa',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-12.jpeg',
        price: 9.99,
    },
];

// import { products } from "./products";


// let productos = products;
// console.log(producto)
let productos = [...products];

const productsContainer = document.querySelector('.products-container');
// companies.addEventListener('click', (e) => {
//     e.target;
// })

const displayProducts = () => {
    if (productos.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
        return;
    }

    productsContainer.innerHTML = productos
    .map((product) => {
        const { id, title, company, image, price} = product;
        return `<article class="product" data-id="${id}">
        <img src="${image}" alt="" class="product-img img">
        <footer>
            <h5 class="product-name">${title}</h5>
            <p>${company}</p>
            <span class="product-price">${price}</span>
        </footer>
    </article>`;
    })
    .join('');
    console.log(productsContainer)
    // productos.forEach((producto) => {
    //     productsContainer.innerHTML += `<article class="product">
    //     <img src=${producto.image} alt="" class="product-img img">
    //     <footer>
    //         <h5 class="product-name">${producto.title}</h5>
    //         <span class="product-price">${producto.price}</span>
    //     </footer>
    // </article>`;
    // })
    // console.log(productsContainer)
    // .join('');
};

displayProducts();

const form = document.querySelector('.input-form');
const input = document.querySelector('.search-input');


form.addEventListener('keyup', () => {
    const inputValue = input.value;
    console.log(inputValue)
    productos = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
});

// const displayButtons = () => {
//     const uniqueCompanies = [...new Set(productos[producto[company]])]
//     console.log(uniqueCompanies)
// }
// displayButtons()

const companies = document.querySelector('.companies');

const displayButtons = () => {
    const buttons = [
        'all',
        ...new Set(products.map((product) => product.company))
    ];
    console.log(buttons)

    companies.innerHTML = buttons
    .map((company) => { 
        return `<button class='company-btn' data-id=${company}>${company}</button>`;
    })
    .join('');
    console.log(companies)
};

displayButtons();

companies.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('company-btn')){
        if(el.dataset.id === 'all'){
            productos = [...products];
        } else {
            productos = products.filter((product) => {
                return product.company === el.dataset.id;
            });
        }
        input.value = '';
        displayProducts();
    }
});