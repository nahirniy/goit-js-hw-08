import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email: userEmail, message: userMessage } = form.elements;
const userDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

userEmail.value = userDate.email ?? '';
userMessage.value = userDate.message ?? '';
console.log(userDate);

function onSubmit(e) {
  e.preventDefault();
  console.log(userDate);
  form.reset();
}

function onInput() {
  const userDate = {
    email: userEmail.value,
    message: userMessage.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userDate));
}

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
