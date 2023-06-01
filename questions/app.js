const questions = document.querySelectorAll('.question');
console.log(questions)

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    console.log(btn)

    btn.addEventListener('click', () => {
        console.log(question)

        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }

        });

        question.classList.toggle('show-text');
    });
})

