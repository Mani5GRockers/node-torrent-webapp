'use strict';
var connections = angular.module('connection', ['ngResource']);

connections.factory('Torrents', function ($resource) {
    return $resource('/torrentList', {});
});

connections.factory('Options', function ($resource) {
    return $resource('/options', {});
});