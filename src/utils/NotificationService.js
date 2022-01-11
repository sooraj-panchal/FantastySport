import PushNotification, { Importance } from "react-native-push-notification";
import { navigate } from "./NavigationHandler";

export const NofificationService = () => {
    PushNotification.configure( {
        onNotification: function ( notification ) {
            console.log( "NOTIFICATION:", notification );
            const { userInteraction, foreground } = notification;
            if ( !userInteraction ) {
                PushNotification.localNotification( {
                    channelId: notification.channelId, // (required) channelId, if the channel doesn't exist, notification will not trigger.
                    vibrate: true, // (optional) default: true
                    vibration: 3000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
                    priority: "high", // (optional) set notification priority, default: high
                    visibility: "private", // (optional) set notification visibility, default: private
                    ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
                    id: notification.id,
                    tag: notification.tag,
                    title: notification.title, // (optional)
                    message: notification.message, // (required)
                    playSound: true, // (optional) default: true
                    soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                } );
            } else {
                // if ( foreground ) {
                //     navigate( 'LeagueDetail', {
                //         league_id: '',
                //         week_id: '',
                //     } );
                // } else {
                //     setTimeout( () => {
                //         navigate( 'LeagueDetail', {
                //             league_id: '',
                //             week_id: '',
                //         } );
                //     }, 2000 );
                // }
            }
        }
    } );
};