***PRESENTING... BABYCHAT!***

BabyChat is the one and only chat geared specifically for babies young! and! old! It hooks up to Firebase for easy deployment, and allows for people to create their own small group chatrooms (since Hipchat doesn't!).

There's currently no user signup or authentication, so anyone who has the link can see content. Also, the database is cleared when the "reset chatroom" button is hit, so data doesn't persist. 

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


*Contributors:*

* Mike Wong (@mikewong79) & Christa Hartsock (@hartsick), AngularJS
* TJ Thomander (@hellotj), Design & CSS
