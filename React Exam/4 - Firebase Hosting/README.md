# Firebase Hosting

This app sets up a firebase hosting and authentication using both the email and password method and the Google Redirect Authentication method.(password reset links may have to be retrieved from email spam folder).

A mock list of subscribers can be accessed in the app's dashboard after authentication.

This first list("All Users") is generated using the randomuser.me api and paginated mostly client-side. The second list ("Premium Users") is a list of subscribers stored in a separate firestore database and is paginated server-side.

The App is hosted here on [Netlify](https://peppy-palmier-397c98.netlify.app)
