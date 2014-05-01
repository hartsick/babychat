***To create own private group chat:***

**On Firebase.com...**
* Sign up for account on http://firebase.com
* Create a new app
* Copy link to Firebase data URL (should be http://nameofapp.firebaseio.com)


**In local project directory...**
* Navigate to 'js' folder
* Create a file named database.js
* Paste the following in the file: 
      var database = "LINKTOFIREBASEAPP";
* Save file


**To host using Firebase...**
* Install Firebase CLI tools:*https://www.firebase.com/docs/hosting.html
* Navigate to project directory
* In root folder of project directory, type: firebase init
* In same directory, type: firebase deploy
* Copy resulting link (should be http://nameofapp.firebaseapp.com) and send to friends!
