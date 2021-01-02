/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/

firebase.initializeApp(
    {
            apiKey: "AIzaSyCS8XBPnWZEi-g1XhYQze8c08ouoWrUo6A",
            authDomain: "pushnotfi-90d30.firebaseapp.com",
            databaseURL: "https://itdemo-push-notification.firebaseio.com",
            projectId: "pushnotfi-90d30",
            storageBucket: "pushnotfi-90d30.appspot.com",
            messagingSenderId: "281214677250",
            appId: "1:281214677250:web:1c2f61ffa81066f680921b",
            measurementId: "G-DNGNTDMB3V"
            // measurementId: "G-R1KQTR3JBN"
        }
        );

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
