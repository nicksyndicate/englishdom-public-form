import $ from 'jquery';
import _ from 'underscore';

function getUserId() {
  let id = document.body.getAttribute('data-user-id');

  return id;
}

function apiGetDataFromServer(cb) {
  let id = getUserId();

  $.ajax({
    url: 'https://englishdom.com/api-public/logged-user/',
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
    }
  });
}

function apiRegistration(data, cb) {
  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: 'https://englishdom.com/api-public/user/registration/',
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),

    success: function(response) {
      cb(true, response);
    },
    error: function(response) {
      cb(false, response);
    }
  })
}

function apiReadRegistration(data, cb) {
  data.type = 'read-registration';

  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: 'https://englishdom.com/api-public/user/read-registration/',
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),

    success: function(response) {
      cb(true, response);
    },
    error: function(response) {
      cb(false, response);
    }
  })
}

function apiSendApplication(data, cb) {
  data.type = 'application';

  const sendData = {
    data: data
  };

  $.ajax({
    type: 'POST',
    url: 'https://englishdom.com/api-public/application/individual',
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),

    success: function(response) {
      cb(true, response);
    },
    error: function(response) {
      cb(false, response);
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