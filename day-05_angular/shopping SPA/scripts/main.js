import userClass from '../classes/user.js';
import product from '../classes/product.js';
import shoppingCart from '../classes/shoppingCart.js';
const shopApp = angular.module('shopApp',['ngRoute']);
let logedUser = null;
let products = new Map();
shopApp.config(($routeProvider)=>{
    $routeProvider
    .when('/',{
        templateUrl:'./templates/login.html',
        controller: 'loginCtrl'
    })
    .when('/products',{
        templateUrl:'./templates/products.html',
        controller: 'productCtrl'
    })
    .when('/cart',{
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
        fetch('./data/customers.json').then(
            (data)=>{
                data.json().then((users)=>{
                    users.forEach((user)=>{
                        if(user.userName==$scope.uname && user.password==$scope.pass){
                            $rootScope.logFlag = true;
                            logedUser = new userClass(user.customerId,user.userName,user.first_name,user.last_name,user.email);
                            $rootScope.logedUser = logedUser;
                            $location.path('/products');
                        }
                    })
                })
            }
        )
    }
});
shopApp.controller('productCtrl',function($scope,$rootScope,$http){
    $scope.user = $rootScope.logedUser.toObject();
    try{
        $http.get('./data/productList.json').then(
            (response) => {
                // console.log(response.data);
                if(response.status == 200){
                    $scope.productList = response.data; 
                    response.data.forEach((value)=>{
                        let newProduct = new product(value.pId, value.pName, value.price);
                        products.set(value.pId,newProduct);
                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    }catch(e){
        console.log(e);
    }

});