To create own private group chat:

On Firebase.com...
1. Sign up for account on http://firebase.com
2. Create a new app
3. Copy link to Firebase data URL (should be http://nameofapp.firebaseio.com)


In local project directory...
1. Navigate to 'js' folder
2. Create a file named database.js
3. Paste the following in the file: 
      var database = "LINKTOFIREBASEAPP";
4. Save file


To host using Firebase...
1. Install Firebase CLI tools: https://www.firebase.com/docs/hosting.html
2. Navigate to project directory
3. In root folder of project directory, type: firebase init
4. In same directory, type: firebase deploy
5. Copy resulting link (should be http://nameofapp.firebaseapp.com) and send to friends!
