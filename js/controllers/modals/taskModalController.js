(function() {
	'use-strict'

	function taskModalController($scope, alertService, $modal, $modalInstance, task, title){

		$scope.cancel = cancel;
		$scope.save = accept;

		$scope.title = title;

		$scope.errors =
		{
			nameRequired: false,
			descriptionRequired: false
		}
		
		$scope.task = angular.copy(task);

		function cancel() {
            $modalInstance.close(false);
        };
		
		function accept(form) {
			if(validateForm(form))
			{
				var task = $scope.task;
            	$modalInstance.close(task);
			}
			
			
        }

        //Valida form
        function validateForm(form) {

        	var retorno = true;
            if (form.name.$error.required) {
                $scope.errors.nameRequired = true;
                retorno = false;
            } 
            if(form.description.$error.required){
            	$scope.errors.descriptionRequired = true;
            	retorno = false;
            }
            else {
                retorno = true;
            }
            return retorno;
        }
	}
		

	angular.module('app').controller('taskModalController', taskModalController);

}());