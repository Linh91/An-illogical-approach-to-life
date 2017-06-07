var app = angular.module('signUp',[]);

  app.controller('UserCreation', function($scope, $http) {

      $scope.data = [];

      var request = $http.get('/databaseQuery');
      request.success(function(data) {
          $scope.data = data;
      });
      request.error(function(data){
          console.log('Error: ' + data);
      });
});
