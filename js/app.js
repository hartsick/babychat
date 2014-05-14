var babyApp = angular.module('BabyApp', ["firebase", "ngSanitize"]);
babyApp.controller("BabyCtrl", function($scope, $firebase){

	// Store Firebase information (from database.js)
	var babyRef = new Firebase(database);

	// Load messages from Firebase
	$scope.chat = $firebase(babyRef);
	$scope.username = null;
	$scope.message = null;

	// Set chatroom name
	$scope.chatroomName = "Baby Chat";

	// Add new chat message
	$scope.addMessage = function(){

		// Check for click or press enter in message box
		if (event.type == 'click' || event.keyCode == 13 && !event.shiftKey){

			// If no username set, tell 'em
			if ($scope.username == null ){
				$scope.username = "set yr username, dummy";
				for (var i = 0; i<10; i++){
					alert("Hey! Set your name!");
				}
			}

			if ($scope.message.length > 0) {

				// Assign message timestamp
				$scope.timestamp = Date.now();

				// Send info to Firebase
				babyRef.push( {timestamp:$scope.timestamp, message:$scope.message, username:$scope.username} );

				console.log($scope.babyForm.babyBody);

				// Clear text input after submission
				$scope.timestamp = $scope.message = null;
				$scope.babyForm.$setPristine();
				$scope.babyForm.babyBody = null;

			} 
			// else {
			// 	console.log('needs a body');
			// 	console.log($scope.babyForm.babyBody);
			// }
			// console.log($scope.message);
		}
	};

	// $scope.message.$on('change', function(){
	// 	console.log('change!')
	// });

	$scope.setUsername = function(){
		babyRef.username = $scope.username;
		$scope.nameIsSet = true;
	};

	$scope.chatReset = function(){
		// Take down the perp's name
		$scope.thePerp = $scope.username;
		if ($scope.thePerp == null){
			$scope.thePerp = "Someone sneaky";
		}

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
		$scope.username = $scope.thePerp;
	}

	$scope.resetName = function(){
		$scope.nameIsSet = false;
	}

	// Scroll to bottom of #chat-view on new message
	$scope.$watch(
    function () {
      return $('#chat-view').height();
    },
    function (newValue, oldValue) {
      if (newValue != oldValue) {
				$('html, body').animate({
				   scrollTop: $('footer').offset().top
				}, 20);
      }
    }
	);

});

