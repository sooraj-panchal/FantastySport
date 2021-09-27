import React from 'react';
import AppStackScreen from './unAuth';
import AuthStackScreen from './auth';
import SplashScreen from '../container/AuthModule/SplashScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const AppContainer = ( {
} ) => {
    const [ loading, setLoading ] = useState( true );
    const token = useSelector( ( store ) => store.auth?.token );
    const StackScreen = createNativeStackNavigator();
    const RootStack = createNativeStackNavigator();

    useEffect( () => {
        setLoading( true );
    }, [] );

    useEffect( () => {
        setTimeout( () => {
            setLoading( false );
        }, 1000 );
    }, [] );

    console.log( 'token', token );

    return (
        <RootStack.Navigator
            screenOptions={ { headerShown: false, animation: "none" } }
            initialRouteName={ token ? "AppStack" : "AuthStack" }
        >
            {
                loading ?
                    <StackScreen.Screen
                        name="Splash"
                        component={ SplashScreen }
                    /> :
                    <>
                        <RootStack.Screen
                            name="AuthStack"
                            component={ AuthStackScreen }
                        />
                        <RootStack.Screen
                            name="AppStack"
                            component={ AppStackScreen }
                        />
                    </>
            }
        </RootStack.Navigator>
    );
};
export default AppContainer;