(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/pages/all_items.template.html',
  bindings: {
    items: '<'
  }
});

})();
