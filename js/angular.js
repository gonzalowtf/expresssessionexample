	var app = angular.module('caca',[]);

    app.controller("ConT",['$scope','$http',function($scope,$http){
        var s = $http.get('/sessions');
        s.then(function (results){
            $scope.user = results;
        });
        this.log= function(){
            var request  = {
                username: "gonzalowtf",
                password : "aereomodelismo12",
                destroy: "NO"
            };
            $http.post('sessions',request);
            location.href = "/";
        };
        this.log2= function(){
            var request  = {
                destroy : "SI"
            };
            $http.post('sessions',request);
            location.href = "/";
        };
        this.log3 = function(){
            alert($scope.user.data.username);
            console.log($scope.user.data.username);
        };
        

    }]);
