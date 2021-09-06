import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    View, StatusBar, StyleSheet, Platform, ActivityIndicator
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkBlueColor, PrimaryColor, StatusBarColor } from './src/assets/colors';
import AppContainer from './src/navigator';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './src/store';
import { Host } from 'react-native-portalize';

const App = () => {
    useEffect(() => {
    }, [])

    const _renderStatusBar = () => {
        if (Platform.OS === "ios") {
            return <View style={styles.header} >
                <StatusBar backgroundColor={DarkBlueColor} barStyle="light-content" />
                <AppContainer />
            </View>
        } else {
            return <>
                <StatusBar backgroundColor={DarkBlueColor} barStyle="light-content" translucent />
                <AppContainer />
            </>
        }
    }

    const { store, persistor } = configureStore()

    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                    <NavigationContainer
                        theme={{ colors: { background: "#246e87" } }}
                    >
                        <Host>
                            {_renderStatusBar()}

                        </Host>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: DarkBlueColor
    },
});
export default App;