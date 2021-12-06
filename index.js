/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import PushNotification from "react-native-push-notification";

// PushNotification.configure({
//     // (optional) Called when Token is generated (iOS and Android)
//     onRegister: function (token) {
//       console.log("FCM TOKEN:", token);
//     },

//     // (required) Called when a remote is received or opened, or local notification is opened
//     onNotification: function (notification) {
//       console.log("NOTIFICATION:", notification);

//     //   PushNotification.localNotification({
//     //     /* Android Only Properties */
//     //     channelId: "fantasy_sport_channel", // (required) channelId, if the channel doesn't exist, notification will not trigger.
//     //     vibrate: true, // (optional) default: true
//     //     priority: "high", // (optional) set notification priority, default: high
//     //     ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
//     //     shortcutId: "shortcut-id", // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
//     //     actions: ["Yes", "No"], // (Android only) See the doc for notification actions to know more
//     //     /* iOS and Android properties */
//     //     title: "My Notification Title", // (optional)
//     //     message: "My Notification Message", // (required)
//     //     playSound: true, // (optional) default: true
//     //     soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
//     //   });

//       // process the notification

//       // (required) Called when a remote is received or opened, or local notification is opened
//     //   notification.finish(PushNotificationIOS.FetchResult.NoData);
//     },

//     // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//     onAction: function (notification) {
//       console.log("ACTION:", notification.action);
//       console.log("NOTIFICATION:", notification);

//       // process the action
//     },

//     // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//     onRegistrationError: function(err) {
//       console.error(err.message, err);
//     },

//     // IOS ONLY (optional): default: all - Permissions to register.
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },

//     // Should the initial notification be popped automatically
//     // default: true
//     popInitialNotification: true,

//     /**
//      * (optional) default: true
//      * - Specified if permissions (ios) and token (android and ios) will requested or not,
//      * - if not, you must call PushNotificationsHandler.requestPermissions() later
//      * - if you are not using remote notification or do not have Firebase installed, use this:
//      *     requestPermissions: Platform.OS === 'ios'
//      */
//     requestPermissions: true,
//   });

// //   messaging().setBackgroundMessageHandler(async remoteMessage => {
// //     console.log('Message handled in the background!', remoteMessage);
// //   });

AppRegistry.registerComponent( appName, () => App );
