define([
	'angularAMD', 
	'routes', 
	'angular-route', 
	'directive-sidebar', 
	'factory-sidebar'
	], function(angularAMD, Routes){
	
	var app = angular.module('app', ['ngRoute']);
	
	app.config(function($routeProvider){
		$routeProvider
			.when('/:language?',
				{redirectTo : ':language?/my-tasks/all'})
			.when('/:language?/my-tasks/:status',
				angularAMD.route(Routes.MyTasks))
			.when('/:language?/my-team/tasks/:status',
				angularAMD.route(Routes.MyTeam))
			.when('/:language?/my-process/list/:status',
				angularAMD.route(Routes.MyProcesses))
			.when('/:language?/my-process/new',
				angularAMD.route(Routes.NewProcess))
			.when('/:language?/my-process/view',
				angularAMD.route(Routes.ProcessViewList))
			.when('/:language?/my-process/view/:id',
				angularAMD.route(Routes.ProcessView))
			.when('/:language?/process-templates/new',
				angularAMD.route(Routes.ProcessTemplateCreate))
			.when('/:language?/process-templates/view',
				angularAMD.route(Routes.ProcessTemplateViewList))
			.when('/:language?/process-templates/view/:id',
				angularAMD.route(Routes.ProcessTemplateView))
			.when('/:language?/process-templates/edit',
				angularAMD.route(Routes.ProcessTemplateEditList))
			.when('/:language?/process-templates/edit/:id',
				angularAMD.route(Routes.ProcessTemplateEdit))
			.otherwise(Routes.NotFound)
	});
			
	return angularAMD.bootstrap(app);
	
});