// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
	'ionic',
	'ionic.service.core',
	'config',
	'ionic.service.core',
	'ionic.service.push',
	'barebone.common',
	'barebone.infrastructure',
	'barebone.apprate',
	'barebone.news',
	'barebone.map',
	'barebone.home',
	'barebone.push',
	'barebone.menu',
	'barebone.position',
	'barebone.feedback',
	'barebone.oauth',
	'barebone.stripe',
	'barebone.test',
	'barebone.about',
	'barebone.welcome',
	'barebone.profile',
	'barebone.referrals',
	'gMaps',
	'ngCordova',
	'angularMoment', // MDB
	'LocalStorageModule' // MDB
])

.value('_', window._)

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($urlRouterProvider, $compileProvider) {
	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
	// if none of the above states are matched, use this as the fallback
	//$urlRouterProvider.otherwise('/app/home');
	$urlRouterProvider.otherwise('/app/home');
});
