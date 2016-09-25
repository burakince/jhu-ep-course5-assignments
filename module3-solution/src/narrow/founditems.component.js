(function () {
'use strict';

angular.module('NarrowItDownApp')
.component('foundItems', {
  templateUrl: 'src/narrow/founditems.template.html',
  controller: FoundItemsComponentController,
  bindings: {
    found: '<foundItems',
    isEmpty: '<',
    onRemove: '&'
  }
});


FoundItemsComponentController.$inject = ['$rootScope', '$element', '$q']
function FoundItemsComponentController($rootScope, $element, $q) {
  var vm = this;

  vm.$doCheck = function () {
    var warningElem = $element.find('div.alert');
    if (vm.isEmpty) {
      warningElem.css('display', 'block');
    } else {
      warningElem.css('display', 'none');
    }
  };

  vm.remove = function (myIndex) {
    vm.onRemove({ index: myIndex });
  };
}

})();
