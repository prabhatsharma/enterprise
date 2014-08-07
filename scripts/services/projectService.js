'use strict';

enterprise.factory('projectService',function($resource,$http){
    var service={};
    service.getAllProjects=function(){
        var data = $resource('http://localhost:1337/project');
        return data.query();
    };
    
    service.saveProject=function(project){
        var data = $resource('http://localhost:1337/project');
        return data.save({},project,function(sResponse){ 
            console.log(sResponse);
            return true;
        },function(error){
            console.log(error);
        });
    };
    
    service.updateProject=function(project){
        var data=$http.put('http://localhost:1337/project/' + project.id, project);
        console.log(data);
        return data;
    }
    
    
    service.deleteProject=function(projectID){
        var data = $resource('http://localhost:1337/project/:projectID',{id:projectID});
        console.log('Deleting ' + projectID);
        return data.delete();
    };
    return service;
});