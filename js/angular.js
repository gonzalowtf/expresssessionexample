	var app = angular.module('caca',[]);

    app.controller("ConT",['$scope','$http',function($scope,$http){
        this.log= function(){
            var request  = {
                username: "gonzalowtf",
                password : "aereomodelismo12",
                destroy: "NO"
            };
            $http.post('sessions',request);
        };
        this.log2= function(){
            var request  = {
                destroy : "SI"
            };
            $http.post('sessions',request);
        };
        
    }]);
