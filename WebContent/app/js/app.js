var routerApp = angular.module('routerApp', ['ngTouch', 'ui.grid', 'ui.grid.edit','ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/partials/partial-home.html'
        }).
        
        state('home.list',{
        	url:'/list',
        	templateUrl:'app/partials/partial-home-list.html',
        	controller: 'uiGridcontroller'
        
        }).
        
        state('home.paragraph',{
        	url: '/paragraph',
        	templateUrl: 'app/partials/partial-paragraph.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url:'/about',
            views:{
            	//main template will place here
            	'':{templateUrl: 'app/partials/partial-about.html'},
            	// child views will define here
            	'columnOne@about':{template:'Look i am in column one'},
            	
            	//column 2 wth controller
            	'columnTwo@about':{
            		templateUrl : 'app/partials/table-data.html',
            		controller :'scotchController'
            		}
            }
        });
        
});

