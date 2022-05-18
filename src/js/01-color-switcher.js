// Напиши скрипт, який після натискання кнопки «Start», раз на секунду 
// змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn = document.querySelector('button[data-start]');
stopBtn = document.querySelector('button[data-stop]');
// settimeout 1000 body color
const body = document.body;

function changeBodyColor() {
    body.style.backgroundColor = getRandomHexColor();
}

const startChangingBgColors = () => {
    bgChangeInterval = setInterval(() => {
        changeBodyColor()
    }, 1000);
    startBtn.disabled = true;
};

const stopChangingBgColors = () => {
    clearInterval(bgChangeInterval);
    body.style.backgroundColor = '';
    startBtn.disabled = false;
};

startBtn.addEventListener('click', startChangingBgColors)
stopBtn.addEventListener('click', stopChangingBgColors)