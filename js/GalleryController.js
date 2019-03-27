(function(){
'use strict';



var gallerylist = [
{
	name: "1",
	path: "images\\吟菊、赏菊\\image1.jpg",
	alt: "吟菊、赏菊"
	},
	{
	name: "2",
	path: "images\\吟菊、赏菊\\image2.jpg",
	alt: "吟菊、赏菊"
	},
	{
	name: "3",
	path: "images\\吟菊、赏菊\\image3.jpg",
	alt: "吟菊、赏菊"
	},
	{
	name: "4",
	path: "images\\吟菊、赏菊\\image4.jpg",
	alt: "吟菊、赏菊"
	},
	{
	name: "5",
	path: "images\\吟菊、赏菊\\image5.jpg",
	alt: "吟菊、赏菊"
	},
	{
	name: "6",
	path: "images\\吟菊、赏菊\\image6.jpg",
	alt: "吟菊、赏菊"
	},
	{
	name: "7",
	path: "images\\吟菊、赏菊\\image7.jpg",
	alt: "吟菊、赏菊"
	},
	{
	name: "8",
	path: "images\\吟菊、赏菊\\image8.jpg",
	alt: "吟菊、赏菊"
	}];

angular.module('MyBlogApp')
.controller('GalleryController', GalleryController);

GalleryController.$inject = ['$scope'];
function GalleryController($scope){
	$scope.gallerylist = gallerylist;
	


}


})();
