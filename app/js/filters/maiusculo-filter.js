/**
 * Created by max on 09/11/15.
 */
angular.module('helloworld').filter('maiusculo', maiusculo);

function maiusculo(){

    return function (input) {
        if (input && typeof input === 'string') {
            return input.toUpperCase();
        }else{
            return input;
        }
    }
}