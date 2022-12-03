import userClass from "../classes/user.js";
import drug from "../classes/drug.js";
import shoppingCart from "../classes/shoppingCart.js";

const drugApp = angular.module('drugApp',['ngRoute']);
let userList = [];
let logedUser = null;
let drugs = new Map();
let shopCart = new Map();

drugApp.config(($routeProvider)=>{ // SPA Router part
    $routeProvider
    .when('/',{
        templateUrl:'./templates/login.html',
        controller: 'loginCtrl'
    })
    .when('/druglist',{
        templateUrl:'./templates/drugList.html',
        controller:'drugCtrl'
    })
    .when('/order',{
        templateUrl:'./templates/manageOrder.html',
        // controller: 'orderCtrl'
    })
    .when('/report',{
        templateUrl:'./templates/logReport.html',
        // controller: 'reportCtrl'
    })
    .when('/signout',{
        templateUrl:'./templates/signout.html',
        controller: 'signoutCtrl'
    }) 
    .otherwise({
        templateUrl:'./templates/404.html'
    })
});

drugApp.run(function($rootScope,$location){
    fetch('./data/user-details.json').then(
        (data)=>{
            data.json().then((users)=>{
                    userList.push(users); //take the json data to store in array
            })
        }
    )
    // console.log(userList);
    $rootScope.shopProduct = [];
    // if(!$rootScope.logFlag){
    //     $location.path('/');
    // }
    if(sessionStorage.getItem('user')){
        $rootScope.logFlag = true;
        let user = JSON.parse(sessionStorage.getItem('user'));
        logedUser = new userClass(user.userid,user.fName,user.lName,user.email,user.phone,user.username,user.role);
        $rootScope.logedUser = logedUser;
        $rootScope.shopCart = new shoppingCart(logedUser.toObject().userid);
        $location.path('/druglist');
    }
})
drugApp.controller('loginCtrl',function($scope,$rootScope,$location){
    $scope.login = function(){ //login function part
        userList.forEach(function(userObj,idx){
            let user = userObj[idx];
            if(user.username == $scope.uname && user.pass == $scope.pass){ // check the id and password
                console.log("comein");
                logedUser = new userClass(user.userid,user.fName,user.lName,user.email,user.phone,user.username,user.role);
                $rootScope.logedUser = logedUser;
                $rootScope.shopCart = new shoppingCart(logedUser.toObject().userid);
                // console.log(logedUser);
                sessionStorage.setItem('user',JSON.stringify(logedUser.toObject()))
                $location.path('/druglist');
            }
        })
    }
})
drugApp.controller('drugCtrl',function($scope,$rootScope,$http){
    $scope.user = $rootScope.logedUser.toObject();
    // console.log($scope.user);
    try{
        $http.get('./data/drugs-data.json').then(
            (response)=>{
                if(response.status==200){
                    $scope.drugsList = response.data;
                    // console.log($scope.drugsList);
                    response.data.forEach((value)=>{
                        // console.log(value);
                        let newDrugs = new drug(value.drugID,value.drugName,value.price,value.productOf);
                        drugs.set(value.drugId,newDrugs);
                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    }catch(e){
        console.log(e);
    };
    $scope.selected = function(drugID){
        let shDrug = '';
        // console.log(drugs);
        if($rootScope.shopCart.searchProduct(drugID)){
            shDrug = $rootScope.shopCart.getProduct(drugID);
            shDrug.amount += 1;
        }else{
            shDrug = {...drugs.get(drugID).toObject(),amount:1};

        }
        let item = {did:drugID,obj:shDrug};
        $rootScope.shopCart.addProduct(item);
        $rootScope.shopDrug = [];
        for(const value of $rootScope.shopCart.returnValues()){
            $rootScope.shopDrug.push(value);
        }
        $scope.total = $rootScope.shopCart.calTotal();
    };
    $scope.amountCh = (pr)=>{
        console.log(pr)
        let item = {did:pr.shDrug.did,obj:pr.shDrug};
        $rootScope.shopCart.addProduct(item);
    }
})
drugApp.controller('signoutCtrl',function($rootScope,$location){ //log out 
    // console.log("signout");
    sessionStorage.removeItem('user'); // In the session storage check the 'user' and remove
    $rootScope.logedUser = null; // 
    $rootScope.shopCart = null;
    $rootScope.shopProduct = null;
    $location.path('/');
})