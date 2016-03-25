var RestDataProvider = {};
var self = this;
var callbacks = {};
var data = {};
var ROOT_URL = 'http://localhost:3000/api';
var credentials = {
  userId: null,
  token: null
};

var registerModel = function(model) {
  RestDataProvider[model.name] = {
    register: function(cb) {
      callbacks[model.name] = cb;
    },
    refresh: function() {
      console.log('getting all', model.name);
      makeRequest('GET', '/' + model.plural, null, function(code, data) {
        if (code === 200) {
          data[model.name] = data;
          callbacks[model.name](data);
        }
      });
    },
    create: function(modelData) {
      console.log('creating new', model.name);
      callbacks[model.name]();
    },
    update: function(id, modelData) {
      console.log('updating ', model.name, id);
      callbacks[model.name]();
    },
    destroy: function(id) {
      console.log('destroying', model.name, id);
      callbacks[model.name]();
    }
  }
};

var addMethod = function(modelName, methodName, func) {
  RestDataProvider[modelName][methodName] = func;
};

var models = [
  { name: 'Role', plural: '' },
  { name: 'CertificationType', plural: '' },
  { name: 'Person', plural: 'people' },
  { name: 'ServiceCredit', plural: '' },
  { name: 'Certification', plural: '' }
];
models.map(function(model) {
  registerModel(model);
});

addMethod('ServiceCredit', 'approve', function() {
  console.log('approved service credit');
});
addMethod('Certification', 'approve', function() {
  console.log('approved certification');
});

RestDataProvider.authorize = function(username, password, callback) {
  makeRequest('POST', '/accounts/login', { username: username, password: password }, function(code, response) {
    if (code === 200) {
      credentials.token = response.id;
      credentials.userId = response.userId;
      models.forEach(function(model) {
        RestDataProvider[model.name].refresh();
      });
      callback(true);
    } else {
      callback(false);
    }
  });
};

RestDataProvider.deauthorize = function(callback) {
  if (credentials.token !== null) {
    makeRequest('POST', '/accounts/logout', { sid: credentials.token }, function(code, response) {
      callback();
    });
  } else {
    callback();
  }
};

var makeRequest = function(method, url, payload, done) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    if (this.responseText && this.responseText.length > 0) {
      var response = JSON.parse(this.responseText);
    } else {
      var response = {};
    }
    var code = this.status;
    done(code, response);
  });
  xhr.open(method, ROOT_URL + url);
  if (credentials.token !== null) {
    xhr.setRequestHeader('Authorization', credentials.token);
  }
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(payload));
};

module.exports = RestDataProvider;
