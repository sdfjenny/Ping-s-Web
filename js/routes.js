(function(){
'use strict';

angular.module('MyBlogApp')
.config(RoutesConfig);

/**
 * Configures the routes and views
 */
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider){
	// Routes
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	 .state('register',{
		 url: '/register',
		 templateUrl: "js/register/register.html",
		 controller: 'RegisterController',
		 controllerAs: 'registerCtrl'
		 
		 
		 
		 
	 })
	 
	
	 .state('home',{
		 url: '/',
		 templateUrl: "js/home/home-snippet.html"
		 
		 
		 
		 
	 })
	 
	 
	 .state('country',{
		url:'/country',
		templateUrl: "js/home/country-snippet.html",
		controller: 'CountryController',
		controllerAs: 'CountryCtrl',
		resolve:{
		countryContent: ['GetJsonService', function (GetJsonService){
			return GetJsonService.getCountryJson();
		}]}
		
	 
	 
	 })
	 
	 .state('search',{
		 url: '/search',
		 templateUrl: "js/home/searcher-snippet.html",
		 
		 
		 
		 
		 
		 
		 
	 })
	 
	 
	 
	 
	 
	 
	 
	 
	 .state('sight',{
		 url:'/country/{category}',
		 templateUrl: "js/home/sight-snippet.html",
		 
		 controller: 'ArticleController',
		 controllerAs: 'ArticleCtrl',
		 resolve:{
			 articleContent: ['$q', '$timeout', '$stateParams', 'GetJsonService', function($q, $timeout, $stateParams, GetJsonService){
				 var defer = $q.defer();
				 $timeout(function(){
					 defer.resolve(GetJsonService.getSightJson($stateParams.category));
					 
					 
				 }, 2000);
				 
				 return defer.promise;
				 
				 
				 
				 /*console.log(GetJsonService.getSightJson($stateParams.category));
				 return GetJsonService.getSightJson($stateParams.category);*/
				 
			 }]
		 }
		 
		 
		 
		 
	 });




}





})();