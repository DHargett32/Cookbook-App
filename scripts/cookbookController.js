angular
    .module('ngCookbook')
    .controller('cookbookController', ['$scope', function($scope){
        $scope.recipes = [
            {
                "title" :"Grilled Chicken", 
                "ingredients":
                [
                    {"name":"salt", "measurement":"1tsp"},
                    {"name":"pepper", "measurement":"1tsp"},
                    {"name":"chicken breast","measurement":"12 oz"},
                    {"name":"olive oil","measurement":"1Tbsp"}
                ],
                "instructions":
                [
                    {"step":"Preheat the grill on high for 10-15 minutes."},
                    {"step":"Do more things..."},
                    {"step":"Etc.."}
                ]
            },
            {
                "title" :"Recipe 2", 
                "ingredients":
                [
                    {"name":"salt", "measurement":"1tsp"},
                    {"name":"pepper", "measurement":"1tsp"},
                    {"name":"chicken breast","measurement":"12 oz"},
                    {"name":"olive oil","measurement":"1Tblsp"}
                ],
                "instructions":
                [
                    {"step":"Preheat the grill on high for 10-15 minutes."},
                    {"step":"Do more things..."},
                    {"step":"Etc.."}
                ]
            }
        ];

        /*$scope.addRecipe = function(){
            console.log('opening add recipe popup');
            var modalInstance = $modal.open({
                tenplateUrl: 'addRecipe.html',
            });
        }*/
    }]);