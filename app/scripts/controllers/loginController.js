'use strict';

angular.module("loginModule", [])
	.controller("loginCtrl",['$scope','$http','$state', function($scope, $http, $state){

		$scope.init = function(){
			$scope.noMessage = false;
		}
		$scope.login = function(){
			var obj = {
				"emailAddress" : $scope.emailID,
				"password": $scope.pwd
			};
			$http({
					url: 'http://localhost:3000/api/admin/validateAdmin?emailAddress=' + $scope.emailID + "&password=" + $scope.pwd,
					method: "GET",
				}).then(function(response){
					if(response.data.result.message){
						$state.go("dashboard.home");
					}else{
						$scope.noMessage = true;
					}
				}, function(err){
					console.log("error while login : ");
					console.log(err);
				})
		}
		$scope.init();
	}]);