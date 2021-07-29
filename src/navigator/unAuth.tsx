import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../container/AppModule/HomeScreen/view';
import ProfileScreen from '../container/AppModule/ProfileScreen';
import { DarkBlueColor, PrimaryColor } from '../assets/colors';
import Tabs from './Tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View } from 'react-native';
import PropertyDetailScreen from '../container/AppModule/PropertyDetailScreen';
import SearchScreen from '../container/AppModule/SearchScreen';
import PropertyListScreen from '../container/AppModule/PropertyListScren';
import FeedbackScreen from '../container/AppModule/FeedbackScreen';
import ChatScreen from '../container/AppModule/ChatScreen';
import ChatDetailScreen from '../container/AppModule/ChatDetailScreen';
import LiveBlogScreen from '../container/AppModule/LiveBlogScreen';
import { getStatusBarHeight } from '../utils/globals';
import BrokersProfileScreen from '../container/AppModule/BrokersProfileScreen';
import SellerPostListScreen from '../container/AppModule/SellerPostListScreen';
import SettingScreen from '../container/AppModule/SettingScreen';
import ChangePasswordScreen from '../container/AppModule/ChangePasswordScreen';
import TermsAndConditionScreen from '../container/AppModule/TermsConditionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { unAuthParamList, chatParamList, settingParamList } from '../types/nav';

const StackScreen = createNativeStackNavigator<unAuthParamList>()
const ChatStackScreen = createStackNavigator<chatParamList>()
const SettingStackScreen = createStackNavigator<settingParamList>()


const ChatStack = () => {
    return (
        <ChatStackScreen.Navigator
            screenOptions={{
                headerTintColor: "white",
                headerBackTitleVisible: false,
                headerStatusBarHeight: getStatusBarHeight(),
                headerStyle: {
                    backgroundColor: DarkBlueColor
                },
                headerMode:"float",
                headerTitleAlign: "left",
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <ChatStackScreen.Screen
                name="Chat"
                component={ChatScreen}
                // options={({ route, navigation }) => ({
                //     headerLeft: (props) => (
                //         <HeaderBackButton
                //             {...props}
                //             onPress={() => navigation.goBack()}
                //             style={{ marginLeft: 20 }}
                //         />
                //     ),
                // })}
            />
            <ChatStackScreen.Screen
                name="ChatDetail"
                component={ChatDetailScreen}
                options={({ route, navigation }) => ({
                    headerTitle: route.params.name,
                })}
            />
        </ChatStackScreen.Navigator>
    )
}

const SettingStack = ({ }) => {
    return (
        <SettingStackScreen.Navigator
            screenOptions={{
                // headerStatusBarHeight: getStatusBarHeight(),
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: true,
                headerMode:"float"
            }}
        >
            <SettingStackScreen.Screen
                name="Setting"
                component={SettingScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                            // height:110
                        },
                        cardStyle: {
                            backgroundColor: "red"
                        },
                        headerTintColor: "white",
                        // headerLeft: (props) => (
                        //     <HeaderBackButton
                        //         {...props}
                        //         onPress={() => navigation.goBack()}
                        //         style={{ marginLeft: 20 }}
                        //     />
                        // ),
                    })
                }}
            />
            <SettingStackScreen.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                        },
                        headerTintColor: "white",
                        headerTitle: route.params?.title,
                    })
                }}
            />
            <SettingStackScreen.Screen
                name="TermsAndCondition"
                component={TermsAndConditionScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: route.params?.title,
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
            <SettingStackScreen.Screen
                name="Feedback"
                component={FeedbackScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: route.params?.title,
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                            // height:110
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
        </SettingStackScreen.Navigator>
    )
}


const AppStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="tabs"
            screenOptions={{
                headerStyle: {
                    backgroundColor: DarkBlueColor
                },
                // headerStatusBarHeight: getStatusBarHeight(),
                // headerLeftContainerStyle: {
                //     paddingLeft: 10
                // },
                presentation: "transparentModal",
                animation: "fade",
                headerTintColor: "white"
                // headerTintColor: "white",
                // ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <StackScreen.Screen
                name="tabs"
                component={Tabs}
                options={({ navigation, route }) => {
                    return ({
                        headerShown: false
                    })
                }}
            />
            {/* <StackScreen.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerStyle: {
                            backgroundColor: PrimaryColor,
                        },
                        headerTintColor: "white"
                    })
                }}
            />
            <StackScreen.Screen
                name="Search"
                component={SearchScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerBackTitle: "Back"
                    })
                }}
            />
            <StackScreen.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            /> */}
            <StackScreen.Screen
                name="PropertyList"
                component={PropertyListScreen}
                options={{
                    headerTitle: "Block List",
                    headerBackTitle: "Back"
                }}
            />
            <StackScreen.Screen
                name="PropertyDetail"
                component={PropertyDetailScreen}
                options={{
                    headerShown: false,
                    // animationEnabled: false,
                }}
            />
            <StackScreen.Screen
                name="ChatStack"
                component={ChatStack}
                options={{
                    headerShown: false,
                }}
            />
            {/* <StackScreen.Screen
                name="Feedback"
                component={FeedbackScreen}
                options={{
                    // headerTitle:route.params.screen,
                    headerStyle: {
                        backgroundColor: DarkBlueColor,
                        // height:110
                    },
                    headerBackTitleVisible: false,
                    headerLeftContainerStyle: {
                        paddingLeft: 10
                    },
                    headerTitleAlign: "left",
                    headerTintColor: "white"
                }}
            /> */}
            <StackScreen.Screen
                name="LiveBlog"
                component={LiveBlogScreen}
                options={{
                    headerTitle: "Live blog",
                    headerShadowVisible: false,
                    headerTintColor: "white",
                    headerShown: true
                }}
            />
            <StackScreen.Screen
                name="BrokersProfile"
                component={BrokersProfileScreen}
                options={{
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerTintColor: "white",
                    headerShown: true
                }}
            />
            <StackScreen.Screen
                name="SellerPostList"
                component={SellerPostListScreen}
                options={{
                    headerTitle: "Seller 1",
                    headerShadowVisible: false
                }}
            />
            {/* <StackScreen.Screen
                name="ChatDetail"
                component={ChatDetailScreen}
                options={({ route, navigation }) => ({
                    // headerTitle: route.params?.name
                })}
            /> */}
            <StackScreen.Screen
                name="SettingStack"
                component={SettingStack}
                options={({ navigation }) => ({
                    headerShown: false,
                })}

            />
        </StackScreen.Navigator>
    )
}
export default AppStackScreen;
