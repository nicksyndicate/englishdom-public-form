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
  let id = getUserId();

  $.ajax({
    url: `${getUrl(internal)}/api-public/logged-user/`,
    contentType: 'application/vnd.api+json',
    dataType: 'json',
    timeout: 40000,
    headers: {
      Authorization1: null
    },
    success: function (response) {
      data = response.data.attributes;

      if (cb) {
        cb.call(data);
      }
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    complete: function() {
      if (loadCb) {
        loadCb.end();
        
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

    success: function(response) {
      parsers.setCookie('jwt', response.meta.token);
      
      cb(true, response);
    },
    error: function(response) {
      cb(false, response);
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    complete: function() {
      if (loadCb) {
        loadCb.end();
        
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
    success: function(response) {
      cb({ result: true, response: response });
    },
    error: function(response) {
      cb({ result: false, response: response });
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    complete: function() {
      if (loadCb) {
        loadCb.end();
        
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
      },
      201: function(response) {
        cb({ result: true, response: response, sendApp: true });
      }
    },
    error: function(response) {
      cb({ result: false, response: response, sendApp: false });
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    complete: function() {
      if (loadCb) {
        loadCb.end();
        
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

    success: function(response) {
      cb(true, response);
    },
    error: function(response) {
      cb(false, response);
    },
    beforeSend: function() {
      if (loadCb) {
        loadCb.start();

      }
    },
    complete: function() {
      if (loadCb) {
        loadCb.end();
        
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