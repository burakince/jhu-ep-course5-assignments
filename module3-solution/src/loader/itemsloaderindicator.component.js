(function () {
'use strict';

angular.module('ItemsLoaderIndicatorApp')
.component('itemsLoaderIndicator', {
  templateUrl: 'src/loader/itemsloaderindicator.template.html',
  controller: ItemsLoaderIndicatorController
});


ItemsLoaderIndicatorController.$inject = ['$rootScope']
function ItemsLoaderIndicatorController($rootScope) {
  var vm = this;

  var cancelListener = $rootScope.$on('founditems:processing', function (event, data) {
    vm.showLoader = data.on;
  });

  vm.$onDestroy = function () {
    cancelListener();
  };

};

})();
