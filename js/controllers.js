var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngMaterial']);

phonecatControllers.controller('login', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("Home");
        //        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.list = 3;
        $scope.project = {
            description: 'Nuclear Missile Defense System',
            rate: 500
        };

  }]);
phonecatControllers.controller('user', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        //        $scope.menutitle = NavigationService.makeactive("About");
        //        TemplateService.title = $scope.menutitle;
        TemplateService.list = 1;
        $scope.navigation = NavigationService.getnav();
  }]);
phonecatControllers.controller('services', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Services");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);
phonecatControllers.controller('portfolio', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Portfolio");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);
phonecatControllers.controller('contact', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
  }]);