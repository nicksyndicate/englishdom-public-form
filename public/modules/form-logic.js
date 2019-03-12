const $ = require('jquery');
const api = require('./utils/form-api');
const parsers = require('./utils/form-parsers');
const intTelInput = require('./utils/intl-tel-input');

let formInstances = [];

class Form {
  constructor(options) {
    this.options = options;
    this.form = options.formEl;

    if (this.options.phone) {
      this.$iti = intTelInput.default();
      if (this.form) this.setPhoneBlurEvent(this.form);
    }

    if (this.options.initFormCb) {
      this.options.initFormCb.map((cb) => {
        cb();
      });
    }

    this.buttonListener = this.buttonListener.bind(this);

    if (this.form) this.setButtons(this.form);
    if (this.form) this.setSuccessText(this.options.successSendText, this.form);
  }

  buttonListener(e) {
    e.preventDefault();

    this.setNextMethod(e);
  }

  setButtons(el) {
    this.button = el.querySelector('.js-ed-form-button');

    this.button.addEventListener('click', this.buttonListener, false);
  }

  setPhoneBlurEvent(el) {
    this.inputPhone = el.querySelector('.js-ed-form-tel-number');

    this.inputPhone.addEventListener('blur', this.blurPhoneEvent.bind(this), false);
  }

  blurPhoneEvent(event) {
    event.preventDefault();

    this.checkValidity();
  }

  checkValidity() {
    const errorMap = [
      'Неправильный номер',
      'Такого кода страны не существует',
      'Номер слишком короткий',
      'Номер слишком длинный',
      'Неправильный номер',
    ];

    if (this.$iti) {
      this.hideErrors(this.form);

      // reset block btn
      this.button.classList.remove('is-disabled');

      if (!this.$iti.intlTelInput('isValidNumber')) {
        this.showErrors(
          [{
            text: errorMap[this.$iti.intlTelInput('getValidationError')],
            name: 'phone',
          }],
          this.form,
        );

        // block btn
        this.button.classList.add('is-disabled');
      }
    }
  }

  setNextMethod(e) {
    this.closestIEpolyfill(e.target);

    const data = parsers.default.getExternalData(this.options, this.form);

    if (this.options.preReadRegFormCb) return this.getTokenForApp(data, this.form);
    if (this.options.registration) {
      return this.registration(parsers.default.getRegistrationData(data), this.form);
    }
    if (this.options.internal) return this.readRegistration(data, this.form);

    if (e.target.classList.contains('is-disabled')) {
      return this.sendApplication(data, this.form);
    }
  }

