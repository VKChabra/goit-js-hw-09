import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputFormData: document.querySelector('.form'),
}

const {inputFormData} = refs;

// inputFormData = document.querySelector('.form');

inputFormData.addEventListener('submit', createPromises);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

function createPromises(e) {
  e.preventDefault();

  let step = Number(e.currentTarget.step.value);
  let delay = Number(e.currentTarget.delay.value);
  let amount = Number(e.currentTarget.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(console.log('✅ Fulfilled promise'))
      .catch(console.log('❌ Rejected promise'));
    delay += step;
  }
}