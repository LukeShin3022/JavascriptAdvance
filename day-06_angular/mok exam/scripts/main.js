const countryApp = angular.module('countryApp',['ngRoute']);

countryApp.config(($routeProvider)=>{
    $routeProvider
    .when('/',{
        templateUrl: './templates/welcome.html'
    })
    .when('/korea',{
        templateUrl: './templates/korea.html',
        controller:'flagCtrl'
    })
    .when('/canada',{
        templateUrl: './templates/canada.html',
        controller: 'flagCtrl'
    })
    .when('/usa',{
        templateUrl: './templates/usa.html',
        controller:'flagCtrl'
    })    
    .when('/cars',{
        templateUrl: './templates/cars.html'
    })
});

countryApp.controller('flagCtrl',function($scope, $location){
    $scope.flagSrc = "./img"+$location.path()+".jpg";
    console.log($location.path());
})