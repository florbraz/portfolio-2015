define(['angularAMD'], function(app){
	
	app.factory('Sidebar', function($rootScope, $http){
		
		var Sidebar = $rootScope.$new(this);
				
		Sidebar.links = {
			
			get : function(){
				return $http.get('js/application-angular/json/sidebar.json')
					.then(function(response){
						return response;
					});
			}
		};
		
		Sidebar.amounts = {
			
			get : function(){
				return $http.get('js/application-angular/json/amounts.json')
					.then(function(response){
						return response;
					});
			}
		}
		
		return Sidebar;
	});
});