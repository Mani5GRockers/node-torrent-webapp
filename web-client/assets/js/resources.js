'use strict';
var connections = angular.module('connection', ['ngResource']);

connections.factory('Torrents', function ($resource) {
    return $resource('/torrents/:torrentId',{ action:'none' }, {
        'delete': {method: 'POST', params: {action:'delete'}, isArray:true},
        'toggle': {method : 'POST', params:{action:'toggle'}, isArray:true}
    });
});

connections.factory('Options', function ($resource) {
    return $resource('/options', {});
});