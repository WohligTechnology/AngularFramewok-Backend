var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
        name: "Dashboard",
        classis: "active",
        link: "#/dashboard",
        subnav: []
    }, {
        name: "User",
        active: "",
        link: "#/user",
        subnav: []
    }, {
        name: "Forms",
        classis: "",
        link: "#/forms",
        subnav: []
    }, {
        name: "Grid View",
        classis: "",
        link: "#/grid",
        subnav: []
    }];

    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    }
});