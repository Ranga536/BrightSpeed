var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'./signinpage.html'
    }).when('/register',{
        templateUrl:'./registerpage.html'
     }).otherwise({
        redirectTo:"/"
     })

})