  registration(data, form) {
    const _this = this;

    api.default.apiRegistration(
      data,
      this.options.internal,
      this.options.partnerTags,
      this.options.loadCb,
      (result, response) => {
        if (result) {
          if (_this.options.successRegSendCb) {
            _this.options.successRegSendCb.map((cb) => {
              cb(response);
            });
          }

          return _this.afterSuccessRegistration(data, form);
        }

        return parsers.default.afterErrorSend(response, form, (error, type, form) => {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(response);
          }

          return _this.showErrors(error, type, form);
        });
      },
    );
  }

  getTokenForApp(data, form) {
    const loginData = this.options.preReadRegFormCb();
    const _this = this;

    if (loginData) return this.sendApplication(data, form, loginData);

    api.default.apiGetToken(data,
      this.options.internal,
      this.options.partnerTags,
      this.options.loadCb,
      (apiData) => {
        if (apiData.result) {
          const token = apiData.response.meta.token;

          if (_this.options.successRegSendCb) {
            _this.options.successRegSendCb.map((cb) => {
              cb(apiData.response);
            });
          }

          if (!_this.options.registration) {
            return _this.sendApplication(data, form, token);
          }
        } else {
          return parsers.default.afterErrorSend(apiData.response, form, (error, type, form) => {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(apiData.response);
            }

            return _this.showErrors(error, type, form);
          });
        }
      });
  }

  readRegistration(data, form) {
    const _this = this;

    api.default.apiReadRegistration(data,
      this.options.internal,
      this.options.partnerTags,
      this.options.loadCb,
      (apiData) => {
        if (apiData.sendApp) {
          const token = apiData.response.meta.token;

          if (apiData.result || !_this.options.internal) {
            if (_this.options.successRegSendCb) {
              _this.options.successRegSendCb.map((cb) => {
                cb(apiData.response);
              });
            }

            return _this.sendApplication(data, form, token);
          }
          const errorResponse = {
            responseJSON: {
              errors: {
                detail: {
                  email: {
                    recordFound: 'Ваш email уже зарегистрирован',
                  },
                },
              },
            },
          };

          _this.sendApplication(data, form, token);

          return parsers.default.afterErrorSend(errorResponse, form, (error, type, form) => {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(errorResponse);
            }

            return _this.showErrors(error, type, form);
          });
        }
        return parsers.default.afterErrorSend(apiData.response, form, (error, type, form) => {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(apiData.response);
          }

          return _this.showErrors(error, type, form);
        });
      });
  }

  sendApplication(data, form, token) {
    const _this = this;

    api.default.apiSendApplication(
      data,
      this.options.internal,
      this.options.partnerTags,
      token,
      this.options.loadCb,
      (result, response) => {
        if (result) {
          if (_this.options.successAppSendCb) {
            _this.options.successAppSendCb.map((cb) => {
              cb(response);
            });
          }

          return _this.afterSuccessSend(response, form);
        }

        return parsers.default.afterErrorSend(response, form, (error, type, form) => {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(response);
          }

          return _this.showErrors(error, type, form);
        });
      },
    );
  }

  toRedirect() {
    if (this.options.redirectToEd) {
      setTimeout(() => {
        window.location = 'https://englishdom.com/home/user/login';
      }, 4000);
    }
  }

  afterSuccessRegistration(data, form) {
    this.afterSuccessSend(data, form);
  }

  afterSuccessSend(response, form) {
    this.hideErrors(form);

    // TODO remove document.querySelector
    const successSendBlock = document.querySelector('.js-success-send-ed-form');

    if (!form.classList.contains('is-success')) {
      form.classList.add('is-success');
    }

    if (successSendBlock && !successSendBlock.classList.contains('is-success')) {
      successSendBlock.classList.add('is-success');
    }

    this.toRedirect(response);
  }

  setSuccessText(text, el) {
    const successSendBlock = el.querySelector('.js-success-send-ed-form');

    if (successSendBlock && text) {
      successSendBlock.innerHTML = text;
    }
  }

  showErrors(errors, parent) {
    this.hideErrors(parent);

    errors.forEach((error) => {
      const errorInput = parent.querySelector(`.js-${error.name}`);

      if (errorInput && !errorInput.classList.contains('is-error')) {
        errorInput.classList.add('is-error');
      }

      const errorField = parent.querySelector(`.js-error-${error.name}`);

      if (errorField && !errorField.classList.contains('is-error')) {
        errorField.classList.add('is-error');
      }

      if (errorField) errorField.innerHTML = error.text;
    });
  }

  hideErrors(form) {
    const inputs = form.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i = +1) {
      inputs[i].classList.remove('is-error');
    }

    const errors = form.querySelectorAll('.js-error-field');

    for (let i = 0; i < errors.length; i = +1) {
      errors[i].classList.remove('is-error');
      errors[i].innerHTML = '';
    }
  }

  closestIEpolyfill(Element) {
    if (!Element.__proto__.closest) {
      Element.__proto__.closest = (css) => {
        let node = this;

        while (node) {
          node.matches = node.matches
            || node.webkitMatchesSelector
            || node.msMatchesSelector
            || node.mozMatchesSelector;

          if (node.matches(css)) return node;
          node = node.parentElement;
        }
        return null;
      };
    }
  }

  close() {
    this.button.removeEventListener('click', this.buttonListener, false);
    this.inputPhone.removeEventListener('click', this.buttonListener, false);
  }
}

function init(options) {
  const forms = document.querySelectorAll(`.${options.internalCls || 'js-ed-form'}`);

  forms.forEach((form) => {
    let removeForm;

    formInstances.forEach((formInstance) => {
      if (formInstance.form === form) {
        removeForm = form;
      }
    });

    if (!removeForm) {
      formInstances.push(new Form(Object.assign(options, {
        formEl: form,
      })));
    }
  });

  return formInstances;
}

function uninit(instance) {
  if (instance) {
    instance.close();
    formInstances.splice(formInstances.indexOf(instance), 1);
  } else {
    for (let i = 0; i < formInstances.length; i = +1) {
      formInstances[i].close();
    }

    formInstances = [];
  }
}

module.exports = { init, uninit };

window.logicInit = init;
window.logicUninit = uninit;
