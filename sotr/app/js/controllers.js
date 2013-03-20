'use strict';

/* Controllers */


function ListCtrl($scope,DataService){
    // TODO refactor to use service
    $scope.dateFilter = '';
    $scope.topics = DataService.all();
}

function DetailCtrl($scope, $routeParams){
    $scope.topicId = $routeParams.topicId;
}
/*
app.controller('DetailCtrl', function($scope){

});
 */