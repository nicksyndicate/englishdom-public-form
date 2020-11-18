import sbjs from 'sourcebuster';
import _get from 'lodash/get';

import api from './utils/form-api';
import parsers from './utils/form-parsers';
import intTelInput from './utils/intl-tel-input';
import {
  getK,
  getPeriod,
  pageConverter,
  gmtConverter,
} from './utils/lead-priority';

let formInstances = [];

sbjs.init({
  lifetime: 24,
  timezone_offset: 0,
});

const formMurkupError = (elSelector) =>
  `Element with selector ${elSelector} not found in englishdom-form murkup. Please check that you have correctly copied
  form murkup to your page.`;

class Form {
  constructor(options) {
    this.options = options;
    this.form = options.formEl;

    this.checkMurkup();

    this.buttonListener = this.buttonListener.bind(this);
    this.hideErrorByInput = this.hideErrorByInput.bind(this);

    if (this.options.phone) {
      this.$iti = intTelInput(this.form);
      if (this.form) this.setFormInputsEvent(this.form);
    }

    if (this.options.initFormCb) {
      this.options.initFormCb.map((cb) => {
        cb();
      });
    }

    if (this.form) this.setButtons(this.form);
    if (this.form) this.setSuccessText(this.options.successSendText, this.form);
  }

  checkMurkup() {
    if (!this.form.querySelector('.js-ed-form-button')) {
      console.log(formMurkupError('.js-ed-form-button'));
    }

    if (!this.form.querySelector('.js-ed-form-tel-number')) {
      console.log(formMurkupError('.js-ed-form-tel-number'));
    }

    if(!document.querySelector('.js-success-send-ed-form')) {
      console.log(formMurkupError('.js-success-send-ed-form'));
    }

    if (!this.form.querySelector('.js-error-field')) {
      console.log(formMurkupError('.js-error-field'));
    }

    if (!this.form.querySelector('.js-email')) {
      console.log(formMurkupError('.js-email'));
    }

    if (!this.form.querySelector('.js-phone')) {
      console.log(formMurkupError('.js-phone'));
    }

    if (!this.form.querySelector('.js-error-phone')) {
      console.log(formMurkupError('.js-error-phone'));
    }

    if (!this.form.querySelector('.js-error-email')) {
      console.log(formMurkupError('.js-error-email'));
    }
  }

  buttonListener(e) {
    e.preventDefault();

    this.setNextMethod(e);
  }

  setButtons(el) {
    this.button = el.querySelector('.js-ed-form-button');

    this.button.addEventListener('click', this.buttonListener, false);
  }

  setFormInputsEvent(form) {
    form.addEventListener('keyup', this.hideErrorByInput);
  }

  blurPhoneEvent(event) {
    event.preventDefault();

    this.checkValidity();
  }

  isPhoneInvalid() {
    return !this.$iti.intlTelInput('isValidNumber');
  }

  checkValidity(parent) {
    const errorMap = document.body.getAttribute('data-language') === 'ua'
      ? [
        'Невірний номер',
        'Такого коду країни не існує',
        'Номер дуже короткий',
        'Номер занадто довгий',
        'Невірний номер',
      ]
      : [
        'Неправильный номер',
        'Такого кода страны не существует',
        'Номер слишком короткий',
        'Номер слишком длинный',
        'Неправильный номер',
      ];

    if (this.$iti) {
      if (this.isPhoneInvalid()) {
        this.showErrors(
          [{
            text: errorMap[this.$iti.intlTelInput('getValidationError')],
            name: 'phone',
          }],
          parent,
          this.form,
          false,
        );

        if (this.options.errorPhoneEvent) {
          this.options.errorPhoneEvent({
            number: this.$iti.intlTelInput('getNumber'),
            error: errorMap[this.$iti.intlTelInput('getValidationError')],
            country: this.$iti.intlTelInput('getSelectedCountryData').iso2,
            page: window.location.origin + window.location.pathname,
          });
        }
      }
    }
  }

  setNextMethod(e) {
    this.closestIEpolyfill(e.target);

    const data = parsers.getExternalData(this.options, this.form);

    if (this.options.preReadRegFormCb) return this.getTokenForApp(data, this.form);
    if (this.options.registration) {
      return this.registration(parsers.getRegistrationData(data), this.form);
    }
    if (this.options.internal) return this.readRegistration(data, this.form);

    if (e.target.classList.contains('is-disabled')) {
      return this.sendApplication(data, this.form);
    }
  }

