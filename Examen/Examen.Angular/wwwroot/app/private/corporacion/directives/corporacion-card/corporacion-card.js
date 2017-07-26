(function () {
    'use strict';

    angular.module('app').directive('corporacionCard', corporacionCard);

    function corporacionCard() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                corp_No: '@',
                corp_Name: '@',
                street: '@',
                city: '@',
                state_Prov: '@',
                mail_Code: '@',
                phone_No: '@',
                expr_Dt: '@',
                corp_Code: '@'
            },
            templateUrl: 'app/private/corporacion/directives/corporacion-card/corporacion-card.html',
            controller: directiveController
        };
    }

    function directiveController() {

    }

})();