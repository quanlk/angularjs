(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";
    $scope.messageStyle = {};

    $scope.onClickCheckIfTooMuch = function() {
      if ($scope.lunchMenu.length == 0) {
        $scope.message = "Please enter data first";
        $scope.messageStyle = getRedStyle();
      } else {
        var splitedMenu = $scope.lunchMenu.split(',');
        var counter = 0;

        for (var i = 0; i < splitedMenu.length; i++) {
          if (splitedMenu[i].trim().length > 0) {
            counter++;
          }
        }

        if (counter <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }

        $scope.messageStyle = getGreenStyle();
      }
    };

    function getGreenStyle() {
      return {
        "color":"green",
        "border-style": "dashed",
        "border-color":"green"
      };
    }

    function getRedStyle() {
      return {
        "color":"red",
        "border-style": "dashed",
        "border-color":"red"
      };
    }
  }
})();
