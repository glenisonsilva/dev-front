(function () {
    'use strict';

    function deleteTaskController ($scope, $modalInstance) {
        $scope.title = 'Delete?';
        $scope.message = 'Do you confirm?';
        $scope.yesButton = 'YES';
        $scope.noButton = 'NO';

        $scope.delete = accept;
        $scope.cancel = cancel

        function accept() {
            $modalInstance.close(true);
        };

        function cancel () {
            $modalInstance.dismiss(false);
        };
    }

    angular.module('app').controller('deleteTaskController', deleteTaskController);
}());






