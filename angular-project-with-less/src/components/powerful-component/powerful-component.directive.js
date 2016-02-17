angular.module('powerfulApp')
    .directive('powerfulComponent', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/powerful-component/powerful-component.html'
        };
    });