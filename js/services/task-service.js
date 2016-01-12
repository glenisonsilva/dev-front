(function () {
    'use strict';

    var service = angular.module('app.services');

    service.factory('taskService', function ($http, HTTP_WEB_API) {
        return {
            tasks: {
                getAll: function (successCallback, errorCallback) {
                    return $http.get(HTTP_WEB_API + '/task/all').success(successCallback).error(errorCallback);
                },
                getDetails: function (id, successCallback, errorCallback) {
                    return $http.get(HTTP_WEB_API + '/task/' + id + '/details').success(successCallback).error(errorCallback);
                },
                delete: function (id, successCallback, errorCallback) {
                    return $http.delete(HTTP_WEB_API + '/task/' + id + '/delete').success(successCallback).error(errorCallback);
                },
                save: function (data, successCallback, errorCallback) {
                    return $http.post(HTTP_WEB_API + '/task/save', data).success(successCallback).error(errorCallback);
                },
                update: function (id, data, successCallback, errorCallback) {
                    return $http.put(HTTP_WEB_API + '/task/' + id + '/update', data).success(successCallback).error(errorCallback);
                }
            }           
        };
    });
}());