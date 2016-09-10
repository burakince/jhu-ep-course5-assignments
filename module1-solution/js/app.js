(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";

  $scope.checkIfTooMuch = function () {
    var dishesCount = 0;
    $scope.dishes.split(",").forEach(function(item) {
      if (item.trim().length != 0) {
        dishesCount++;
      }
    })
    $scope.message = getMessage(dishesCount);
    $scope.messageColor = getMessageColor(dishesCount);
    $scope.inputColor = getInputColor(dishesCount);
  };

  function getMessage(dishesCount) {
    if (dishesCount == 0) {
      return "Please enter data first";
    } else if (dishesCount < 4) {
      return "Enjoy!";
    } else {
      return "Too much!";
    }
  }
  function getMessageColor(dishesCount) {
    if (dishesCount == 0) {
      return "text-danger";
    } else {
      return "text-success";
    }
  }
  function getInputColor(dishesCount) {
    if (dishesCount == 0) {
      return "has-error";
    } else {
      return "has-success";
    }
  }
}

})();
