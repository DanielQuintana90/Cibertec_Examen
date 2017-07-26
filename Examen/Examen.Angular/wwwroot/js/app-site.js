(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'LocalStorageModule',
        'ui.bootstrap'
    ]);

})();
(function () {
    'use strict';

    angular.module('app').config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("inicio", {
                url: '/inicio',
                templateUrl: 'app/home.html'
            })
            .state("miembro", {
                url: '/miembro',
                templateUrl: 'app/public/miembro/index.html'
            })
            .state("corporacion", {
                url: "/corporacion",
                templateUrl: 'app/private/corporacion/index.html'
            })
            .state("otherwise", {
                url: '*path',
                templateUrl: 'app/home.html'
            });
    }

})();
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