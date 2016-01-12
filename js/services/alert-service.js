(function () {
    'use strict';

    var service = angular.module('app.services');
    service.factory('alertService', function ($rootScope, $timeout) {
        var alertService = {};
        $rootScope.alerts = [];
        $rootScope.closeAlert = function (index) {
            $rootScope.alerts.splice(index, 1);
        };

        alertService.addSuccess = function (mensagem) {
            var alert = {
                type: 'success',
                msg: mensagem,
                lockScreen: false
            };
            this.add(alert);
        };
        alertService.addError = function (mensagem) {
            var alert = {
                type: 'danger',
                msg: mensagem,
                lockScreen: true
            };
            this.add(alert);
        };
        alertService.addWarning = function (mensagem) {
            var alert = {
                type: 'warning',
                msg: mensagem,
                lockScreen: false
            };
            this.add(alert);
        };
        alertService.add = function (alertTmp) {
            if (alertTmp.msg && alertTmp.msg.indexOf('\n')) {
                var type = alertTmp.type;
                var msgs = alertTmp.msg.split('\n');
                var lockScreen = alertTmp.lockScreen;
                for (var m in msgs) {
                    if (msgs[m] !== '') {
                        var alert = {
                            type: type,
                            msg: msgs[m],
                            lockScreen: lockScreen
                        };
                        if (!$rootScope.alerts[0]) {
                            alertService._insertAlert(alert);
                        } else if ($rootScope.alerts[0].type != 'danger') {
                            $rootScope.alerts.pop();
                            alertService._insertAlert(alert);
                        }
                    }
                }
            }
        };
        alertService._insertAlert = function (alert) {
            $rootScope.alerts.push(alert);
            $timeout(function () {
                var index = $rootScope.alerts.indexOf(alert);
                if (index != -1 && $rootScope.alerts[index].type != 'danger') {
                    $rootScope.alerts.splice(index, 1);
                }
            }, 3000);
        };
        return alertService;
    })
}());