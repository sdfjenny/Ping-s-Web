(function(){
'use strict';



angular.module('MyBlogApp')
.controller('CountryController', CountryController);

CountryController.$inject = ['countryContent'];
function CountryController(countryContent){
	var CountryCtrl = this;
	CountryCtrl.countryContent = countryContent;
	


}












})();