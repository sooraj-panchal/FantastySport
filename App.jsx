import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
    StatusBar, Platform, LogBox, Button
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
import DeadlineModal from './src/components/Modals/DeadlineModal';
import PushNotification, { Importance } from "react-native-push-notification";
import { NofificationService } from './src/utils/NotificationService';
const App = () => {
    useEffect( () => {
        NofificationService();
    }, [] );

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
        if ( link ) {
            console.log( 'get link from foreground==>', link );
            let url = new URL( link.url );
            const queryParams = new URLSearchParams( url.search );
            const league_id = queryParams.get( 'league_id' );
            const week_id = queryParams.get( 'week_id' );
            console.log( 'week_id', week_id );
            console.log( 'league_id', league_id );
            navigate( 'LeagueDetail', {
                league_id: league_id,
                week_id: week_id,
            } );
        }
    };


    useEffect( () => {
        const unsubscribe = dynamicLinks().onLink( handleDynamicLink );
        return () => unsubscribe();
    }, [] );


    useEffect( () => {
        dynamicLinks()
            .getInitialLink()
            .then( link => {
                console.log( 'get link==>', link );
                if ( link ) {
                    console.log( 'link.url', link.url );
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
                            <DeadlineModal
                            // modalizeRef={ deadlineModalRef }
                            />
                        </Host>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;
