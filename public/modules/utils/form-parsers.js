function getRegistrationData(data) {
  return {
    attributes: {
      email: data.attributes.email,
      source: data.attributes.source,
      timezone: new Date().getTimezoneOffset(),
    },
  };
}

function getExternalData(opt, form) {
  const email = form.querySelector('.js-email').value;

  const data = {
    attributes: {
      segment: opt.segment || 'individual',
      source: opt.source,
      from_page: window.location.href,
      email,
      timezone: new Date().getTimezoneOffset(),
    },
  };

  if (opt.firstName) {
    const field = form.querySelector('.js-first_name');
    let name = field ? field.value : '';

    if (!name) {
      name = email.split('@')[0];
      name = name.replace(/\d+/g, '').replace(/[^\w\s]/gi, '');

      if (name && name.length > 24) {
        name = name.slice(0, 24);
      }

      if (!name) {
        name = '';
      }
    } else {
      //
    }

    data.attributes.first_name = name;
    data.attributes.name = name;
  }

  if (opt.phone) {
    data.attributes.phone = form.querySelector('.js-phone').value;
  }

  if (opt.from) {
    data.attributes.from = opt.from;
  }

  if (opt.AMOCRMTagFormAttribute && form.getAttribute(opt.AMOCRMTagFormAttribute)) {
    data.attributes.tags = form.getAttribute(opt.AMOCRMTagFormAttribute);
  }

  return data;
}

function afterErrorSend(response, form, cb) {
  const errors = response.responseJSON ? response.responseJSON.errors.detail : {};
  const parsedErrors = [];

  if (errors) {
    Object.keys(errors).map((error) => {
      Object.keys(errors[error]).map((type) => {
        parsedErrors.push({ name: error, text: errors[error][type] });
      });
    });
  }

  cb(parsedErrors, form);
}

function getCookie(name) {
  const match = document.cookie.match(`${name}=[^; ]*`);

  if (match) return match[0].split('=')[1];

  return null;
}

function setCookie(name, value) {
  const cookies = document.cookie.split('; ');
  const newCookie = `${name}=${value};path=/;`;

  const updatedCookies = [newCookie];

  for (let i = 0; i < cookies.length; i++) {
    if (!cookies[i].match(name)) {
      updatedCookies.push(cookies[i]);
    }
  }

  document.cookie = updatedCookies.join('; ');
}

function createUserId() {
  const rand = function () {
    return Math.random().toString(36).substr(2);
  };

  return rand() + rand();
}

export default {
  getRegistrationData,
  getExternalData,
  afterErrorSend,
  getCookie,
  setCookie,
  createUserId,
};
