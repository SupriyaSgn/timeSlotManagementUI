'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
//angular.module('sbAdminApp')
angular.module('modalModule',['ui.bootstrap'])
  .controller('modalCtrl', ['$scope','$http', '$modalInstance', function ($scope, $http, $modalInstance) {

  	$scope.teacherDetail = {};
  $scope.ok = function (teacherDetail) {
  	$http({
					url: 'http://localhost:3000/api/admin/addTeacher',
					method: "POST",
					data: $.param(teacherDetail),
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function(response){
					if(response.data.result.message){
					    $modalInstance.close({ action: teacherDetail });
					}else{
						$scope.noMessage = true;
					}
				}, function(err){
					console.log("error while login : ");
					console.log(err);
				})
  };

  $scope.cancel = function () {
    $modalInstance.close();
  };
}]);