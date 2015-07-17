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
        when('/about', {
            templateUrl: 'views/template.html',
            controller: 'about'
        }).
        when('/services', {
            templateUrl: 'views/template.html',
            controller: 'services'
        }).
        when('/portfolio', {
            templateUrl: 'views/template.html',
            controller: 'portfolio'
        }).
        when('/contact', {
            templateUrl: 'views/template.html',
            controller: 'contact'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);