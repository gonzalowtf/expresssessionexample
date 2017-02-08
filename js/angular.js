	var app = angular.module('caca',[]);

    app.controller("ConT",['$scope','$http',function($scope,$http){
        this.log= function(){
            var request  = {
                username: "gonzalowtf",
                password : "aereomodelismo12"
            };
            $http.post('sessions',request);
        };
    }]);
