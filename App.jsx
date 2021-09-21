import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    View, StatusBar, StyleSheet, Platform, ActivityIndicator, LogBox
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DarkBlueColor, PrimaryColor, StatusBarColor } from './src/assets/colors';
import AppContainer from './src/navigator';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { configureStore } from './src/store';
import { Host } from 'react-native-portalize';
import moment from 'moment';
import { array } from 'prop-types';
import { store } from './src/store';
const App = () => {
    LogBox.ignoreAllLogs( true );
    // useEffect( () => {
    //     var currentTime = new Date( '2021-09-09T20:20:00' );
    //     var currentOffset = currentTime.getTimezoneOffset();
    //     var ISTOffset = 570;
    //     var ISTTime = new Date( currentTime.getTime() + ( ISTOffset + currentOffset ) * 60000 );
    //     console.log( "time", ISTTime );
    //     console.log( moment( ISTTime ).format( 'LT' ) );

    // }, [] );

    // useEffect( () => {
    //     let array2 = [
    //         { name: "BCA", player_name: 'Sooraj' },
    //         { name: "BCA", player_name: 'Sooraj1' },
    //         { name: "BCA", player_name: 'Sooraj2' },
    //         { name: "BCA", player_name: 'Sooraj3' },
    //         { name: "BCA", player_name: 'Sooraj4' },
    //         { name: "CDA", player_name: 'Parth' },
    //         { name: "CDA", player_name: 'Parth1' },
    //         { name: "CDA", player_name: 'Parth2' },
    //         { name: "CDA", player_name: 'Parth3' },
    //         { name: "CDA", player_name: 'Parth4' },
    //     ];
    //     let tempArr = [];

    //     let data = array2.map( ( item, index ) => {
    //         let datas = array2.find( ( i, index ) => i.name == "BCA" );
    //         tempArr.push( { name: datas.name, player_name: item.player_name } );
    //     } );
    //     console.log( tempArr );

    //     // console.log( array2.map( ( item ) => {
    //     //     if ( item.name == "BCA" ) {
    //     //         return item;
    //     //     }
    //     // } ) );
    // }, [] );

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


    // const { store, persistor } = configureStore();

    return (
        <SafeAreaProvider  >
            <Provider store={ store }>

                {/* <PersistGate loading={ <ActivityIndicator /> } > */ }
                <NavigationContainer
                    theme={ { colors: { background: "#246e87" } } }
                >
                    <Host>
                        { _renderStatusBar() }
                    </Host>
                </NavigationContainer>
                {/* </PersistGate> */ }
            </Provider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create( {
    header: {
        flex: 1,
        backgroundColor: DarkBlueColor
    },
} );
export default App;