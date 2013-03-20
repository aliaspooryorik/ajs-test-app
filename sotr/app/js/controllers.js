'use strict';

/* Controllers */


function ListCtrl($scope,DataService){
    // TODO refactor to use service
    $scope.dateFilter = '';
    $scope.topics = DataService.all();
}

function DetailCtrl($scope, $routeParams, DataService){
    var topicId = $routeParams.topicId;
    $scope.topic = DataService.get(topicId);
}
/*
app.controller('DetailCtrl', function($scope){

});
 */