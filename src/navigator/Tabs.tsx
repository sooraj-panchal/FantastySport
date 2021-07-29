import React, { useRef } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/AppModule/HomeScreen/view';
import ProfileScreen from '../container/AppModule/ProfileScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { DarkBlueColor, OrangeColor } from "../assets/colors";
import SearchScreen from "../container/AppModule/SearchScreen";
import SavedScreen from "../container/AppModule/SavedScreen";
import NotificationScreen from "../container/AppModule/NotificationScreen";
import { createStackNavigator, TransitionPresets, TransitionSpecs } from "@react-navigation/stack";
import Animated from "react-native-reanimated";
import MyPropertiesScreen from "../container/AppModule/MyPropertiesScreen";
import ContactedProperiesScreen from "../container/AppModule/ContactedPropertiesScreen";
import SavedSearchScreen from "../container/AppModule/SavedSearcheScreen";
import { medium, regular } from "../assets/fonts/fonts";
import FilterScreen from "../container/AppModule/FilterScreen";
import Fontisto from "react-native-vector-icons/Fontisto";
import Label from "../components/Label";

import Feather from "react-native-vector-icons/Feather";
import { getStatusBarHeight } from "../utils/globals";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileParamList, tabParamList } from "../types/nav";

const Tab = createBottomTabNavigator<tabParamList>();

const StackScreen = createNativeStackNavigator();
const ProfileStackScreen = createStackNavigator<ProfileParamList>();

const ProfileStack = ({ }) => {
    return (
        <ProfileStackScreen.Navigator
            screenOptions={{
                // headerStatusBarHeight: getStatusBarHeight(),
                ...TransitionPresets.SlideFromRightIOS,
                // animation: 'fade'
            }}
            headerMode="float"
        >
            <ProfileStackScreen.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: "More",
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
            <ProfileStackScreen.Screen
                name="MyProperties"
                component={MyPropertiesScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: "My Properties",
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        },
                        headerBackTitleVisible: false,
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
            <ProfileStackScreen.Screen
                name="ContactedProperies"
                component={ContactedProperiesScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: "Contacted Properies",
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        },
                        headerBackTitleVisible: false,
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
            <ProfileStackScreen.Screen
                name="SavedSearch"
                component={SavedSearchScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: "Saved searches",
                        headerStyle: {
                            backgroundColor: DarkBlueColor,
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        },
                        headerBackTitleVisible: false,
                        headerTitleAlign: "left",
                        headerTintColor: "white"
                    })
                }}
            />
        </ProfileStackScreen.Navigator>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            // scre={{
            //     style: {
            //         backgroundColor: "white",
            //         height: 60,
            //         borderTopWidth: 0,
            //     },
            //     tabStyle: {
            //         height: 60
            //     },
            //     labelStyle: {
            //         fontSize: 12
            //     },
            // }}
            screenOptions={{
                tabBarActiveTintColor: DarkBlueColor,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    // height: 60,
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    // fontSize: 12
                }
            }}
        >
            <Tab.Screen
                name="Home" component={HomeScreen}
                options={({ navigation, route }) => {
                    return ({
                        tabBarIcon: ({ color,size }) => {
                            return (
                                <Ionicons name="md-home" size={size} color={color} />
                            )
                        },
                    })
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ color,size }) => {
                        return (
                            <Ionicons name="ios-search-sharp" size={size} color={color} />
                        )
                    },
                    tabBarLabel: "Search"
                }}
            // listeners={{
            //     tabPress: e => {
            //         e.preventDefault()
            //         navigation.navigate("Search")
            //     },
            // }}
            />
            <Tab.Screen name="Saved" component={SavedScreen}
                options={{
                    tabBarLabel: "My Listings",
                    tabBarIcon: ({ color,size }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={color} />
                        )
                    },
                    headerShown: true,
                    headerTitle: "My Listing",
                    headerStyle: {
                        backgroundColor: DarkBlueColor
                    },
                    headerTintColor: "white"
                }} />
            <Tab.Screen name="LiveBlog" component={FilterScreen}
                options={{
                    tabBarLabel: "Live Blog",
                    tabBarIcon: ({ color,size }) => {
                        return (
                            <Fontisto name="arrow-swap" size={size} color={color} />
                        )
                    },
                    headerShown: true,
                    headerTitle: "Live Blog",
                    headerStyle: {
                        backgroundColor: DarkBlueColor
                    },
                    headerTintColor: "white"
                }} />
            <Tab.Screen name="ProfileStack" component={ProfileStack}
                options={{
                    tabBarLabel: "More",
                    tabBarIcon: ({ color,size }) => {
                        return (
                            <Feather name="more-horizontal" size={size} color={color} />
                        )
                    },
                }} />
        </Tab.Navigator>
    );
}
export default Tabs;