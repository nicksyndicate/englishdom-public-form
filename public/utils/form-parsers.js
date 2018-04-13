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
  let data = {
    attributes: {
      source: opt.source,
      from_page: location.href,
      email: form.querySelector('.js-email').value,
      timezone: new Date().getTimezoneOffset()
    }
  };
  
  if (opt.firstName) {
    data.attributes['first_name'] = form.querySelector('.js-first_name').value;
    data.attributes['name'] = form.querySelector('.js-first_name').value;
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