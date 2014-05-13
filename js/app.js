var babyApp = angular.module('BabyApp', ["firebase"]);

babyApp.filter('orderObjectBy', function(){
 return function(input, attribute) {
    if (!angular.isObject(input)){
     return input;
   	}

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
 }
});

babyApp.controller("BabyCtrl", function($scope, $firebase){

	var babyRef = new Firebase(database);

	// Load messages from Firebase
	$scope.chat = $firebase(babyRef);
	$scope.username = "";

	// Set chatroom name
	$scope.chatroomName = "Baby Chat";

	// Add new chat message
	$scope.addMessage = function(){

		// Check for click or press enter in message box
		if (event.type == 'click' || event.keyCode == 13 && !event.shiftKey){

			// If no username set, tell 'em
			if ($scope.username == ""){
				$scope.username = "set yr username, dummy";
				for (var i = 0; i<10; i++){
					alert("Hey! Set your name!");
				}
			}

			// Assign message timestamp
			$scope.timestamp = Date.now();

			// Send info to Firebase
			babyRef.push( {timestamp:$scope.timestamp, message:$scope.message, username:$scope.username} );

			// Clear text input after submission
			$scope.timestamp = $scope.message = "";

			// Scroll to bottom on new message
			$scope.scrollToBottom();
		}
	};

	$scope.setUsername = function(){
		babyRef.username = $scope.username;
		$scope.nameIsSet = true;
	};

	$scope.chatReset = function(){
		// Take down the perp's name
		$scope.thePerp = $scope.username;

		// Awaken the baby
		$scope.username = "THE OMNISCIENT BABY EYE";

		// Tell all the world what they've done
		$scope.message = $scope.thePerp + " reset the chatroom!!!!!";
		$scope.message = $scope.message.toUpperCase();

		// Clear the database
		babyRef.remove();

		// Add the baby's message to database
		$scope.addMessage();

		// Reset username
		$scope.username = "";
	}

	$scope.resetName = function(){
		$scope.nameIsSet = false;
	}

	$scope.scrollToBottom = function() {
		$('html, body').animate({
		   scrollTop: $('footer').offset().top
		}, 'slow');
	};

});

