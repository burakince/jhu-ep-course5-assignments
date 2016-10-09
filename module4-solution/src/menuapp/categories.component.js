(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/pages/all_categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
