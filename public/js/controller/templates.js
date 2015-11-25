define([
	'app',
	'ng-dialog',
	'factory-templates',
	'factory-resources'
	
	], function(app){
		
	app = angular.module('app', ['ngDialog']);
	
	app.controller('ProcessTemplateCreateCtrl', function($scope, Resources, Templates, ngDialog){
		
		$scope.Templates = Templates.modules;	
		$scope.isAddingActivity = false;
		$scope.isEdittingActivity = false;		
		$scope.newSteps = [];		
		$scope.newActivities = [];			
		$scope.newActivity = {};
		$scope.newStep = {};
		$scope.Templates.processViewData = {};
		
		$scope.createTemplateBasedOnAnother = function(){
			ngDialog.open({
				template : 'js/application-angular/view/include/create-template-based-on-another.html',
				controller: 'TemplateBasedOnAnotherCtrl'
			});
		};
		
		$scope.createStep = function(stepsLength){
			
			$scope.newSteps.push({
				id : stepsLength + 1,
				name : $scope.newStep.name
			});
			
			$scope.newStep = {};
			
			$scope.stepIsSelected = false;
		};
		
		$scope.listActivities = function(step){
			$scope.stepIsSelected = true;
		};
		
		$scope.loadActivity = function(activity){
			$scope.isEdittingActivity = true;
		};
		
		$scope.createActivity = function(){
			$scope.isAddingActivity = true;
		};
		
		$scope.saveActivity = function(activity){
			
			$scope.newActivities.push({
				name : $scope.newActivity.name,
				description : $scope.newActivity.description
			});
			
			$scope.newActivity = {};
			
			$scope.isAddingActivity = false;
		};
		
		$scope.Templates.getEmptyTemplate()
			.then(function(response){
				$scope.Templates.processViewData = response.data;
			});
			
		Resources.init()
			.then(function(response){
				$scope.resources = response.data;
			});
	});
	
	app.controller('TemplateBasedOnAnotherCtrl', function($scope, Templates){
		
		$scope.Templates = Templates.modules;
		$scope.processList = {};
				
		$scope.load = function(id){
			$scope.Templates.loadTemplate(id)
				.then(function(response){					
					
					if(typeof $scope.closeThisDialog === 'function'){
						$scope.Templates.processViewData = response.data;
						$scope.closeThisDialog(0);	
					}
				});
		};
		
		$scope.Templates.list()
			.then(function(response){
				$scope.processList = response.data;
			});
	});
	
	app.controller('ProcessTemplateViewCtrl', function($scope, $location, Templates){
		$scope.Templates = Templates.modules;
		$scope.processList = {};
		
		$scope.loadProcess = function(id){
			return $location.path('/process-templates/view/' + id);
		};
		
		$scope.Templates.list()
			.then(function(response){
				$scope.processList = response.data;
			});
	});
	
	app.controller('ProcessTemplatesViewListCtrl', function($scope, $location, Templates){
		$scope.Templates = Templates.modules;
		$scope.processList = {};
		
		$scope.loadProcess = function(id){
			return $location.path('/process-templates/view/' + id);
		};
		
		$scope.Templates.list()
			.then(function(response){
				$scope.processList = response.data;
			});
	});
	
	app.controller('ProcessTemplateEditListCtrl', function($scope, $location, Templates){
		
		$scope.Templates = Templates.modules;
		$scope.processList = {};
		
		$scope.loadProcess = function(id){
			return $location.path('/process-templates/edit/' + id);
		};
		
		$scope.Templates.list()
			.then(function(response){
				$scope.processList = response.data;
			});
	});
	
	app.controller('ProcessTemplateEditCtrl', function($scope, $location, Templates){
		
		$scope.Templates = Templates.modules;
		$scope.processList = {};
		$scope.processViewData = {};
		
		$scope.loadProcess = function(id){
			return $location.path('/process-templates/edit/' + id);
		};
		
		$scope.Templates.list()
			.then(function(response){
				$scope.processList = response.data;
			});
			
		$scope.Templates.get()
			.then(function(response){
				$scope.processViewData = response.data;
			});
	});
});