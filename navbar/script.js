const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

btn.addEventListener('click', () => {
    links.classList.toggle('show-links')
    
})