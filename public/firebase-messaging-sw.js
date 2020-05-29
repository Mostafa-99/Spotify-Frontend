importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');


firebase.initializeApp({

    messagingSenderId: "262598048193",
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

self.addEventListener('notificationclick', (event) => {
    if (event.action) {
        clients.openWindow(event.action);
    }
    event.notification.close();
}); 

// register service worker & handle push events
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
            updateViaCache: 'none'
        });
        messaging.useServiceWorker(registration);
        messaging.onMessage((payload) => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.body,
                icon: payload.notification.icon,
                actions: [
                    {
                        action: payload.fcmOptions.link,
                    }
                ]
            };
            registration.showNotification(title, options);           
        });
    });
}