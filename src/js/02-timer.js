import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
// input[type="text"]

// Другим аргументом функції flatpickr(selector, options) можна передати 
// необов'язковий об'єкт параметрів. Ми підготували для тебе об'єкт, який потрібен 
// для виконання завдання. Розберися, за що відповідає кожна властивість в 
// документації «Options», і використовуй його у своєму коді.
// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         console.log(selectedDates[0]);
//     },
// };
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, 
// скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, 
// показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.
// Кількість днів може складатися з більше, ніж двох цифр.
// Напиши функцію addLeadingZero(value), яка використовує метод padStart() 
// і перед рендерингом інтефрейсу форматує значення.
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}