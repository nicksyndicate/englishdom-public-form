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
        name = '_';
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
 
  return data;
}

function afterErrorSend(response, form, cb) {
  let errors = response.responseJSON.errors.detail;

  Object.keys(errors).map(function(error) {
    Object.keys(errors[error]).map(function(type) {
      cb(error, errors[error][type], form);
    });
  });
}


export default {
  getRegistrationData: getRegistrationData,
  getExternalData: getExternalData,
  afterErrorSend: afterErrorSend
}