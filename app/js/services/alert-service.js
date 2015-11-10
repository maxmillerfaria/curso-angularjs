/**
 * Created by max on 09/11/15.
 */
angular.module('helloworld').service('AlertService', AlertService);

AlertService.$inject = ['$growl'];

function AlertService ($growl) {

    this.showOk = showOk;
    this.showError = showError;
    this.showAlert = showAlert;
    this.showInfo = showInfo;

    function showOk(titulo, mensagem){
        $growl.box(titulo, mensagem, {
            class: 'success',//verde
            timeout: 3000
        }).open();
    }

    function showError(titulo, mensagem){
        $growl.box(titulo, mensagem, {
            class: 'danger',//vermelho
            timeout: 3000
        }).open();
    }

    function showAlert(titulo, mensagem){
        $growl.box(titulo, mensagem, {
            class: 'warning',//laranja
            timeout: 3000
        }).open();
    }

    function showInfo(titulo, mensagem){
        $growl.box(titulo, mensagem, {
            class: 'primary',//azul
            timeout: 3000
        }).open();
    }
}