(function () {
'use strict';

angular.module('ItemsLoaderIndicatorApp')
.component('itemsLoaderIndicator', {
  templateUrl: 'src/loader/templates/itemsloaderindicator.template.html',
  controller: ItemsLoaderIndicatorController
});

ItemsLoaderIndicatorController.$inject = ['$rootScope']
function ItemsLoaderIndicatorController($rootScope) {
  var vm = this;
  var cancellers = [];

  vm.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      vm.showSpinner = true;
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      vm.showSpinner = false;
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      vm.showSpinner = false;
    });
    cancellers.push(cancel);
  };

  vm.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };

};

})();
