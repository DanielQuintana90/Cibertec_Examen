(function () {

    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = ['$http'];

    function dataService($http) {

        var service = {};

        service.getData = getData;
        service.postData = postData;
        service.putData = putData;
        service.deleteData = deleteData;

        return service;

        function getData(url) {
            return $http.get(url);
        }

        function postData(url, data) {
            return $http.post(url, data);
        }

        function putData(url, data) {
            return $http.put(url, data);
        }

        function deleteData(url, data) {
            return $http.delete(url, data);
        }

    }



})();
(function () {
    'use strict';

    angular
        .module('app')
        .factory('configService', configService);

    function configService() {

        var service = {};

        var apiUrl = undefined;
        var isLogged = false;
        service.setLogin = setLogin;
        service.getLogin = getLogin;
        service.setApiUrl = setApiUrl;
        service.getApiUrl = getApiUrl;

        return service;

        function setLogin(state) {
            isLogged = state;
        }

        function getLogin() {
            return isLogged;
        }

        function getApiUrl() {
            return apiUrl;
        }

        function setApiUrl(url) {
            apiUrl = url;
        }

    }

})();
(function () {
    angular.module('app').directive('modalPanel', modalPanel);

    function modalPanel() {
        return {
            templateUrl: 'app/components/modal/modal-directive.html',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@',
                buttonTitle: '@',
                saveFunction: '=',
                closeFunction: '=',
                readOnly: '=',
                isDelete: '='
            }
        };
    }

})();
(function () {
    'use strict';

    angular.module('app').controller('corporacionController', corporacionController);

    corporacionController.$inject = ['dataService', 'configService', '$state'];

    function corporacionController(dataService, configService, $state) {
        var apiUrl = configService.getApiUrl();
        var vm = this;

        vm.corporacion = {};
        vm.corporacionList = [];
        vm.modalButtonTitle = '';
        vm.readOnly = false;
        vm.isDelete = false;
        vm.modalTitle = '';
        vm.showCreate = false;

        vm.totalRecords = 0;
        vm.itemsPerPage = 25;
        vm.currentPage = 1;
        vm.maxSize = 10;

        vm.getCorporacion = getCorporacion;
        vm.create = create;
        vm.edit = edit;
        vm.delete = corporacionDelete;
        vm.list = list;
        vm.pageChanged = pageChanged;

        init();

        function init() {
            list();
        }
        
        function list() {
            dataService.getData(apiUrl + '/corporacion/' + vm.currentPage + '/' + vm.itemsPerPage)
                .then(function (result) {
                    vm.corporacionList = result.data;
                }, function (error) {
                    vm.corporacionList = [];
                    console.log(error);
                });
        }

        function getCorporacion(id) {
            vm.corporacion = null;
            dataService.getData(apiUrl + '/corporacion/' + id)
                .then(function (result) {
                    vm.corporacion = result.data;
                }, function (error) {
                    vm.corporacion = null;
                    console.log(error);
                });
        }

        function updateCorporacion() {
            if (!vm.corporacion) return;

            dataService.putData(apiUrl + '/corporacion', vm.corporacion)
                .then(function (result) {
                    vm.corporacion = {};
                    list();
                    closeModal();
                }, function (error) {
                    vm.corporacion = {};
                    console.log(error);
                });
        }


        function createCorporacion() {
            if (!vm.corporacion) return;

            dataService.postData(apiUrl + '/corporacion', vm.corporacion)
                .then(function (result) {
                    //getCorporacion(result.data.id)
                    vm.currentPage = 1;
                    pageChanged();
                    vm.showCreate = true;
                    closeModal();
                }, function (error) {          
                    console.log(error);
                });
        }

        function deleteCorporacion() {
            dataService.deleteData(apiUrl + '/corporacion/' + vm.corporacion)
                .then(function (result) { 
                    list();
                    closeModal();
                }, function (error) {
                    console.log(error);
                });
        }

        function create() {
            vm.corporacion = {};
            vm.modalTitle = 'Nueva corporacion';
            vm.modalButtonTitle = 'Crear';
            vm.readOnly = false;
            vm.modalFunction = createCorporacion;
            vm.isDelete = false;
        }

        function edit() {
            vm.showCreate = false;
            vm.modalTitle = 'Editar Corporacion';
            vm.modalButtonTitle = 'Actualizar';
            vm.readOnly = false;
            vm.modalFunction = updateCorporacion;
            vm.isDelete = false;
        }

        function detail() {
            vm.modalTitle = 'Crear Corporacion';
            vm.modalButtonTitle = '';
            vm.readOnly = true;
            vm.modalFunction = null;
            vm.isDelete = false;
        }

        function corporacionDelete() {
            vm.showCreate = false;

            vm.modalTitle = 'Borrar Corporacion';
            vm.modalButtonTitle = 'Borrar';
            vm.readOnly = false;
            vm.modalFunction = deleteCorporacion;
            vm.isDelete = true;
        }

        function closeModal() {
            angular.element('#modal-container').modal('hide');
        }

        function pageChanged() {       
            list();
        }

    }

})();
(function () {
    'use strict';

    angular.module('app').directive('productCard', productCard);

    function productCard() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                id: '@',
                productName: '@',
                supplierId: '@',
                unitPrice: '@',
                package: '@',
                isDiscontinued: '='
            },
            templateUrl: 'app/private/corporacion/directives/corporacion-card/corporacion-card.html',
            controller: directiveController
        };
    }

    function directiveController() {

    }

})();
(function () {
    'use strict';

    angular.module('app').directive('productForm', productForm);

    function productForm() {
        return {
            restrict: 'E',
            scope: {
                product: '='
            },
            templateUrl: 'app/private/corporacion/directives/corporacion-form/corporacion-form.html'
        };
    }

})();