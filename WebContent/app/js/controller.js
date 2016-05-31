routerApp.controller('scotchController', function($scope){
	  $scope.message = 'test';
	  
	  $scope.scotches = [
	              {
	            	  name: 'Maclim 12',
	            	  price : 50
	              },
	              {
	            	 name : 'Chivas Shegal royal',
	            	 price : 10000
	              },
	              {
	            	  name:'Glindfitch 1937',
	            	  price : 20000
	              }];
	  
  });
  
routerApp.controller('uiGridcontroller', ['$scope',function($scope){
	
	$scope.dogs = ['Pinky', 'Bunty','Scooty'];
	
	$scope.gridOptions = {
	        enableSorting: true,
	        columnDefs: [
	          { name:'firstName', field: 'first-name' },
	          { name:'1stFriend', field: 'friends[0]' },
	          { name:'city', field: 'address.city'},
	          { name:'getZip', field: 'getZip()', enableCellEdit:false}
	        ],
	        data : [      {
	                           "first-name": "Cox",
	                           "friends": ["friend0"],
	                           "address": {street:"301 Dove Ave", city:"Laurel", zip:"39565"},
	                           "getZip" : function() {return this.address.zip;}
	                       }
	                   ]
	      };
	 
	
	
}]);
