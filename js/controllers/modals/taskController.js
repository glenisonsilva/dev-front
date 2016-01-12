(function() {
	'use-strict'

	function taskController($scope, alertService, $modal){

		/*Fnction Scope*/
		$scope.deleteTask = deleteTask;
		$scope.editTask = editTask;
		$scope.totalTask = totalTask;
		$scope.addTask = addTask;
		
		/*Objects*/
		$scope.tasks = [{done: true, name:"Glenison", description:'Opaaa'}, {done: true, name:"oo", description:'Opaaa'}, {done: true, name:"hhh", description:'Opaaa'}];
		$scope.testando = function (obj)
		{
console.log(obj);
		}
		function addTask () {
            $modal.open({
                templateUrl: '/templates/modals/taskModal.html',
                controller: 'taskModalController',
                size:'sm',
                resolve: {
		        task: function () {
		          return task = {name: '', description: '', done:false};
		        },
		        title: function() {return 'Add'},
		      },
            }).result.then(function (result) {
                if (result) {
                	saveAction(result); ;
                    alertService.addSuccess('Successfully registered!');
                }
            });
        };

		function deleteTask($index){
			$modal.open({
                templateUrl: '/templates/modals/deletetaskModal.html',
                controller: 'deleteTaskController',
                size:'sm',               
            }).result.then(function (result) {
                if (result) {
                	deleteAction($index);
                    alertService.addSuccess('Deleted successfully');
                }
            });			
		}

		function editTask($index){
			$modal.open({
                templateUrl: '/templates/modals/taskModal.html',
                controller: 'taskModalController',
                size:'sm',
                resolve: {
		        task: function () {
		          return task = $scope.tasks[$index];
		        },
		        title: function() {return 'Edit'},
		      },
            }).result.then(function (result) {
                if (result) {
                	editAction($index, result);
                    alertService.addSuccess('Successfully registered!');
                }
            });
		}

		function totalTask()
		{
			return $scope.tasks.length;
		}

		function deleteAction($index)
		{
			var tasks = $scope.tasks;
			for (i=$index; i < tasks.length-1; i++) {
				tasks[i] = tasks[i+1];
			}

			tasks.pop();
		}

		function saveAction(result)
		{
			$scope.tasks.push(result)
		}

		function editAction($index, result)
		{
			$scope.tasks[$index] = result;
		}
		
	}

	angular.module('app.controllers', []).controller('taskController',taskController);

}());