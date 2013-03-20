'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

app.factory('DataService', function (){
    var topics = [
        {"id": 0, "date": "2013-06-06", "title":"Mongo(DB) only pawn... in game of life", "speaker":"Rob Dudley"},
        {"id": 1, "date": "2013-06-06", "title":"Ember.js - The educated javascript MV* choice", "speaker":"Paul Cowan"},
        {"id": 2,"date": "2013-06-07", "title":"An introduction to Sinatra and Ruby - swing when you're winning", "speaker":"Matt Gifford"}
    ];

    return {
        get: function(index){
            return topics.slice(index, index+1);
        },
        all: function (){
            return topics;
        },
        count: function (){
            return topics.length;
        }


    }
})