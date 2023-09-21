import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email: userEmail, message: userMessage } = form.elements;
const userDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};

userEmail.value = userDate.email ?? '';
userMessage.value = userDate.message ?? '';

function onSubmit(e) {
  e.preventDefault();

  if (userEmail.value && userMessage.value) {
    console.log(userDate);

    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
  } else {
    alert('All fields must be filled');
  }
}

function onInput() {
  userDate.email = userEmail.value;
  userDate.message = userMessage.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userDate));
}

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
