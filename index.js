/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification, { Importance } from "react-native-push-notification";
import * as globals from './src/utils/globals';
import { navigate } from './src/utils/NavigationHandler';

PushNotification.configure( {
  onRegister: function ( token ) {
    console.log( "TOKEN:", token );
    globals.fcmToken = token?.token || '';
    PushNotification.createChannel(
      {
        channelId: "fantasysniper", // (required)
        channelName: "Sooraj panchal", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      ( created ) => console.log( `createChannel returned '${ created }'` ) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  },
  onRegistrationError: function ( err ) {
    console.error( err.message, err );
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
} );

AppRegistry.registerComponent( appName, () => App );
