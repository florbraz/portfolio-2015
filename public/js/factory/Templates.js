define(['app'], function(app){
	
	app.factory('Templates', function($rootScope, $http){
		
		var Templates = $rootScope.$new(this);
		
		Templates.modules = {
				
			edit : function(id, data){
				
				/**
				 * Must change
				 * $http.get(URL)
				 * 
				 * to
				 * 
				 * $http.post(URL + id, data)
				 * 
				 * once the backend is integrated
				 */
				return $http.get('js/application-angular/json/template.json')
					.then(function(data){
						return data;
					});
			},
			
			get : function(id){
				return $http.get('js/application-angular/json/template.json')
					.then(function(data){
						return data;
					});
			},
			
			loadTemplate : function(id){
				return $http.get('js/application-angular/json/templateModel.json')
					.then(function(data){
						return data;
					});
			},
			
			getEmptyTemplate : function(){
				return $http.get('js/application-angular/json/emptyTemplate.json')
					.then(function(data){
						return data;
					});
			},
			
			list : function(){
				return $http.get('js/application-angular/json/templates.json')
					.then(function(data){
						return data;
					});
			}
		};
		
		return Templates;
		
	});
});