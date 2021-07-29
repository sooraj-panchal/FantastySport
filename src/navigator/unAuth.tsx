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
import NotificationScreen from '../container/AppModule/NotificationScreen';
import CreateOrJoin from '../container/AppModule/CreateOrJoinScreen';
import CreateLeagueScreen from '../container/AppModule/CreateLeagueScreen/view';
import AddLiveMatchesTabs from '../container/AppModule/AddLiveMatchesTabs/view';

const StackScreen = createNativeStackNavigator<unAuthParamList>()
const ChatStackScreen = createStackNavigator<chatParamList>()
const SettingStackScreen = createStackNavigator<settingParamList>()

const SettingStack = ({ }) => {
    return (
        <SettingStackScreen.Navigator
            screenOptions={{
                // headerStatusBarHeight: getStatusBarHeight(),
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: true,
                headerMode: "float"
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


const AppStackScreen: React.FC = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="tabs"
            screenOptions={{
                headerStyle: {
                    backgroundColor: PrimaryColor
                },
                presentation: "transparentModal",
                animation: "fade",
                headerTintColor: "white"
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
                }}
            />
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
            <StackScreen.Screen
                name="SettingStack"
                component={SettingStack}
                options={({ navigation }) => ({
                    headerShown: false,
                })}
            />
            <StackScreen.Screen
                name="Notification"
                component={NotificationScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                })}
            />
            <StackScreen.Screen
                name="CreateOrJoin"
                component={CreateOrJoin}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerShadowVisible: false,
                    headerRight: () => <Ionicons name="ios-close" size={25} color="white"
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />,
                    headerTitle: () => null,
                    headerRightContainerStyle: { paddingRight: 20 },
                })}
            />
            <StackScreen.Screen
                name="CreateLeague"
                component={CreateLeagueScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Create Fantasy sniper league",
                    headerTitleStyle:{
                        fontSize:16,
                    }
                })}
            />
             <StackScreen.Screen
                name="AddLiveMatches"
                component={AddLiveMatchesTabs}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Add live matches"
                })}
            />
        </StackScreen.Navigator>
    )
}
export default AppStackScreen;