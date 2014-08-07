'use strict';

enterprise.controller('addProjectController',function($scope,projectService) {
    $scope.saveData=function(newProject){
        projectService.saveProject(newProject).$promise.then(function(){
            console.log('Successfully inserted ' + newProject.projectName);
            //$scope.projects.splice(1,0,newProject);
        });        
        $scope.newProject={};
    };
});