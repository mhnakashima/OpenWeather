/*
	Avenue Code - Main Module
*/
angular
	.module('app', ['ngRoute', 'ngAnimate'])
	.config(['$qProvider', function ($qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
	}]);