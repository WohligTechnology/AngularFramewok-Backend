var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService',function()
{
	this.title="Home";
	this.meta="Google";
	this.header="Home";
	this.content="Demo is the content";
	this.sidebarurl="views/menu.html";
	this.changetitle=function(newtitle) {
		this.title=newtitle;
	};
});
