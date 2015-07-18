// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'login'
        }).
        when('/user', {
            templateUrl: 'views/template.html',
            controller: 'user'
        }).
        when('/forms', {
            templateUrl: 'views/template.html',
            controller: 'forms'
        }).
        otherwise({
            redirectTo: '/user'
        });
  }]);