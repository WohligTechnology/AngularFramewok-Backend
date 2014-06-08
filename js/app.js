// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/about', {
            templateUrl: 'views/template.html',
            controller: 'about'
        }).
        when('/message', {
            templateUrl: 'views/template.html',
            controller: 'message'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);