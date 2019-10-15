importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCc6ble_RBDGEkSyCa5WxBXJ7zA9MyknI0",
    authDomain: "pwa-pro-3fcf3.firebaseapp.com",
    databaseURL: "https://pwa-pro-3fcf3.firebaseio.com",
    projectId: "pwa-pro-3fcf3",
    storageBucket: "pwa-pro-3fcf3.appspot.com",
    messagingSenderId: "574184343847",
    appId: "1:574184343847:web:cfebd20ce5aa6ec7540102"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.body
    };
    return self.registration.showNotification(title, options);
});