const btns = document.querySelectorAll('.btn');
const scores = document.querySelectorAll('.score p');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const value = parseInt(btn.getAttribute('data-value'));
        if (index < 3) {
            // Эти кнопки относятся к счету HOME
            const score = scores[0];
            const currentScore = parseInt(score.textContent);
            score.textContent = currentScore + value;
        } else {
            // Эти кнопки относятся к счету GUEST
            const score = scores[1];
            const currentScore = parseInt(score.textContent);
            score.textContent = currentScore + value;
        }
    });
});



/*const btns = document.querySelectorAll('.btn');
const scores = document.querySelectorAll('.score p');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const value = parseInt(btn.getAttribute('data-value'));
        const score = scores[index];
        const currentScore = parseInt(score.textContent);
        score.textContent = currentScore + value;
    });
});


/*const score = document.querySelector('.score')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

const guest = document.querySelector('.guest')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')

let count = 0
btn1.addEventListener('click', () => {
    count = count + 1
    console.log(count)
    score.textContent = count
})

btn2.addEventListener('click', () => {
    count = count + 2
    console.log(count)
    score.textContent = count
})

btn3.addEventListener('click', () => {
    count = count + 3
    console.log(count)
    score.textContent = count
})

let sum = 0
btn4.addEventListener('click', () => {
    sum = sum + 1
    console.log(sum)
    guest.textContent = sum
})

btn5.addEventListener('click', () => {
    sum = sum + 2
    console.log(sum)
    guest.textContent = sum
})

btn6.addEventListener('click', () => {
    sum = sum + 3
    console.log(sum)
    guest.textContent = sum
}) 

const btnGroups = document.querySelectorAll('.btn-group');

btnGroups.forEach(btnGroup => {
    const buttons = btnGroup.querySelectorAll('.btn');
    const score = btnGroup.previousElementSibling.querySelector('.score p');
    let count = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            count += parseInt(button.getAttribute('data-value'));
            score.textContent = count;
        });
    });
});*/