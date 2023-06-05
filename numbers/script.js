const span = [...document.querySelectorAll('.number')];

const updateCount = (el) => {

    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;

    // for (let i = 0; i < span.length; i++) {
    //     const element = span[i].dataset.value;
    //     console.log(element)
    // }
    
    // const increment = Math.ceil(value / 1000);
    // return increment;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }

        el.textContent = `${initialValue}`;
    }, 1);
    console.log(increaseCount)
    
};

span.forEach((item) => {
    updateCount(item);
});