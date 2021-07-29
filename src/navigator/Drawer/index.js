import React, { useEffect, useState } from 'react';
import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import CustomDrawer from './view'
import AppStackScreen from '../unAuth';
import { DarkBlueColor } from '../../assets/colors';
import SettingScreen from '../../container/AppModule/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChangePasswordScreen from '../../container/AppModule/ChangePasswordScreen';
import TermsAndConditionScreen from '../../container/AppModule/TermsConditionScreen';
import FeedbackScreen from '../../container/AppModule/FeedbackScreen';

const Drawer = createDrawerNavigator();
const StackScreen = createStackNavigator();


const SettingStack = ({ }) => {
    return (
        <StackScreen.Navigator
        >
            <StackScreen.Screen
                name="Setting"
                component={SettingScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                            // height:110
                        },
                        headerLeft: () => {
                            return (
                                <Ionicons
                                    name="md-menu"
                                    size={30}
                                    color="white"
                                    onPress={() => navigation.openDrawer()}
                                />
                            )
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
            <StackScreen.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                            // height:110
                        },
                        headerLeft: () => {
                            return (
                                <Ionicons
                                    name="md-menu"
                                    size={30}
                                    color="white"
                                    onPress={() => navigation.openDrawer()}
                                />
                            )
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
            <StackScreen.Screen
                name="TermsAndCondition"
                component={TermsAndConditionScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: route.params.screen,
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                            // height:110
                        },
                        headerBackTitleVisible: false,
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "white",
                    })
                }}
            />
        </StackScreen.Navigator>
    )
}
const FeedbackStack = ({ }) => {
    return (
        <StackScreen.Navigator
        >
            <StackScreen.Screen
                name="Feedback"
                component={FeedbackScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle:route.params.screen,
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                            // height:110
                        },
                        headerLeft: () => {
                            return (
                                <Ionicons
                                    name="md-menu"
                                    size={30}
                                    color="white"
                                    onPress={() => navigation.openDrawer()}
                                />
                            )
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
        </StackScreen.Navigator>
    )
}

function MyDrawer() {
    // const [initRender, setInitRender] = useState(true);

    // useEffect(() => {
    //     setInitRender(false);
    // }, [initRender]);

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            drawerStyle={{
                // width: initRender ? null : "75%"
                width: "75%"
            }}  >
            <Drawer.Screen name="AppStack" component={AppStackScreen} />
            <Drawer.Screen name="SettingStack" component={SettingStack} />
            <Drawer.Screen name="FeedbackStack" component={FeedbackStack} />
        </Drawer.Navigator>
    );
}

export default MyDrawer

