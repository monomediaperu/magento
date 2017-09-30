(function () {

    'use strict';

    angular.module('frontApp')
        .directive('appHeader', appHeader);

    function appHeader() {
        return {
            replace: true,
            restrict: 'E',
            scope: {},
            templateUrl: 'scripts/shared/header/header.html',
            controller: appHeaderCtrl,
            controllerAs: 'vm'
        };
        
        function appHeaderCtrl() {
            var vm = this;

            vm.collapseModal = collapseModal;
            
            function collapseModal() {
                angular.element('.navbar-collapse').collapse('hide');;
            }
        }
    }
}());