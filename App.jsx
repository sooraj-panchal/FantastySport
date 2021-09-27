import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    StatusBar, StyleSheet, Platform, LogBox
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkBlueColor } from './src/assets/colors';
import AppContainer from './src/navigator';

import { Provider } from 'react-redux';
import { Host } from 'react-native-portalize';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const App = () => {
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
    return (
        <SafeAreaProvider  >
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={ persistor }>
                    <NavigationContainer
                        theme={ { colors: { background: "#246e87" } } }
                    >
                        <Host>
                            { _renderStatusBar() }
                        </Host>
                    </NavigationContainer>
                </PersistGate>

            </Provider>
        </SafeAreaProvider>
    );
};

export default App;