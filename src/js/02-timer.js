import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import {Notify} from 'notiflix';

const refs = {
    dateInput: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    timerDays: document.querySelector('.value[data-days]'),
    timerHours: document.querySelector('.value[data-hours]'),
    timerMinutes: document.querySelector('.value[data-minutes]'),
    timerSeconds: document.querySelector('.value[data-seconds]'),
};

const {dateInput,startBtn,timerDays, timerHours, timerMinutes, timerSeconds} = refs;

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            startBtn.disabled = true;
            return Notify.failure("Please choose a date in the future");
        };
        enableBtn();
        
        function startTimer () {
            const dateUpdate = setInterval(() => {
                const convert = convertMs(selectedDates[0] - Date.now())
                const { days, hours, minutes, seconds } = convert;

                timerDays.textContent = addLeadingZero(days);
                timerHours.textContent = addLeadingZero(hours);
                timerMinutes.textContent = addLeadingZero(minutes);
                timerSeconds.textContent = addLeadingZero(seconds);

                if (selectedDates[0] - Date.now() < 999) {
                    clearInterval(dateUpdate);
                };
                if(selectedDates[0] - Date.now() < 100) {
                    Notify.success('Time is up')
                }
            }, 1000);
        };

        startBtn.addEventListener('click', startTimer)
        startBtn.addEventListener('click', notificationStart)
    },
};

function enableBtn() {
    startBtn.disabled = false;
    startBtn.style.borderColor = 'green';
}

function notificationStart() {
    Notify.success('Timer started')
}

flatpickr(dateInput, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
