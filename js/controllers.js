var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngMaterial', 'ui.bootstrap', 'highcharts-ng']);

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
                }]
  }]);

phonecatControllers.controller('gridview', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService, $timeout, $q, $log) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("girdview");
        TemplateService.content = "views/gridview.html";
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        //outo fill
        var self = this;
        self.simulateQuery = false;
        self.isDisabled = false;
        // list of `state` value/display objects
        self.states = loadAll();
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
                $log.info('Item changed to ' + JSON.stringify(item));
            }
            /**
             * Build `states` list of key/value pairs
             */
        function loadAll() {
                var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
                return allStates.split(/, +/g).map(function (state) {
                    return {
                        value: state.toLowerCase(),
                        display: state
                    };
                });
            }
            /**
             * Create filter function for a query string
             */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        //        $scope.demo = {
        //            topDirections: ['left', 'up'],
        //            bottomDirections: ['down', 'right'],
        //            isOpen: false,
        //            availableModes: ['md-fling', 'md-scale'],
        //            selectedMode: 'md-fling',
        //            availableDirections: ['up', 'down', 'left', 'right'],
        //            selectedDirection: 'up'
        //        };
}]);

phonecatControllers.controller('dashboard', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("dashboard");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/dashboard.html";
        $scope.navigation = NavigationService.getnav();



        // piecharts
       
    $scope.addPoints = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.chartConfig.series.push({
            data: rnd
        })
    }

    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.swapChartType = function () {
        if (this.chartConfig.options.chart.type === 'line') {
            this.chartConfig.options.chart.type = 'bar'
        } else {
            this.chartConfig.options.chart.type = 'line'
            this.chartConfig.options.chart.zoomType = 'x'
        }
    }

    $scope.toggleLoading = function () {
        this.chartConfig.loading = !this.chartConfig.loading
    }

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },

        loading: false
    }

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