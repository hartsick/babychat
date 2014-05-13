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

	$scope.chat = $firebase(babyRef);
	$scope.username = "";

	// Scroll window to most recent message
	// window.onload = {
 //    $('body').animate({
	// 	    scrollBottom: $('.last')
	// 	}, 2000);
	// }

	$scope.addMessage = function(){
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

	// STILL NEEDS WORK
	// $scope.scrollTo = function($last){
	// 	// Scroll window to new message
	// 	console.log($last);
 //    $('body').animate({
 //        scrollTop: $($last).offset().top
 //    }, 2000);
	// }

	$scope.chatroomName = "Baby Chat";

});

