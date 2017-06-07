var app = angular.module('characterCreation',[]);

app.controller('character', function($scope){


  $scope.id = 1
  $scope.viewCharacter = function(){
    characterView(characterList, $scope.id)
  };
});
  // $scope.characters = characterList
