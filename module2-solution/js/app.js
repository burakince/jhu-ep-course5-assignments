(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.getItemsToBuy();

    vm.isListEmpty = function () {
      return ShoppingListCheckOffService.isToBuyItemListEmpty();
    };

    vm.buy = function (itemIndex) {
      ShoppingListCheckOffService.buy(itemIndex);
    }
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.getBoughtItems();

    vm.isListEmpty = function () {
      return ShoppingListCheckOffService.isBoughtItemListEmpty();
    };
  };

  function ShoppingListCheckOffService() {
    var vm = this;

    var toBuyItems = [{
      name: "cookies",
      quantity: 10
    }, {
      name: "chips",
      quantity: 4
    }, {
      name: "sugary drinks",
      quantity: 10
    }, {
      name: "pepto bismol",
      quantity: 3
    }, {
      name: "cookies",
      quantity: 3
    }];

    var boughtItems = [];

    vm.getItemsToBuy = function () {
      return toBuyItems;
    };

    vm.getBoughtItems = function () {
      return boughtItems;
    };

    vm.isToBuyItemListEmpty = function () {
      return toBuyItems.length == 0;
    };

    vm.isBoughtItemListEmpty = function () {
      return boughtItems.length == 0;
    };

    vm.buy = function (itemIndex) {
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };
  };

})();
