import $ from 'jquery';
import _ from 'underscore';
import parsers from './form-parsers';

function getUrl(isInternal) {
  return isInternal ? '' : 'https://englishdom.com';
}

function getClientId() {
  let clientId = parsers.getCookie('client_id');

  if (!clientId) {
    clientId = parsers.createUserId();
    parsers.setCookie('client_id', clientId);
  }

  return clientId;
}

function getUserId() {
  let id = document.body.getAttribute('data-user-id');

  return id;
}

function apiGetDataFromServer(internal, cb, loadCb) {
  $.ajax({
    url: `${getUrl(internal)}/api-public/logged-user/`,
    contentType: 'application/vnd.api+json',
    dataType: 'json',
    timeout: 40000,
    headers: {
      Authorization1: null
    },    
    beforeSend: function() {
      if (loadCb) loadCb.start();
    },
    success: function (response) {
      data = response.data.attributes;

      if (cb) cb.call(data);

      if (loadCb) {
        loadCb.end({ success: true });

      }
    },
    error: function error() {
      if (loadCb) {
        loadCb.end({ success: false });

      }
    }
  });
}

function apiRegistration(data, internal, tags, loadCb, cb) {
  const utm = tags || '';
  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: `${getUrl(internal)}/api-public/user/registration${utm}`,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'X-Client-Id': getClientId()
    },
    error: function(response) {
      cb(false, response);
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    success: function (response) {
      parsers.setCookie('jwt', response.meta.token);
      
      cb(true, response);

      if (loadCb) {
        loadCb.end({ success: true });
        
      }
    },
    error: function error() {
      if (loadCb) {
        loadCb.end({ success: false });
        
      }
    }
  })
}

function apiGetToken(data, internal, tags, loadCb, cb) {
  data.type = 'read-registration';

  const utm = tags || '';
  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: `${getUrl(internal)}/api-public/user/read-registration${utm}`,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'X-Client-Id': getClientId()
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    success: function (response) {
      cb({ result: true, response: response });

      if (loadCb) {
        loadCb.end({ success: true });
        
      }
    },
    error: function error() {
      cb({ result: false, response: response });

      if (loadCb) {
        loadCb.end({ success: false });
        
      }
    }
  })
}

function apiReadRegistration(data, internal, tags, loadCb, cb) {
  data.type = 'read-registration';

  const utm = tags || '';
  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: `${getUrl(internal)}/api-public/user/read-registration${utm}`,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'X-Client-Id': getClientId()
    },
    statusCode: {
      200: function(response) {
        cb({ result: false, response: response, sendApp: true });

        if (loadCb) {
          loadCb.end({ success: true });
          
        }
      },
      201: function(response) {
        cb({ result: true, response: response, sendApp: true });

        if (loadCb) {
          loadCb.end({ success: true });
          
        }
      }
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    error: function error() {
      cb({ result: false, response: response, sendApp: false });

      if (loadCb) {
        loadCb.end({ success: false });
        
      }
    }
  })
}

function apiSendApplication(data, internal, tags, token, loadCb, cb) {
  data.type = 'application';

  const utm = tags || '';
  const sendData = {
    data: data
  };

  $.ajax({
    crossDomain: true,
    type: 'POST',
    url: `${getUrl(internal)}/api-public/application/individual${utm}`,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Authorization1',
      'Authorization1': 'Bearer ' + token,
      'X-Client-Id': getClientId()
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    success: function (response) {
      cb(true, response);

      if (loadCb) {
        loadCb.end({ success: true });
        
      }
    },
    error: function error() {
      cb(false, response);

      if (loadCb) {
        loadCb.end({ success: false });
        
      }
    }
  });
}

export default {
  getUserId: getUserId,
  apiGetToken: apiGetToken,
  apiRegistration: apiRegistration,
  apiGetDataFromServer: apiGetDataFromServer,
  apiReadRegistration: apiReadRegistration,
  apiSendApplication: apiSendApplication
}