﻿(function () {
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