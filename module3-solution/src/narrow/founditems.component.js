(function () {
'use strict';

angular.module('NarrowItDownApp')
.component('foundItems', {
  templateUrl: 'src/narrow/founditems.template.html',
  controller: FoundItemsComponentController,
  bindings: {
    found: '<foundItems',
    onRemove: '&'
  }
});


FoundItemsComponentController.$inject = ['$rootScope', '$element', '$q']
function FoundItemsComponentController($rootScope, $element, $q) {
  var vm = this;

  vm.remove = function (myIndex) {
    vm.onRemove({ index: myIndex });
  };
}

})();
