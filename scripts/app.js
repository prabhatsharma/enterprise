'use strict';

var enterprise = angular.module('enterprise', ['ngRoute','ngResource','ui.bootstrap','ngAnimate']);

enterprise.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'views/projects.html',
        controller: 'projectController'
    }).when('/resources',{
        templateUrl: 'views/resources.html'
    });
}]);


