const $ = require('jquery');
const api = require('./utils/form-api');
const parsers = require('./utils/form-parsers');
const intTelInput = require('./utils/intl-tel-input');

let forms = [];

class Form {

  constructor(options) {
    this.options = options;
    this.cls = this.options.internalCls || 'js-ed-form';

    let formArray = document.querySelectorAll(`.${this.cls}`);

    if (this.options.phone) {
      intTelInput.default();
    }

    if (this.options.initFormCb) {
      this.options.initFormCb.map(function(cb) {
        cb();
      })
    }

    this.buttonListener = this.buttonListener.bind(this);

    for (var i = 0; i < formArray.length; i++) {
      this.setButtons(formArray[i]);
      this.setSuccessText(this.options.successSendText, formArray[i]);
    }
  }

  buttonListener (e) {
    e.preventDefault();

    this.setNextMethod(e);
  }

  setButtons (el) {
    this.buttons = el.querySelectorAll('.js-ed-form-button');

    for (let i=0; i < this.buttons.length; i++) {
      this.buttons[i].addEventListener('click', this.buttonListener, false);
    }
  }

  setNextMethod (e) {
    this.closestIEpolyfill(e.target);

    let form = e.target.closest(`.${this.cls}`) || document.querySelector(`.${this.cls}`);

    let data = parsers.default.getExternalData(this.options, form);

    if (this.options.preReadRegFormCb) return this.getTokenForApp(data, form);
    if (this.options.registration) return this.registration(parsers.default.getRegistrationData(data), form);
    if (this.options.internal) return this.readRegistration(data, form);

    return this.sendApplication(data, form);
  }

  registration (data, form) {
    let _this = this;

    api.default.apiRegistration(
      data,
      this.options.internal,
      this.options.partnerTags,
      this.options.loadCb,
      function(result, response) {
        if (result) {
          if (_this.options.successRegSendCb) {
            _this.options.successRegSendCb.map(function(cb) {
              cb(response);
            })
          }

          return _this.afterSuccessRegistration(data, form)
        }

        return parsers.default.afterErrorSend(response, form, function(error, type, form) {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(response);
          }

          return _this.showErrors(error, type, form);
        });
      });
  }

  getTokenForApp (data, form) {
    let loginData = this.options.preReadRegFormCb();
    let _this = this;

    if (loginData) return this.sendApplication(data, form, loginData);

    api.default.apiGetToken(data,
      this.options.internal,
      this.options.partnerTags,
      this.options.loadCb,
      function(apiData) {
        if (apiData.result) {
          let token = apiData.response.meta.token;

          if (_this.options.successRegSendCb) {
            _this.options.successRegSendCb.map(function(cb) {
              cb(apiData.response);
            })
          }

          if (!_this.options.registration) {
            return _this.sendApplication(data, form, token);
            
          }
        } else {
          return parsers.default.afterErrorSend(apiData.response, form, function(error, type, form) {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(apiData.response);
            }

            return _this.showErrors(error, type, form);
          });

        }
      });
  }

  readRegistration (data, form) {
    let _this = this;

    api.default.apiReadRegistration(data,
      this.options.internal,
      this.options.partnerTags,
      this.options.loadCb,
      function(apiData) {
        if (apiData.sendApp) {
          let token = apiData.response.meta.token;

          if (apiData.result || !_this.options.internal) {
            if (_this.options.successRegSendCb) {
              _this.options.successRegSendCb.map(function(cb) {
                cb(apiData.response);
              })
            }

            return _this.sendApplication(data, form, token);

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

            _this.sendApplication(data, form, token);

            return parsers.default.afterErrorSend(errorResponse, form, function(error, type, form) {
              if (_this.options.errorRegSendCb) {
                _this.options.errorRegSendCb(errorResponse);
              }

              return _this.showErrors(error, type, form);
            });

          }

        } else {
          return parsers.default.afterErrorSend(apiData.response, form, function(error, type, form) {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(apiData.response);
            }

            return _this.showErrors(error, type, form);
          });

        }
      });
  }

  sendApplication (data, form, token) {
    let _this = this;

    api.default.apiSendApplication(data, this.options.internal, this.options.partnerTags, token, this.options.loadCb, function(result, response) {
      if (result) {
        if (_this.options.successAppSendCb) {
          _this.options.successAppSendCb.map(function(cb) {
            cb(response);
          })
        }

        return _this.afterSuccessSend(response, form);
      }

      return parsers.default.afterErrorSend(response, form, function(error, type, form) {
        if (_this.options.errorRegSendCb) {
          _this.options.errorRegSendCb(response);
        }

        return _this.showErrors(error, type, form);
      });
    });
  }

  toRedirect () {
    if (this.options.redirectToEd) {
      setTimeout(function() {
        window.location = 'https://englishdom.com/home/user/login';
      }, 4000);
    }
  }

  afterSuccessRegistration (data, form) {
    this.afterSuccessSend(data, form);
  }

  afterSuccessSend (response, form) {
    this.hideErrors(form);

    let successSendBlock = document.querySelector('.js-success-send-ed-form');

    if (!form.classList.contains('is-success')) {
      form.classList.add('is-success');
    }

    if (successSendBlock && !successSendBlock.classList.contains('is-success')) {
      successSendBlock.classList.add('is-success');
    }

    this.toRedirect(response);
  }

  setSuccessText (text, el) {
    let successSendBlock = el.querySelector('.js-success-send-ed-form');

    if (successSendBlock && text) {
      successSendBlock.innerHTML = text;
    }
  }

  showErrors (errors, parent) {
    this.hideErrors(parent);

    errors.forEach((error) => {
      let errorInput = parent.querySelector('.js-' + error.name);

      if (errorInput && !errorInput.classList.contains('is-error')) {
        errorInput.classList.add('is-error');
      }
  
      let errorField = parent.querySelector('.js-error-' + error.name);
  
      if (errorField && !errorField.classList.contains('is-error')) {
        errorField.classList.add('is-error');
      }
  
      if (errorField) errorField.innerHTML = error.text;
    })    
  }

  hideErrors (form) {
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

  closestIEpolyfill (Element) {
    if (!Element.__proto__.closest) {

      Element.__proto__.closest = function(css) {
        let node = this;

        while (node) {
          node.matches = node.matches || node.webkitMatchesSelector || node.msMatchesSelector || node.mozMatchesSelector;

          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  }

  close () {
    for (var i = 0; i < this.buttons.length; i++) {
      this.buttons[i].removeEventListener('click', this.buttonListener, false);
    }
  }

}

function init (options) {
  let form = new Form(options);

  forms.push(form);

  return form;
}

function uninit () {
  for (let i = 0; i < forms.length; i++) {
    forms[i].close();
  }
}

module.exports = { init: init, uninit: uninit };

window.logicInit = init;
window.logicUninit = uninit;