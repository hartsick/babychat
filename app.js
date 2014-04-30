var babyApp = angular.module('BabyApp', ["firebase"]);
babyApp.controller("BabyCtrl", function($scope, $firebase){

	var babyRef = new Firebase(database);

	$scope.chat = $firebase(babyRef);
	$scope.username = "";

	$scope.addMessage = function(){
		console.log(event);
		// Check for click or enter press
		if (event.type == 'click' || event.keyCode == 13 && !event.shiftKey){
			// Add manually using standard JavaScript
			if ($scope.username == ""){
				$scope.username = "set yr username, dummy";
				for (var i = 0; i<10; i++){
					alert("Hey! Set your name!");
				}
			}

			$scope.timestamp = Date.now();
			babyRef.push( {timestamp:$scope.timestamp, message:$scope.message, username:$scope.username} );
			// Clear text input after submission
			$scope.timestamp = $scope.message = "";
		}
	};

	$scope.addUsername = function(){
		// Add manually using standard JavaScript
		babyRef.username = $scope.username;
		$scope.nameIsSet = true;
	};

	$scope.chatReset = function(){
		// Clear database
		babyRef.remove();
	}

	$scope.resetName = function(){
		$scope.nameIsSet = false;
	}

	$scope.chatroomName = "Baby Chat";

});