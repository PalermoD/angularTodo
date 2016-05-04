angular.module("angularTodo", [])
   .controller('mainCtrl', function($scope) {
  	$scope.helloWorld = function(){
  		console.log("hello there");
  	};

  	$scope.todos = [
       {"name": "clean room"},
       {"name": "finish app"},
       {"name": "do laundry"}
     ]
 });