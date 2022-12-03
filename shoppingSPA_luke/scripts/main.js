import userClass from "../classes/user.js";
import product from "../classes/product.js";
import shoppingCart from "../classes/shoppingCart.js";
const shopApp = angular.module('shopApp',['ngRoute']);
let logedUser = null;
shopApp.congig(($routeProvider)=>{
    $routeProvider
    .when("/",{
        templateUrl: './templates/login.html',
        controller: 'loginCtrl'
    })
    .when("/product",{
        templateUrl:'./templates/products.html'
    })
    .when("cart",{
        templateUrl:'./templates/shopcart.html'
    })
    .otherwise({
        templateUrl:'./templates/404.html'
    })
});
shopApp.run(function($rootScope,$location){
    if(!$rootScope.logFlag){
        $location.path('/');
    }
})  
shopApp.controller('loginCtrl',function($scope,$rootScope,$location){
    $scope.login = function(){
        fetch('../data/customers.json').then(
            (data)=>{
                data.json().then((users)=>{
                    users.forEach((user)=>{
                        if(user.userName == $scope.uname && user.password == $scope.pass){
                            $rootScope.logFlag = true;
                            logedUser = userClass(user.customerId,user.userName,user.first_name,user.last_name,user.email);
                            $location.path('/products');
                        }

                    })

                })
                
            }
        )
    }
})