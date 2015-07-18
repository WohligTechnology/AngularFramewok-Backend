var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngMaterial', 'ui.bootstrap']);

phonecatControllers.controller('login', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.list = 3;
  }]);

phonecatControllers.controller('user', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("user");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/user.html";
        TemplateService.list = 1;
        $scope.navigation = NavigationService.getnav();

        //tables

        $scope.values = [
            {
                "firstName": "John",
                "lastName": "Doe",
                "email": "john@gmail.com",
                "facebook": "1"
                },
            {
                "firstName": "Anna",
                "lastName": "Smith",
                "email": "anna@gmail.com",
                "facebook": "2"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "3"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "4"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "5"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "6"
                },
            {
                "firstName": "Anna",
                "lastName": "Smith",
                "email": "anna@gmail.com",
                "facebook": "2"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "3"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "4"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "5"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "6"
                },
            {
                "firstName": "Anna",
                "lastName": "Smith",
                "email": "anna@gmail.com",
                "facebook": "2"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "3"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "4"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "5"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "6"
                },

            {
                "firstName": "Anna",
                "lastName": "Smith",
                "email": "anna@gmail.com",
                "facebook": "2"
            },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "3"
            }]



  }]);

//phonecatControllers.controller('sidemenu', ['$scope', 'TemplateService', 'NavigationService',
//  function ($scope, $mdSidenav, TemplateService, NavigationService) {
//        $scope.template = TemplateService;
//        TemplateService.title = $scope.menutitle;
//        $scope.navigation = NavigationService.getnav();
//
//  }]);

phonecatControllers.controller('portfolio', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Portfolio");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);
phonecatControllers.controller('forms', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Forms");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.loginpage = function () {
            location.href = '#/login.html';
        };
  }]);