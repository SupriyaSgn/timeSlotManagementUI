'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
//angular.module('sbAdminApp')
angular.module('teacherModule',['modalModule'])
  .controller('teacherCtrl', ['$scope','$modal', '$timeout', '$log', function ($scope, $modal,$timeout, $log) {
    var ctrl = this;
    //var modalInstance;
    
    $scope.init = function(){
        $scope.teacherDetail = {};
        $scope.teacherArr = [];
    }
    $scope.viewTeacherProfile = function () {
    // var parentElem = parentSelector ? 
    //   angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $modal.open({
      //templateUrl: 'views/modal.html',
      templateUrl: 'viewTeacherProfile.html'
      //controller: 'modalCtrl'
    });

    modalInstance.result.then(function (data) {
        debugger;
      //$ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $scope.addTeacher = function(size) {
    var modalInstance = $modal.open({
      templateUrl: 'addTeacher.html',
      size: size,
      controller: 'modalCtrl',
      keyboard: false,
      backdrop: 'static'
    });
     modalInstance.result.then(function (data) {
      $scope.init();
        //$scope.teacherArr.push(data.action);
      //$ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }
  $scope.init();
}]);