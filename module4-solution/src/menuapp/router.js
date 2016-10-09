(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/menus/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menus/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories().then(function(result) {
          return result.data;
        });
      }]
    }
  })
  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/menuapp/templates/menus/items.template.html',
    controller: 'ItemDetailController as items',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.itemId).then(function (result) {
          return result.data["menu_items"];
        });
      }]
    }
  });

}

})();
