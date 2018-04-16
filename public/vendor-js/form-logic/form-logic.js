const $ = require('jquery');
const api = require('./utils/form-api');
const parsers = require('./utils/form-parsers');
const intTelInput = require('./utils/intl-tel-input');

function init(opt) {
  if (opt.phone) {
    intTelInput.default();
  }

  setButtons(opt);
  setSuccessText(opt.successSendText);
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
  let data = parsers.default.getExternalData(opt, form);

  if (opt.registration) return registration(parsers.default.getRegistrationData(data), form);
  if (opt.internal) return readRegistration(data, form);

  return sendApplication(data, form);
}

function registration(data, form) {
  api.default.apiRegistration(data, function(result, response) {
    if (result) afterSuccessRegistration(data, form);

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
      return showErrors(error, type, form);
    });
  });
}

function readRegistration(data, form) {
  api.default.apiReadRegistration(data, function(result, response) {
    if (result) sendApplication(data, form);

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
      return showErrors(error, type, form);
    });
  });
}

function sendApplication(data, form) {
  api.default.apiSendApplication(data, function(result, response) {
    if (result) afterSuccessSend(response, form);

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
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

function setSuccessText(text) {
  let successSendBlock = document.querySelector('.js-success-send-ed-form');

  if (successSendBlock) {
    successSendBlock.innerHTML = text;
  }  
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

module.exports = init;
window.logic = init;