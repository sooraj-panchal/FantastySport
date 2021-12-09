import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    StatusBar, Platform, LogBox
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkBlueColor } from './src/assets/colors';
import AppContainer from './src/navigator';

import { Provider } from 'react-redux';
import { Host } from 'react-native-portalize';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { URL, URLSearchParams } from 'react-native-url-polyfill';
import { navigate, navigationRef } from './src/utils/NavigationHandler';

const App = () => {

    // useEffect(() => {
    //     const unsubscribe = messaging().onMessage(async remoteMessage => {
    //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //     });
    
    //     return unsubscribe;
    //   }, []);
    
    // useEffect(()=>{
    //     NotificationHandler()
    // },[])

    LogBox.ignoreAllLogs( true );

    const _renderStatusBar = () => {
        if ( Platform.OS === "ios" ) {
            return <>
                <StatusBar barStyle="light-content" />
                <AppContainer />
            </>;
        } else {
            return <>
                <StatusBar backgroundColor={ DarkBlueColor } barStyle="light-content" translucent />
                <AppContainer />
            </>;
        }
    };

    const handleDynamicLink = link => {
        // Handle dynamic link inside your own application
        if ( link ) {
            console.log( 'get link from foreground==>', link );
            // ...navigate to your offers screen
            // if ( link ) {
            //     let url = new URL( link.url );
            //     const queryParams = new URLSearchParams( url.search );
            //     const code = queryParams.get( 'code' );
            //     const week_id = queryParams.get( 'week_id' );
            //     console.log( 'code', code );
            //     console.log( 'week_id', week_id );
            //     // navigate( 'AppStack', {
            //     //     screen: 'JoinLeague',
            //     //     params: {
            //     //         code: code,
            //     //         week_id: week_id
            //     //     }
            //     // } );
            //     navigate( 'AppStack', {
            //         screen: 'JoinLeague',
            //         params: {
            //             code: code,
            //             week_id: week_id
            //         }
            //     } );
            // }
            if ( link ) {
                let url = new URL( link.url );
                const queryParams = new URLSearchParams( url.search );
                const league_id = queryParams.get( 'league_id' );
                const week_id = queryParams.get( 'week_id' );
                console.log( 'week_id', week_id );
                console.log( 'league_id', league_id );
                // setTimeout( () => {
                navigate( 'LeagueDetail', {
                    league_id: league_id,
                    week_id: week_id,
                } );
                // },1000);
            }
        }
    };


    useEffect( () => {
        const unsubscribe = dynamicLinks().onLink( handleDynamicLink );
        // When the component is unmounted, remove the listener
        return () => unsubscribe();
    }, [] );


    useEffect( () => {
        dynamicLinks()
            .getInitialLink()
            .then( link => {
                console.log( 'get link==>', link );
                // if ( link ) {
                //     let url = new URL( link.url );
                //     const queryParams = new URLSearchParams( url.search );
                //     const code = queryParams.get( 'code' );
                //     const week_id = queryParams.get( 'week_id' );

                //     console.log( 'code', code );
                //     console.log( 'week_id', week_id );
                //     setTimeout( () => {
                //         navigate( 'AppStack', {
                //             screen: 'JoinLeague',
                //             params: {
                //                 code: code,
                //                 week_id: week_id
                //             }
                //         } );
                //     }, 1000 );
                // }
                if ( link ) {
                    let url = new URL( link.url );
                    const queryParams = new URLSearchParams( url.search );
                    const league_id = queryParams.get( 'league_id' );
                    const week_id = queryParams.get( 'week_id' );
                    console.log( 'week_id', week_id );
                    console.log( 'league_id', league_id );
                    setTimeout( () => {
                        navigate( 'LeagueDetail', {
                            league_id: league_id,
                            week_id: week_id,
                        } );
                    }, 1000 );
                }
            } );
    }, [] );

    return (
        <SafeAreaProvider  >
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={ persistor }>
                    <NavigationContainer
                        theme={ { colors: { background: "#246e87" } } }
                        ref={ navigationRef }
                    >
                        <Host>
                            { _renderStatusBar() }
                        </Host>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>

        // <SvgCssUri
        //     width="100%"
        //     height="100%"
        //     uri="https://upload.wikimedia.org/wikipedia/en/d/d9/Cleveland_Browns_logo.svg"
        // />
    );
};

export default App;
