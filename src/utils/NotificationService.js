import messaging from '@react-native-firebase/messaging';
// function netInfoStatus() {
//     NetInfo.addEventListener(state => {
//       console.log("Connection type", state.type);
//       console.log("Is connected?", state.isConnected);
//       globals.isInternetConnected = state.isConnected;
//     });
//   }
export const NotificationHandler = () => {
    checkPermission()
    createNotificationListeners()
    // netInfoStatus()
}


function createNotificationListeners() {
    // PushNotification.configure({
    //     onNotification: function (notification) {
    //         console.log("NOTIFICATION:", notification);
    //         if (notification.userInteraction) {
    //             navigate("Wallet")
    //         }
    //     },
    //     onRegistrationError: function (err) {
    //         console.error(err.message, err);
    //     },
    //     permissions: {
    //         alert: true,
    //         badge: true,
    //         sound: true,
    //     },
    //     popInitialNotification: true,
    //     requestPermissions: true,
    // });
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
      });
  
      // Check whether an initial notification is available
    //   messaging()
    //     .getInitialNotification()
    //     .then(remoteMessage => {
    //       if (remoteMessage) {
    //         console.log(
    //           'Notification caused app to open from quit state:',
    //           remoteMessage.notification,
    //         );
    //         setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
    //       }
    //       setLoading(false);
    //     });
  
}
async function checkPermission() {
    const enabled = await messaging().hasPermission();
    if (enabled) {
        getToken();
    } else {
        requestPermission();
    }
}
async function getToken() {
    // let fcmToken = await AsyncStorage.getItem('fcmToken');
    // if (!fcmToken) {
    let fcmToken = await messaging().getToken();
    // if (fcmToken) {
    // user has a device token
    // globals.fcmToken = fcmToken
    console.log('Fcm Token --->', fcmToken);
    // await AsyncStorage.setItem('fcmToken', fcmToken);
    //   }
    // } else {
    //   console.log('Fcm Token --->', fcmToken);
    //   // AsyncStorage.setItem('fcmToken', fcmToken);
    //   globals.fcmToken = fcmToken;
    //   console.log('User Have All Ready Fcm Token')
    // }
}
async function requestPermission() {

    try {
        await messaging().requestPermission();
        // User has authorised
        getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
}

