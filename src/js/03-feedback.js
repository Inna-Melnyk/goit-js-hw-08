

import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

const KEY_FEEDBACK = 'feedback-form-state';
let currentObj = JSON.parse(localStorage.getItem(KEY_FEEDBACK)) || {
  email: '',
  message: '',
};

feedbackFormEl.elements.email.value = currentObj.email;
feedbackFormEl.elements.message.value = currentObj.message;

feedbackFormEl.addEventListener('input', throttle(onInput, 500));
feedbackFormEl.addEventListener('submit', throttle(onSubmit, 500));

function onInput(evt) {
  if (evt.target.name === 'email') {
    feedbackFormEl.elements.email.value = evt.target.value;
  } else if (evt.target.name === 'message') {
    feedbackFormEl.elements.message.value = evt.target.value;
  }
  const feedbackObj = {
    email: feedbackFormEl.elements.email.value,
    message: feedbackFormEl.elements.message.value,
  };

  localStorage.setItem(KEY_FEEDBACK, JSON.stringify(feedbackObj));
}

function onSubmit(evt) {
  evt.preventDefault();

  if (
    feedbackFormEl.elements.email.value &&
    feedbackFormEl.elements.message.value
  ) {
    localStorage.removeItem(KEY_FEEDBACK);

    const feedbackObj = {
      email: feedbackFormEl.elements.email.value,
      message: feedbackFormEl.elements.message.value,
    };

    feedbackFormEl.elements.email.value = '';
    feedbackFormEl.elements.message.value = '';

    return console.log(feedbackObj);
  }
}

