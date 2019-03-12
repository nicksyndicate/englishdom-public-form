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
  const id = document.body.getAttribute('data-user-id');

  return id;
}

function apiGetDataFromServer(internal, cb, loadCb) {
  $.ajax({
    url: `${getUrl(internal)}/api-public/logged-user/`,
    contentType: 'application/vnd.api+json',
    dataType: 'json',
    timeout: 40000,
    headers: {
      Authorization1: null,
    },
    beforeSend() {
      if (loadCb) loadCb.start();
    },
    success(response) {
      if (cb) cb.call(response.data.attributes);
    },
    complete() {
      if (loadCb) loadCb.end();
    },
  });
}

function apiRegistration(data, internal, tags, loadCb, cb) {
  const utm = tags || '';
  const sendData = {
    data,
  };

  $.ajax({
    type: 'POST',
    url: `${getUrl(internal)}/api-public/user/registration${utm}`,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'X-Client-Id': getClientId(),
    },
    beforeSend() {
      if (loadCb) loadCb.start();
    },

    success(response) {
      parsers.setCookie('jwt', response.meta.token);

      cb(true, response);
    },
    error(response) {
      cb(false, response);
    },
    complete() {
      if (loadCb) loadCb.end();
    },
  });
}

function apiGetToken(data, internal, tags, loadCb, cb) {
  data.type = 'read-registration';

  const utm = tags || '';
  const sendData = {
    data,
  };

  $.ajax({
    type: 'POST',
    url: `${getUrl(internal)}/api-public/user/read-registration${utm}`,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'X-Client-Id': getClientId(),
    },
    beforeSend() {
      if (loadCb) loadCb.start();
    },
    success(response) {
      cb({ result: true, response });

      if (loadCb) loadCb.end();
    },
    error(response) {
      cb({ result: false, response });

      if (loadCb) loadCb.end();
    },
  });
}

function apiReadRegistration(data, internal, tags, loadCb, cb) {
  data.type = 'read-registration';

  const utm = tags || '';
  const sendData = {
    data,
  };

  $.ajax({
    type: 'POST',
    url: `${getUrl(internal)}/api-public/user/read-registration${utm}`,
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: {
      'X-Client-Id': getClientId(),
    },
    statusCode: {
      200(response) {
        cb({ result: false, response, sendApp: true });
      },
      201(response) {
        cb({ result: true, response, sendApp: true });

        if (loadCb) loadCb.end();
      },
    },
    beforeSend() {
      if (loadCb) loadCb.start();
    },
    error(response) {
      cb({ result: false, response, sendApp: false });

      if (loadCb) loadCb.end();
    },
  });
}

function apiSendApplication(data, internal, tags, token, loadCb, cb) {
  data.type = 'application';

  const utm = tags || '';
  const sendData = {
    data,
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
      Authorization1: `Bearer ${token}`,
      'X-Client-Id': getClientId(),
    },
    beforeSend() {
      if (loadCb) loadCb.start();
    },
    success(response) {
      cb(true, response);

      if (loadCb) loadCb.end();
    },
    error(response) {
      cb(false, response);

      if (loadCb) loadCb.end();
    },
  });
}

export default {
  getUserId,
  apiGetToken,
  apiRegistration,
  apiGetDataFromServer,
  apiReadRegistration,
  apiSendApplication,
};
