var demoApp=angular.module("demoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/login.html",controller:"LoginController"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginController"}).when("/home",{templateUrl:"views/home.html",controller:"HomeController"}).otherwise({redirectTo:"/"})}]);demoApp.factory("AuthenticationService",["$location",function(a){return{login:function(b){"Jay"!==b.username||"Mehta"!==b.password?alert("Username must be Jay and password must be Mehta"):a.path("/home")},logout:function(){a.path("/login")}}}]),demoApp.directive("showsMessageWhenHovered",function(){return{restrict:"A",link:function(a,b,c){var d=a.message;b.bind("mouseenter",function(){a.message=c.message,a.$apply()}),b.bind("mouseleave",function(){a.message=d,a.$apply()})}}}),angular.module("demoApp").controller("HomeController",["$scope","AuthenticationService",function(a,b){a.title="Awesome Home",a.message="Mouse Over these images to see a directive at work!",a.logout=function(){b.logout()}}]),angular.module("demoApp").controller("LoginController",["$scope","$location","AuthenticationService",function(a,b,c){window.scope=a,a.credentials={username:"",password:""},a.login=function(){c.login(a.credentials)}}]);