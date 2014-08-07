'use strict';

enterprise.controller('projectController', ['$scope','$route','$modal','projectService',function($scope,$route,$modal,projectService) {
    $scope.projects = projectService.getAllProjects();
    $scope.deleteProject=function(projectID,index){
        projectService.deleteProject(projectID).$promise.then(function(){
            $scope.projects.splice(index, 1);
            console.log('Index is: ' + index);
        },function(){
            console.log('Delete failed');
        });
    };
    
    $scope.editProject=function(project){
        
        /*$modal.open({
            templateUrl: '../../views/editProject.html',
            controller: 'editProjectController',
            resolve: {
                myproject: function(){
                    return project;
                }
            }
        });*/
    };
    

    /**
    @open() - Opens the modal dialog for adding a project
    */
    $scope.open = function (size) {
        var modelScreen=$modal.open({
          templateUrl: '../../views/addProject.html',
          controller: 'addProjectController',
            size:size
        });
    };
}]);
