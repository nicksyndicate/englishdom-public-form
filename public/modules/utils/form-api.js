import $ from 'jquery';
import _ from 'underscore';

function getUserId() {
  let id = document.body.getAttribute('data-user-id');

  return id;
}

function apiGetDataFromServer(cb, loadCb) {
  let id = getUserId();

  $.ajax({
    url: 'https://e-loshkarev.eddev.cf/api-public/logged-user/',
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

function apiRegistration(data, tags, loadCb, cb) {
  const utm = tags || '';
  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: 'https://e-loshkarev.eddev.cf/api-public/user/registration' + utm,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),

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
  })
}

function apiReadRegistration(data, tags, loadCb, cb) {
  data.type = 'read-registration';

  const utm = tags || '';
  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: 'https://e-loshkarev.eddev.cf/api-public/user/read-registration' + utm,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),

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
  })
}

function apiSendApplication(data, tags, token, loadCb, cb) {
  data.type = 'application';

  const utm = tags || '';
  const sendData = {
    data: data
  };

  $.ajax({
    crossDomain: true,
    type: 'POST',
    url: 'https://e-loshkarev.eddev.cf/api-public/application/individual' + utm,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Authorization1, Content-Type, Accept, Origin',
      'Authorization1': 'Bearer ' + token
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
  apiRegistration: apiRegistration,
  apiGetDataFromServer: apiGetDataFromServer,
  apiReadRegistration: apiReadRegistration,
  apiSendApplication: apiSendApplication
}