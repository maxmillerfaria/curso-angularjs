angular.module('helloworld', ['ngMessages', 'ui.growl', 'idf.br-filters', 'ui.utils.masks']);

angular.module('helloworld').controller("IndexController", IndexController);

IndexController.$inject = ['$scope', '$filter', 'AlertService'];

function IndexController($scope, $filter, AlertService){

    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;

    function salvar(){

        if ($scope.myForm.$invalid === true) {

            AlertService.showOk('Observe', 'Verifique os campos inválido!');

            return;

        }

        $scope.listaDePessoas.push($scope.entidade);
        //$scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');
        limpar();

        AlertService.showOk('Sucesso', 'Registro salvo com sucesso!');

    }

    function limpar(){
        $scope.entidade = {};
    }
}