/**
 * Created by Max on 03/11/2015.
 */
angular.module('helloworld', []);
angular.module('helloworld').controller('IndexController', IndexController);

IndexController.$inject = [$scope];

function IndexController($scope){
    $scope.nome = 'Max';
    $scope.click = function(){
        $scope.nome = 'Senai';
    }
}

