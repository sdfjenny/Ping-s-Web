(function(){
'use strict';


angular.module('MyBlogApp')
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItemsCheck', FoundItemsCheck);


function FoundItemsCheck(){
	var ddo = {
		templateUrl: "js/home/searcher-snippet.html",
		scope:{
			searcher: '<',
		
		},
		
	};
	return ddo;
}


NarrowItDownController.$inject = ['GetJsonService'];
function NarrowItDownController (GetJsonService){
	var Searcher = this;
	Searcher.name = "搜索";
	Searcher.showthings = false;
	Searcher.count = 0;
	
	
	
	
	
	Searcher.check = function (name){
		var allitems=GetJsonService.getCountryJson();
		
		var foundItems = [];
		
		var i;
		var n=0;
		for (i=0; i<Object.keys(allitems).length; i++){
			
			var title = Object.values(allitems)[n][0].title;
			
			var key = Object.keys(allitems)[n];
			
			
			if (name === ''){
				foundItems = [];
				break;
			}
			else if (title.indexOf(name) >= 0){
				foundItems.push (allitems[key]);
				n=n+1;
			} else {
				n=n+1;
				continue;
			}
			
			
		}
		Searcher.count = Searcher.count +1;
		Searcher.items = foundItems;
		if (foundItems.length >0){
			Searcher.showthings = true;
			$('#search-content').css('display', 'block');
			$('#search-content')
			.mouseover(function(){
				$('#search-content').css('display', 'block');
			})
			.mouseout(function(){
				$('#search-content').css('display', 'none');
			});
			
		}
		else {Searcher.showthings = false;
			$('#search-content').css('display', 'block');
			$('#search-content')
			.mouseover(function(){
				$('#search-content').css('display', 'block');
			})
			.mouseout(function(){
				$('#search-content').css('display', 'none');
			});}
		
		
		
		
		
	};
	
	
}



})();