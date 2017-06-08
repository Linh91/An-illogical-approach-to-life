var app = angular.module('characterCreation',[]);

  app.controller('character', function($scope, $http) {

      $scope.data = [];
      $scope.char = 'no characters'

      var request = $http.get('/databaseQuery');
      request.success(function(data) {
          $scope.data = data;
          $scope.id = $scope.data.length-1
      });
      request.error(function(data){
          console.log('Error: ' + data);
      });

      $scope.getNextChar = function(){
        $scope.id++
      };

      $scope.getPrevChar = function(){
        $scope.id--
      }

      $scope.getCreatedChar = function(){
        $scope.char = characterView($scope.data, $scope.id)
      }

});
