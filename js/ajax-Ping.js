(function(){
"use strict";

angular.module('MyBlogApp')
.service('AjaxService', AjaxService);

AjaxService.$inject = ['$q', '$timeout']
function AjaxService($q, $timeout){
	var service = this;
	
	service.loadjson = funnction(){
		return
	}
	
	
	
}


})();