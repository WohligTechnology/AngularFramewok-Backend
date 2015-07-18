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

phonecatControllers.controller('portfolio', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Portfolio");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);

phonecatControllers.controller('forms', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("forms");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/forms.html";
        $scope.navigation = NavigationService.getnav();

        $scope.clearValue = function () {
            $scope.myModel = undefined;
        };
        $scope.states = [
            {
                category: 'Maharastra',
                name: 'Mumbai'
            },
            {
                category: 'Maharastra',
                name: 'Nagpur'
            },
            {
                category: 'Maharastra',
                name: 'Pune'
            },
            {
                category: 'Maharastra',
                name: 'Nasik'
            },
            {
                category: 'Maharastra',
                name: 'Thane'
            },
            {
                category: 'Telgana',
                name: 'Hyderabad'
            },
            {
                category: 'Telgana',
                name: 'Green Pepper'
            },
            {
                category: 'Gujrat',
                name: 'Ahmedabad'
            }
      ];
}]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.loginpage = function () {
            location.href = '#/login.html';
        };
  }])
phonecatControllers.controller('sidemenuCtrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
    },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
    }
  ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

  }]);