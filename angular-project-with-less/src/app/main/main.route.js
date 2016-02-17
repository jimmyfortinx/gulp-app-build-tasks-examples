angular.module('powerfulApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html'
            });
            
        $urlRouterProvider.otherwise('/');
    });