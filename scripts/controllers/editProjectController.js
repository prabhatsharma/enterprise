'use strict';

enterprise.controller('editProjectController', ['$scope','$modalInstance','myproject','projectService',function($scope,$modalInstance,myproject,projectService){
    $scope.project=myproject;
    console.log('In editProjectController');
    $scope.updateProject=function(existingProject){
        console.log('Executing editController.updateProject()');
        projectService.updateProject(existingProject);
    }
}]);