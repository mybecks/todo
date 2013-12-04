"use strict";

/* Controllers */

function IndexCtrl($scope, $http, $route, $routeParams, $location) {
    var lastClickedProjectId;

    $http.get('/api/projects').
    success(function(data, status, headers, config) {
        $scope.projects = data.projects;
    });


    $scope.getTasks = function(projectId){
        lastClickedProjectId = projectId;
        $http.get('/api/project/' + projectId).
        success(function(data) {
            // var arr = [];
            // arr.push(data.post);
            $scope.tasks = data.project.tasks;
        });
    };

    $scope.myFunc = function(){
        console.log(lastClickedProjectId);
        console.log($scope.newtask);

        var newTask = {
            projectId: lastClickedProjectId,
            task: $scope.newtask
        };

        $http.post('/api/addTask', newTask).
            success(function(data) {
                console.log(data);
                $location.path('/');
        });

        $scope.newtask = '';
    };

    $scope.createNewProject = function(){
        $scope.test = 'test';
        // var $container = $('<div />');
        // $container.appened('<input type="text" />');
        // $('.add-project').appened($container);
        // // $scope.form = {};
        // // $scope.submitPost = function () {
        // //     $http.post('/api/project', $scope.form).
        // //         success(function(data) {
        // //             $location.path('/');
        // //         });
        // // };
    };

}

function AddProjectCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/api/project', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function AddTaskCtrl($scope, $http, $location) {
    console.log('here');    
}


// function ReadProjectCtrl($scope, $http, $routeParams) {
//   $http.get('/api/project/' + $routeParams.id).
//     success(function(data) {
//         var arr = [];
//         arr.push(data.post);
//         $scope.tasks = arr;
//     });
// }
