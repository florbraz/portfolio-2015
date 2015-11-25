define(function(){
	
	return {
	
		Home : {
			templateUrl : 'js/application-angular/view/my-tasks.html',
			controller : 'MyTasksCtrl',
			controllerUrl : 'controller/tasks'
		},
		
		MyTasks : {
			templateUrl : 'js/application-angular/view/my-tasks.html',
			controller : 'MyTasksCtrl',
			controllerUrl : 'controller/tasks'
		},
		
		MyTeam : {
			templateUrl : 'js/application-angular/view/my-team.html',
			controller : 'MyTeamCtrl',
			controllerUrl : 'controller/tasks'
		},
		
		MyProcesses : {
			templateUrl : 'js/application-angular/view/my-processes.html',
			controller : 'MyProcessesCtrl',
			controllerUrl : 'controller/processes'
		},
		
		ProcessView : {
			templateUrl : 'js/application-angular/view/process-view.html',
			controller : 'ProcessViewCtrl',
			controllerUrl : 'controller/processes'
		},
		
		ProcessViewList : {
			templateUrl : 'js/application-angular/view/process-view-list.html',
			controller : 'ProcessViewListCtrl',
			controllerUrl : 'controller/processes'
		},
		
		NewProcess : {
			templateUrl : 'js/application-angular/view/new-process.html',
			controller : 'NewProcessCtrl',
			controllerUrl : 'controller/processes'
		},
		
		ProcessTemplateCreate : {
			templateUrl : 'js/application-angular/view/process-template-create.html',
			controller : 'ProcessTemplateCreateCtrl',
			controllerUrl : 'controller/templates'
		},
		
		ProcessTemplateView : {
			templateUrl : 'js/application-angular/view/process-template-view.html',
			controller : 'ProcessTemplateViewCtrl',
			controllerUrl : 'controller/templates'
		},
		
		ProcessTemplateViewList : {
			templateUrl : 'js/application-angular/view/process-template-view-list.html',
			controller : 'ProcessTemplatesViewListCtrl',
			controllerUrl : 'controller/templates'
		},
		
		ProcessTemplateEditList : {
			templateUrl : 'js/application-angular/view/process-template-edit-list.html',
			controller : 'ProcessTemplateEditListCtrl',
			controllerUrl : 'controller/templates'
		},
		
		ProcessTemplateEdit : {
			templateUrl : 'js/application-angular/view/process-template-edit.html',
			controller : 'ProcessTemplateEditCtrl',
			controllerUrl : 'controller/templates'
		},
		
		NotFound : {
			templateUrl : '404.html'
		}
	};	
});