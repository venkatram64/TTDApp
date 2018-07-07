'use strict';


var ttdApp = angular.module('ttdApp',[
        'ngRoute',
        'ttdApp.home.controllers',
        'ttdApp.search.controllers',
        'ttdApp.search.services',
        'ttdApp.registration.controllers',
        'ttdApp.admin.controllers'
]);

ttdApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home',{
        templateUrl: 'partials/home/home.html', 
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/search',{
        templateUrl: 'partials/search/search.html',
        controller: 'SearchCtrl'
    });
    $routeProvider.when('/registration',{
        templateUrl: 'partials/registration/registration.html',
        controller: 'RegistrationCtrl'
    });
    $routeProvider.when('/admin',{
        templateUrl: 'partials/admin/admin.html',
        controller: 'AdminCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

