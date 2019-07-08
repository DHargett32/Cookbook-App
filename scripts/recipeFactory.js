angular
    .module('ngCookbook')
    .factory('recipeFactory', function($http) {


        function getRecipes(){
            /* This is by no means a 'best practice' (getting our data from a local file),
                but will work for development purposes for the time being.
             */
            return $http.get('data/data.json');
        }

        return {
            getRecipes: getRecipes
        }
    });