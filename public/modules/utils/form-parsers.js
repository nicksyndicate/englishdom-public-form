function getRegistrationData(data) {
  return {
    attributes: {
      email: data.attributes.email,
      source: data.attributes.source,
      timezone: new Date().getTimezoneOffset()
    }
  }
}

function getExternalData(opt, form) {
  let email = form.querySelector('.js-email').value;

  let data = {
    attributes: {
      segment: opt.segment || 'individual',
      source: opt.source,
      from_page: location.href,
      email: email,
      timezone: new Date().getTimezoneOffset()
    }
  };
  
  if (opt.firstName) {
    let field = form.querySelector('.js-first_name');
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

    data.attributes['first_name'] = name;
    data.attributes['name'] = name;
    
  }

  if (opt.phone) {
    data.attributes['phone'] = form.querySelector('.js-phone').value;
  }

  if (opt.from) {
    data.attributes['from'] = opt.from;
  }

  if (opt.AMOCRMTagFormAttribute && form.getAttribute(opt.AMOCRMTagFormAttribute)) {
    data.attributes['tags'] = form.getAttribute(opt.AMOCRMTagFormAttribute);
  }

  return data;
}

function afterErrorSend(response, form, cb) {
  let errors = response.responseJSON ? response.responseJSON.errors.detail : {};
  let parsedErrors = [];

  if (errors) {
    Object.keys(errors).map(function(error) {
      Object.keys(errors[error]).map(function(type) {
        parsedErrors.push({ name: error, text: errors[error][type] });
      });
    });
  }

  cb(parsedErrors, form);
}

function getCookie(name) {
  var match = document.cookie.match(name + '=[^; ]*');

  if (match) return match[0].split('=')[1];

  return null;
}

function setCookie(name, value) {
  var cookies = document.cookie.split('; ');
  var newCookie = name + '=' + value + ';path=/;';

  var updatedCookies = [newCookie];

  for (var i = 0; i < cookies.length; i++) {
    if (!cookies[i].match(name)) {
      updatedCookies.push(cookies[i]);
    }
  }

  document.cookie = updatedCookies.join('; '); 
}

function createUserId() {
  let rand = function() {
    return Math.random().toString(36).substr(2);
  };

  return rand() + rand();
}

export default {
  getRegistrationData: getRegistrationData,
  getExternalData: getExternalData,
  afterErrorSend: afterErrorSend,
  getCookie: getCookie,
  setCookie: setCookie,
  createUserId: createUserId
}