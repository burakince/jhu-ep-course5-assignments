(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = [];
function UserService() {
  var service = this;

  service.getRegisteredInformations = function() {
    return service.user;
  };

  service.registerUser = function(user) {
    service.user = user;
  }
}

})();
