(function () {
"use strict";

angular.module('public')
.directive('menuitem', MenuItemValidation);

MenuItemValidation.$inject = ['$http', '$q', 'ApiPath'];
function MenuItemValidation($http, $q, ApiPath) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.menuitem = function(modelValue, viewValue) {
        var def = $q.defer();

        if (ctrl.$isEmpty(modelValue)) {
          return def.reject();
        }

        $http.get(ApiPath + '/menu_items.json').then(function(response) {
          console.log(response);
          response.data.menu_items.forEach(function(menuitem) {
            if (menuitem.short_name === modelValue.toUpperCase()) {
              def.resolve();
            }
          });
          def.reject();
        });

        return def.promise;
      };
    }
  };
}

})();
