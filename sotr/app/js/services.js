'use strict';

/* Services */

// NOTE: to use resource must include angular-resource.min.js
app.factory('DataService', function ($http){
    var topics = [];
    var methods = {
        get: function(index){
            //return topics[index];
            return topics[ index ];
        },
        list: function ( callback ){
            $http.get('data/all.json').success(function (data) {
                callback( data );
            });
        },
        count: function (){
            return topics.length;
        }


    };

    methods.list( function( data ){
        topics = data;
    });

    return methods;
})