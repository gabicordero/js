const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    console.log(value)

    if (!value) {
        resultsDOM.innerHTML =
            `<div class="error">please enter valid search term</div>`;
        return;
    }

    fetchPages(value);
})

const fetchPages = async (searchValue) => {

    resultsDOM.innerHTML = `<div class="loading"></div>`;
    try {
        const response = await fetch(`${url}${searchValue}`);
        const data = await response.json();
        console.log("Objeto json", data)
        const results = data.query.search;
        if (results.length < 1) {
            resultsDOM.innerHTML = 
            `<div class="error">no matching results. Please try again</div>`;
            return;
        }
        renderResults(results);
    } catch (error) {
        resultsDOM.innerHTML = `<div class="error">there was an error...</div>`
    }
};

const renderResults = (list) => {
    const cardsList = list
    .map((item) => {
        const { title, snippet, pageid } = item;
        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>${snippet}</p>
        </a>`;
    })
    .join('');
    resultsDOM.innerHTML = `<div class="articles">${cardsList}</div>`;
};