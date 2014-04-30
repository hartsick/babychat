var babyApp = angular.module('BabyApp', ["firebase"]);
babyApp.controller("BabyCtrl", function($scope, $firebase){

	var babyRef = new Firebase("https://babychat.firebaseio.com/chat");

	$scope.chat = $firebase(babyRef);

	$scope.addMessage = function(){
		// Add manually using standard JavaScript
		$scope.timestamp = Date.now();
		babyRef.push( {timestamp:$scope.timestamp, message:$scope.message, username:$scope.username} );
		// Clear text input after submission
		$scope.timestamp = $scope.message = "";
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