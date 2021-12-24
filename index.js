/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import PushNotification, { Importance } from "react-native-push-notification";
import * as globals from './src/utils/globals'

// PushNotification.configure( {
//     onRegister: function ( token ) {
//       console.log( "TOKEN:", token );
//       globals.fcmToken = token?.token || ''
//       PushNotification.createChannel(
//         {
//           channelId: "fantasysniper", // (required)
//           channelName: "Sooraj panchal", // (required)
//           channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//           playSound: true, // (optional) default: true
//           soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
//           importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//           vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//         },
//         ( created ) => console.log( `createChannel returned '${ created }'` ) // (optional) callback returns whether the channel was created, false means it already existed.
//       )
//     },
  
//     onNotification: function ( notification ) {
//       console.log( "NOTIFICATION:", notification );
  
//       PushNotification.localNotification( {
//         channelId: notification.channelId, // (required) channelId, if the channel doesn't exist, notification will not trigger.
//         vibrate: true, // (optional) default: true
//         vibration: 3000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
//         priority: "high", // (optional) set notification priority, default: high
//         visibility: "private", // (optional) set notification visibility, default: private
//         ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
//         id:notification.id,
//         tag:notification.tag,
//         title:notification.title, // (optional)
//         message:notification.message, // (required)
//         playSound: true, // (optional) default: true
//         soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
//       } );
//     },
//     onAction: function ( notification ) {
//       console.log( "ACTION:", notification.action );
//       console.log( "NOTIFICATION:", notification );
//     },
//     onRegistrationError: function ( err ) {
//       console.error( err.message, err );
//     },
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
//     popInitialNotification: true,
//     requestPermissions: true,
//   } );

AppRegistry.registerComponent( appName, () => App );
