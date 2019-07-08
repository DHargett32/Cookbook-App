angular
    .module('ngCookbook')
    .controller('cookbookController', function($scope, recipeFactory){

        $scope.recipes;

        recipeFactory.getRecipes().success(function(data){
            $scope.recipes = data;
        }).error(function(error) {
            console.log(error);
        });
    });