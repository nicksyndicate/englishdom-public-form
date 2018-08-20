const $ = require('jquery');
const api = require('./utils/form-api');
const parsers = require('./utils/form-parsers');
const intTelInput = require('./utils/intl-tel-input');

let opt = {};
let currentOpt = {};

function init(options) {
  opt[options.key] = options;

  if (options.phone) {
    intTelInput.default();
  }

  if (options.initFormCb) {
    options.initFormCb.map(function(cb) {
      cb();
    })
  }

  setButtons();
  setSuccessText(options.successSendText);
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
  closestIEpolyfill(e.target);

  let form = e.target.closest('.js-ed-form') || document.querySelector('.js-ed-form');
  let key = form.getAttribute('data-key');

  currentOpt = opt[key];
  let data = parsers.default.getExternalData(currentOpt, form);

  if (currentOpt.preReadRegFormCb) return getTokenForApp(data, form);
  if (currentOpt.registration) return registration(parsers.default.getRegistrationData(data), form);
  if (currentOpt.internal) return readRegistration(data, form);

  return sendApplication(data, form);
}

function registration(data, form) {
  api.default.apiRegistration(data, currentOpt.internal, currentOpt.partnerTags, currentOpt.loadCb, function(result, response) {
    if (result) {
      if (currentOpt.successRegSendCb) {
        currentOpt.successRegSendCb.map(function(cb) {
          cb(response);
        })
      }

      return afterSuccessRegistration(data, form)
    }

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
      if (currentOpt.errorRegSendCb) {
        currentOpt.errorRegSendCb(response);
      }

      return showErrors(error, type, form);
    });
  });
}

function getTokenForApp(data, form) {
  let loginData = currentOpt.preReadRegFormCb();

  if (loginData) return sendApplication(data, form, loginData);

  api.default.apiGetToken(data, currentOpt.internal, currentOpt.partnerTags, currentOpt.loadCb, function(apiData) {
    if (apiData.result) {
      let token = apiData.response.meta.token;

      if (currentOpt.successRegSendCb) {
        currentOpt.successRegSendCb.map(function(cb) {
          cb(apiData.response);
        })
      }

      return sendApplication(data, form, token);

    } else {
      return parsers.default.afterErrorSend(apiData.response, form, function(error, type, form) {
        if (currentOpt.errorRegSendCb) {
          currentOpt.errorRegSendCb(apiData.response);
        }
  
        return showErrors(error, type, form);
      });

    }    
  });
}

function readRegistration(data, form) {
  api.default.apiReadRegistration(data, currentOpt.internal, currentOpt.partnerTags, currentOpt.loadCb, function(apiData) {
    if (apiData.sendApp) {
      let token = apiData.response.meta.token;

      if (apiData.result || !currentOpt.internal) {
        if (currentOpt.successRegSendCb) {
          currentOpt.successRegSendCb.map(function(cb) {
            cb(apiData.response);
          })
        }

        return sendApplication(data, form, token);

      } else {
        let errorResponse = {
          responseJSON: {
            errors: {
              detail: {
                email: {
                  recordFound: "Ваш email уже зарегистрирован"
                }
              }
            }            
          }
        };

        sendApplication(data, form, token);

        return parsers.default.afterErrorSend(errorResponse, form, function(error, type, form) {
          if (currentOpt.errorRegSendCb) {
            currentOpt.errorRegSendCb(errorResponse);
          }
    
          return showErrors(error, type, form);
        });

      }

    } else {
      return parsers.default.afterErrorSend(apiData.response, form, function(error, type, form) {
        if (currentOpt.errorRegSendCb) {
          currentOpt.errorRegSendCb(apiData.response);
        }
  
        return showErrors(error, type, form);
      });

    }    
  });
}

function sendApplication(data, form, token) {
  api.default.apiSendApplication(data, currentOpt.internal, currentOpt.partnerTags, token, currentOpt.loadCb, function(result, response) {
    if (result) {
      if (currentOpt.successAppSendCb) {
        currentOpt.successAppSendCb.map(function(cb) {
          cb(response);
        })
      }

      return afterSuccessSend(response, form);
    }

    return parsers.default.afterErrorSend(response, form, function(error, type, form) {
      if (currentOpt.errorRegSendCb) {
        currentOpt.errorRegSendCb(response);
      }
      
      return showErrors(error, type, form);
    });
  });
}

function toRedirect(response) {
  if (currentOpt.redirectToEd) {
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

  let errorInput = parent.querySelector('.js-' + name);

  if (errorInput && !errorInput.classList.contains('is-error')) {
    errorInput.classList.add('is-error');
  }

  let errorField = parent.querySelector('.js-error-' + name);

  if (errorField && !errorField.classList.contains('is-error')) {
    errorField.classList.add('is-error');
  }

  if (errorField) errorField.innerHTML = text;
}

function hideErrors(form) {
  let inputs = form.querySelectorAll('input');  

  for (let i=0; i < inputs.length; i++) {
    inputs[i].classList.remove('is-error');
  }

  let errors = form.querySelectorAll('.js-error-field');

  for (let i=0; i < errors.length; i++) {
    errors[i].classList.remove('is-error');
    errors[i].innerHTML = '';
  }
}

function closestIEpolyfill(Element) {
  if (!Element.__proto__.closest) {

    Element.__proto__.closest = function(css) {
      var node = this;

      while (node) {
        node.matches = node.matches || node.webkitMatchesSelector || node.msMatchesSelector || node.mozMatchesSelector;

        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
}

module.exports = { init: init, uninit: uninit };

window.logicInit = init;
window.logicUninit = uninit;