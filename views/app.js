var app = angular.module('characterCreation',[]);

  app.controller('character', function($scope, $http) {
      $scope.id = 1
      $scope.data = [];
      $scope.char = 'no characters'

      var request = $http.get('/databaseQuery');
      request.success(function(data) {
          $scope.data = data;
      });
      request.error(function(data){
          console.log('Error: ' + data);
      });

      $scope.getNextChar = function(){
        $scope.id++
        $scope.char = characterView($scope.data, $scope.id)
      };

      $scope.getPrevChar = function(){
        $scope.id--
        $scope.char = characterView($scope.data, $scope.id)
      }
});
