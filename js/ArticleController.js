(function(){
'use strict';




angular.module('MyBlogApp')
.controller('ArticleController', ArticleController);

ArticleController.$inject = ['articleContent'];
function ArticleController(articleContent){
	var ArticleCtrl = this;
	ArticleCtrl.articleContent = articleContent;
	
	
		
		
	

}






})();