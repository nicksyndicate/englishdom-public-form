import $ from 'jquery';
import api from '../utils/form-api';
import parsers from '../utils/form-parsers';
import intTelInput from '../utils/intl-tel-input';

import '../vendor/babel-polyfill/dist/polyfill';

function init(opt) {
  if (opt.phone) {
    intTelInput();
  }

  setButtons(opt);
  setScuccessText(opt.successSendText);
}

function setButtons(opt) {
  let buttons = document.querySelectorAll('.js-ed-form-button');

  for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      e.preventDefault();

      setNextMethod(opt, e);
    });
  }
}

function setNextMethod(opt, e) {
  let form = e.target.closest('.js-ed-form');
  let data = parsers.getExternalData(opt, form);

  if (opt.registration) return registration(parsers.getRegistrationData(data), form);
  if (opt.internal) return readRegistration(data, form);

  return sendApplication(data, form);
}

function registration(data, form) {
  api.apiRegistration(data, function(result, response) {
    if (result) afterSuccessRegistration(data, form);

    return parsers.afterErrorSend(response, form, function(error, type, form) {
      return showErrors(error, type, form);
    });
  });
}

function readRegistration(data, form) {
  api.apiReadRegistration(data, function(result, response) {
    if (result) sendApplication(data, form);

    return parsers.afterErrorSend(response, form, function(error, type, form) {
      return showErrors(error, type, form);
    });
  });
}

function sendApplication(data, form) {
  api.apiSendApplication(data, function(result, response) {
    if (result) afterSuccessSend(response, form);

    return parsers.afterErrorSend(response, form, function(error, type, form) {
      return showErrors(error, type, form);
    });
  });
}

function afterSuccessRegistration(response) {
  // redirect ?
}

function afterSuccessSend(response, form) {
  hideErrors(form);

  let successSendBlock = document.querySelector('.js-success-send-ed-form');

  if (!form.classList.contains('is-success')) {
    form.classList.add('is-success');
  }

  if (!successSendBlock.classList.contains('is-success')) {
    successSendBlock.classList.add('is-success');
  }
}

function setScuccessText(text) {
  let successSendBlock = document.querySelector('.js-success-send-ed-form');

  successSendBlock.innerHTML = text;
}

function showErrors(name, text, parent) {
  hideErrors(parent);

  let errorField = parent.querySelector('.js-error-' + name);

  if (!errorField.classList.contains('is-error')) {
    errorField.classList.add('is-error');
  }

  errorField.innerHTML = text;
}

function hideErrors(form) {
  let errors = form.querySelectorAll('.js-error-field');

  for (let i=0; i < errors.length; i++) {
    errors[i].classList.remove('is-error');
    errors[i].innerHTML = '';
  }
}

export default init;