'use strict';

/* Controllers */

app.controller('ListCtrl', function ($scope,DataService){

    $scope.dateFilter = '';
    $scope.maxrows = 2;
    $scope.foobar= [{"heelo":true}];
    DataService.list( function (data){
        $scope.topics = data;
    });

    // used by pagination
    $scope.numOfPages = 300;
    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

});

app.controller('DetailCtrl', function($scope, $routeParams, DataService){
    var topicId = $routeParams.topicId;
    $scope.topic = DataService.get(topicId);
});
