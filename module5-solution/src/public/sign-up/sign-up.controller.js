(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    if ($ctrl.user.menuitem) {
      MenuService.getMenuItem($ctrl.user.menuitem.toUpperCase()).then(function(favoritedish) {
        $ctrl.user.favoritedish = favoritedish;
        UserService.registerUser($ctrl.user);
        $ctrl.completed = true;
        $ctrl.error = false;
      }, function(response) {
        $ctrl.completed = false;
        $ctrl.error = true;
      });
    } else {
      $ctrl.completed = false;
      $ctrl.error = true;
    }

  };
}

})();
