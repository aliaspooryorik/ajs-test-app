'use strict';

/* Controllers */

app.controller('ListCtrl', function($scope,DataService){
    // TODO refactor to use service
    $scope.dateFilter = '';
    $scope.topics = DataService.all();
});

app.controller('DetailCtrl', function($scope, $routeParams, DataService){
    var topicId = $routeParams.topicId;
    $scope.topic = DataService.get(topicId);
});
