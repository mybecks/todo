function ProjectListCtrl ($scope, $http) {
    $scope.projects = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola XOOM with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM",
     "snippet": "The Next, Next Generation tablet."}
    ];


    $scope.onProjectClick = function(project) {
        alert(project.name);
        $http.get('todos.json').success(function(data) {
            $scope.todos = data;
        });
    };

}

ProjectListCtrl.$inject = ['$scope', '$http'];//due to minification
