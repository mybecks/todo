"use strict";

var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/projects',
            controller: 'IndexCtrl'
        }).
        // when('/addTask', {
        //     templateUrl: 'partials/projects',
        //     controller: 'AddTaskCtrl'
        // }).
        // when('/readProject/:id', {
        //     templateUrl: 'partials/tasks',
        //     controller: 'ReadProjectCtrl'
        // }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});
