importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyDstl21Iann4t-odVPIMFTXpI5ToD1jIC0",
  authDomain: "totally-not-spotify.firebaseapp.com",
  databaseURL: "https://totally-not-spotify.firebaseio.com",
  projectId: "totally-not-spotify",
  storageBucket: "totally-not-spotify.appspot.com",
  messagingSenderId: "262598048193",
  appId: "1:262598048193:web:8eb027331acfe77f625740",
  measurementId: "G-YDVW3R60NT"
})

//const initMessaging=firebase.messaging()
const messaging = firebase.messaging();

messaging.usePublicVapidKey("BKWMGFcg3yIaZ8ONAeIORVydRfg1GFtMnKcCPV-jFyEXWAlbLv8nv9Wtsr4Gu5NsVHZTFl4yD0ZXcZpqsBvrIj8");

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
// Callback fired if Instance ID token is updated.

messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
      console.log('Token refreshed.');
      updateUIForPushEnabled(token);
      sendSubscriptionToServer(token);
      // Indicate that the new Instance ID token has not yet been sent to the
      try {
        const res = axios.put(this.context.baseURL + "me/notifications/token",
        {
          "token":token
          },
           {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
       if(res.status===204){
          console.log("Request Succesful and token is ", token)
      }
      } 
      catch (err) {
        console.log(err);
      }
      // ...
    }).catch((err) => {
      console.log('Unable to retrieve refreshed token ', err);
      showToken('Unable to retrieve refreshed token ', err);
    });
  });

/* self.addEventListener('notificationclick', (event) => {
    if (event.action) {
        clients.openWindow(event.action);
    }
    event.notification.close();
});  */

// register service worker & handle push events
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', async () => {
//         const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
//             updateViaCache: 'none'
//         });
//         messaging.useServiceWorker(registration);
//         messaging.onMessage((payload) => {
//             const title = payload.notification.title;
//             const options = {
//                 body: payload.data.body,
//                 icon: payload.data.icon,
//                 image: payload.data.image,
//                 click_action: payload.data.click_action,
//                 data:payload.data.click_action,
//                 actions: [
//                     {
//                         action: payload.fcmOptions.link,
//                     }
//                 ]
//             };
//             registration.showNotification(title, options);           
//         });
//     });
// }
self.addEventListener('push', async function(event) {
  event.waitUntil(
      self.registration.showNotification('title', {
        body: 'body'
      })
  );
});
// self.addEventListener('notificationclick', function(event) {
//   console.log('[firebase-messaging-sw.js] Received notificationclick event ', event);
  
//   var click_action = event.notification.data;
//   event.notification.close();
//   // This looks to see if the current is already open and
//   // focuses if it is
//   event.waitUntil(clients.matchAll({
//       type: "window"
//   }).then(function(clientList) {
//       for (var i = 0; i < clientList.length; i++) {
//           var client = clientList[i];
//           if (client.url == click_action  && 'focus' in client)
//               return client.focus();
//       }
//       if (clients.openWindow)
//           return clients.openWindow(click_action);
//       }));
  
//   });
  const showMessage = function(payload){
      console.log('showMessage', payload);
      const notificationTitle = payload.data.title;
      const notificationOptions = {
          body: payload.data.body,
          icon: payload.data.icon,
          image: payload.data.image,
          click_action: payload.data.click_action,
          data:payload.data.click_action
      };  
  
  
     self.registration.showNotification(notificationTitle,notificationOptions); 
  }   
  messaging.setBackgroundMessageHandler(showMessage);
  messaging.onMessage(showMessage);
  self.addEventListener('message', function (evt) {     
    console.log("self",self);
    showMessage( evt.data );
  })