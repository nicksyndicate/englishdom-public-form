const $ = require('jquery');
const api = require('./utils/form-api');
const parsers = require('./utils/form-parsers');
const intTelInput = require('./utils/intl-tel-input');

let opt = {};

function init(options) {
  opt = options;

  if (opt.phone) {
    intTelInput.default();
  }

  setButtons();
  setSuccessText(opt.successSendText);
}

function uninit() {
  let buttons = document.querySelectorAll('.js-ed-form-button');

  for (let i=0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', buttonListener, false);
  }
}

function buttonListener(e) {
  e.preventDefault();

  setNextMethod(e);
}

function setButtons() {
  let buttons = document.querySelectorAll('.js-ed-form-button');

  for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonListener, false);
  }
}

function setNextMethod(e) {
  let form = closestPolyfill(e);
  let data = parsers.default.getExternalData(opt, form);

  if (opt.registration) return registration(parsers.default.getRegistrationData(data), form);
  if (opt.internal) return readRegistration(data, form);

  return sendApplication(data, form);
}

function closestPolyfill(e) {
  if (!e.target.__proto__.closest) {
    e.target.__proto__.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches && node.matches(css)) return node;
        else if (node.msMatchesSelector && node.msMatchesSelector(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

  return e.target.closest('.js-ed-form') || document.querySelector('.js-ed-form');
}

function registration(data, form) {
  api.default.apiRegistration(data, function(result, response) {
    if (result) {
      if (opt.successRegSendCb) {
        opt.successRegSendCb.map(function(cb) {
          cb(response);
        })
      }

      return afterSuccessRegistration(data, form)
    }

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
      if (opt.errorRegSendCb) {
        opt.errorRegSendCb(response);
      }

      return showErrors(error, type, form);
    });
  });
}

function readRegistration(data, form) {
  api.default.apiReadRegistration(data, function(result, response) {
    if (result) {
      if (opt.successRegSendCb) {
        opt.successRegSendCb.map(function(cb) {
          cb(response);
        })
      }

      return sendApplication(data, form);
    }

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
      if (opt.errorRegSendCb) {
        opt.errorRegSendCb(response);
      }

      return showErrors(error, type, form);
    });
  });
}

function sendApplication(data, form) {
  api.default.apiSendApplication(data, function(result, response) {
    if (result) {
      if (opt.successAppSendCb) {
        opt.successAppSendCb(response);
      }

      return afterSuccessSend(response, form);
    }

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
      if (opt.errorRegSendCb) {
        opt.errorRegSendCb(response);
      }
      
      return showErrors(error, type, form);
    });
  });
}

function toRedirect(response) {
  if (opt.redirectToEd) {
    setTimeout(function() {
      window.location = 'https://englishdom.com/home/user/login';
    }, 4000);
  }
}

function afterSuccessRegistration(data, form) {
  afterSuccessSend(data, form);
}

function afterSuccessSend(response, form) {
  hideErrors(form);

  let successSendBlock = document.querySelector('.js-success-send-ed-form');

  if (!form.classList.contains('is-success')) {
    form.classList.add('is-success');
  }

  if (successSendBlock && !successSendBlock.classList.contains('is-success')) {
    successSendBlock.classList.add('is-success');
  }

  toRedirect(response);
}

function setSuccessText(text) {
  let successSendBlock = document.querySelector('.js-success-send-ed-form');

  if (successSendBlock) {
    successSendBlock.innerHTML = text;
  }  
}

function showErrors(name, text, parent) {
  hideErrors(parent);

  if (parent && !parent.classList.contains('is-error')) {
    parent.classList.add('is-error');
  }
  
  let errorField = parent.querySelector('.js-error-' + name);

  if (errorField && !errorField.classList.contains('is-error')) {
    errorField.classList.add('is-error');
  }

  errorField.innerHTML = text;
}

function hideErrors(form) {
  form.classList.remove('is-error');

  let errors = form.querySelectorAll('.js-error-field');

  for (let i=0; i < errors.length; i++) {
    errors[i].classList.remove('is-error');
    errors[i].innerHTML = '';
  }
}

module.exports = { init: init, uninit: uninit };

window.logicInit = init;
window.logicUninit = uninit;