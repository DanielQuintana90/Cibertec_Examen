(function () {
    'use strict';

    angular.module('app').controller('applicationController', applicationController);

    applicationController.$inject = ['$state', '$scope', 'configService', 'localStorageService'];

    function applicationController($state, $scope, configService, localStorageService) {
        var vm = this;

        vm.inicio = inicio;
        vm.miembro = miembro;
        vm.corporacion = corporacion;


        $scope.init = function (url) {
            configService.setApiUrl(url);
        }

        function inicio() {
            $state.go("inicio");
        }

        function miembro() {
            $state.go("miembro");
        }

        function corporacion() {
            $state.go("corporacion");
        }
        
    }


})();