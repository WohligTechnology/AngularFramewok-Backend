var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod']);

phonecatControllers.controller('home', ['$scope', 'TemplateService',
  function ($scope, TemplateService,$timeout) {
        TemplateService.changetitle("Home");
        TemplateService.header = "Home";
      TemplateService.sidebarurl = "views/menu.html";
        $scope.template = TemplateService;
        $scope.homeactive = "active";
      $scope.mobileoshome="Apple";
        $scope.$watch('mobileoshome', function (newval,oldval) {
            console.log("From Home : " + oldval);
            console.log("From Home : " + newval);
            console.log("FROM HOME : "+ $(".demo2").text());
        });
        $scope.changemobileoshome=function() {
            $scope.mobileoshome="New IOS";
        }
  }]);

phonecatControllers.controller('about', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        TemplateService.changetitle("About");
        TemplateService.header = "About";
        TemplateService.sidebarurl = "views/menu2.html";
        $scope.template = TemplateService;
        $scope.aboutactive = "active";
     $scope.mobileos="Google";
     $scope.$watch('mobileos', function (newval,oldval) {
         console.log("From About : " + oldval);
         console.log("From About : " + newval);
     });
        // angular.bootstrap(document, ['demo']);
  }]);
phonecatControllers.controller('message', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        TemplateService.changetitle("Message");
        TemplateService.header = "Message";

        $scope.template = TemplateService;
        $scope.messageactive = "active";
  }]);
phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
  }]);