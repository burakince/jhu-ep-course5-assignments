(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var vm = this;

  vm.getAllCategories = function(searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
  };

  vm.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: { category: categoryShortName }
    });
  }
}

})();
