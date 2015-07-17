var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";


    this.header = "views/header.html";
    this.content = "views/content.html";
    //    this.footermenu = "views/footermenu.html";
    this.footer = "views/footer.html";
    this.login = "views/login.html";

    var d = new Date();
    this.year = d.getFullYear();
});