  registration(data, form) {
    const _this = this;

    api.apiRegistration(
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

        return parsers.afterErrorSend(response, form, (error, parent, form) => {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(response);
          }

          return _this.showErrors(error, parent, form);
        });
      },
    );
  }

  getTokenForApp(data, form) {
    const loginData = this.options.preReadRegFormCb();
    const _this = this;

    // reset phone send to backend because front validation doesnt pass
    if (_this.isPhoneInvalid()) data.attributes.phone = '';

    if (loginData) return this.sendApplication(data, form, loginData);

    api.apiGetToken(data,
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
          return parsers.afterErrorSend(apiData.response, form, (error, parent, form) => {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(apiData.response);
            }

            _this.showErrors(error, parent, form);

            _this.checkValidity(parent);
          });
        }
      });
  }

  readRegistration(data, form) {
    const _this = this;

    api.apiReadRegistration(data,
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

          return parsers.afterErrorSend(errorResponse, form, (error, parent, form) => {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(errorResponse);
            }

            return _this.showErrors(error, parent, form);
          });
        }
        return parsers.afterErrorSend(apiData.response, form, (error, parent, form) => {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(apiData.response);
          }

          return _this.showErrors(error, parent, form);
        });
      });
  }

  addPriorityToTags(tagsRaw) {
    let tags = tagsRaw;
    let dataForLog = {};
    const rawData = {
      source: _get(sbjs, 'get.current.src'),
      medium: _get(sbjs, 'get.current.mdm'),
      fromPage: window.location.pathname,
      country: document.body.getAttribute('data-country'),
      hour: (new Date()).getUTCHours(),
      month: (new Date()).getUTCMonth() + 1,
      gmt: (new Date()).getTimezoneOffset(),
      dayOfWeek: (new Date()).getUTCDay() + 1, // день недели (в формате вс- 1, сб- 7),
      hash: window.location.hash,
    };

    dataForLog = {
      ...rawData,
    };

    const data = {
      ...rawData,
      fromPage: pageConverter(rawData.fromPage),
      gmt: gmtConverter(rawData.gmt),
    };

    dataForLog = {
      ...dataForLog,
      fromPageNew: data.fromPage,
      gmtNew: data.gmt,
    };

    const k = getK(data, (kObj) => {
      dataForLog = {
        ...dataForLog,
        ...kObj,
      };
    });

    dataForLog = {
      ...dataForLog,
      k,
    };

    const priority = getPeriod(k);

    dataForLog = {
      ...dataForLog,
      priority,
    };

    const score = `Score:${priority}`;

    // send to amplitude for testing
    // try if global facade exists
    try {
      facade.publish('user-action', 'application-scoring', dataForLog);
    } catch (e) {
      //
    }

    if (tags) {
      const tagsArray = tags.split(',');

      tagsArray.push(score);

      tags = tagsArray.join(',');
    } else {
      tags = score;
    }

    return tags;
  }

  getUtm() {
    let ep = _get(sbjs, 'get.current_add.ep', '');

    // remove window.location.origin "https://nick.eddev.cf"
    if (ep) {
      ep = ep.replace(window.location.origin, '');
    }

    return JSON.stringify({
      traffic_type: _get(sbjs, 'get.current.typ', ''),
      source: _get(sbjs, 'get.current.src', ''),
      medium: _get(sbjs, 'get.current.mdm', ''),
      campaign: _get(sbjs, 'get.current.cmp', ''),
      content: _get(sbjs, 'get.current.cnt', ''),
      term: _get(sbjs, 'get.current.trm', ''),
      entrance_point: ep,
    });
  }

  sendApplication(data, form, token) {
    const _this = this;

    // reset phone send to backend because front validation doesnt pass
    if (_this.isPhoneInvalid()) data.attributes.phone = '';

    // add priority to tags
    try {
      data.attributes.tags = this.addPriorityToTags(data.attributes.tags);
    } catch (e) {
      //
    }


    data.attributes.utm = this.getUtm();

    api.apiSendApplication(
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

        return parsers.afterErrorSend(response, form, (error, parent, form) => {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(response);
          }

          _this.showErrors(error, parent, form);

          _this.checkValidity(parent);
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

  showErrors(errors, parent, form, isHideErrors = true) {
    if (isHideErrors) this.hideErrors(parent);

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

    if (errors.length) this.button.classList.add('is-disabled');
  }

  hideErrors(form) {
    const inputs = form.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].classList.remove('is-error');
    }

    const errors = form.querySelectorAll('.js-error-field');

    for (let i = 0; i < errors.length; i += 1) {
      errors[i].classList.remove('is-error');
      errors[i].innerHTML = '';
    }

    this.button.classList.remove('is-disabled');
  }

  hideError(input) {
    const errorTextEls = input.parentElement.parentElement.querySelector('.js-error-field');

    input.classList.remove('is-error');

    if (errorTextEls) {
      errorTextEls.classList.remove('is-error');
      errorTextEls.innerHTML = '';
    }
  }

  isValidForm(form) {
    let ifValidForm = true;
    const inputs = form.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].classList.contains('is-error')) {
        ifValidForm = false;
      }
    }

    return ifValidForm;
  }

  hideErrorByInput(event) {
    this.hideError(event.target);

    if (this.isValidForm(this.form)) this.button.classList.remove('is-disabled');
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
    if (this.button) this.button.removeEventListener('click', this.buttonListener, false);
    if (this.form) this.form.removeEventListener('click', this.hideErrorByInput);
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
    for (let i = 0; i < formInstances.length; i += 1) {
      formInstances[i].close();
    }

    formInstances = [];
  }
}

module.exports = { init, uninit };

window.logicInit = init;
window.logicUninit = uninit;
