import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AppStackScreen from './unAuth';
import AuthStackScreen from './auth';
import { PrimaryColor } from '../assets/colors';
import SplashScreen from '../container/AuthModule/SplashScreen';
import { useEffect } from 'react';
import { useState } from 'react';
import * as globals from '../utils/globals';
import { connect } from 'react-redux'
import { asyncBuyerDataWatcher } from '../store/actions';
import { asyncBuyerDataLoading, asyncBuyerDataSelector } from '../store/selectors/whiteListSelector';
// import { MyDrawer } from './Drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppContainer = ({
    asyncBuyerDataWatcher,
    asyncBuyerDataResponse,
    asyncBuyerDataLoading
}) => {
    const [loading, setLoading] = useState(true)

    const StackScreen = createNativeStackNavigator();
    const RootStack = createNativeStackNavigator();
    // const RootStack = createNativeStackNavigator<RootStackParamList>()

    useEffect(() => {
        setLoading(true)
        // asyncBuyerDataWatcher()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        if (asyncBuyerDataResponse) {
            console.log(asyncBuyerDataResponse)
            globals.buyer_id = asyncBuyerDataResponse?.buyer_id
        }
    }, [asyncBuyerDataResponse])
    // asyncBuyerDataResponse

    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false, animation: "none" }}
            initialRouteName={"AuthStack"}
        >
            {
                loading ?
                    <StackScreen.Screen
                        name="Splash"
                        component={SplashScreen}
                    /> :
                    <>
                        <RootStack.Screen
                            name="AuthStack"
                            component={AuthStackScreen}
                        />
                        <RootStack.Screen
                            name="AppStack"
                            component={AppStackScreen}
                        />
                    </>
            }
        </RootStack.Navigator>
    )
}

const mapStateToProps = store => {
    return {
        asyncBuyerDataResponse: asyncBuyerDataSelector(store),
        asyncBuyerDataLoading: asyncBuyerDataLoading(store)
    }
}

const mapDispatchToProps = {
    asyncBuyerDataWatcher
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
