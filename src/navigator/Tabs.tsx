import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/AppModule/HomeScreen/view';
import ProfileScreen from '../container/AppModule/ProfileScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { DarkBlueColor } from "../assets/colors";

import { getStatusBarHeight } from "../utils/globals";
import { tabParamList } from "../types/nav";
import MyLeagueScreen from "../container/AppModule/MyLeagueScreen/view";
import WinnerScreen from "../container/AppModule/WinnerScreen/view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import NewsScreen from "../container/AppModule/NewsScreen/view";

const Tab = createBottomTabNavigator<tabParamList>();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ navigation }) => ({
                tabBarActiveTintColor: DarkBlueColor,
                tabBarInactiveTintColor: "gray",
                headerShown: true,
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 50,
                    borderTopWidth: 0,
                },
                headerStatusBarHeight: getStatusBarHeight(),
                headerTitle: "FANTASY SNIPER",
                headerTintColor: "white",
                headerRight: () => <Ionicons name="ios-notifications" size={22} color="white"
                    onPress={() => {
                        navigation.navigate("Notification")
                    }}
                />,
                headerRightContainerStyle: { paddingRight: 20 },
                headerTitleStyle: {
                    fontSize: 18
                },
                headerStyle: { height: 80 }
            })}
        >
            <Tab.Screen
                name="Home" component={HomeScreen}
                options={({ navigation, route }) => {
                    return ({
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons name="md-home" size={size} color={color} />
                            )
                        }
                    })
                }}
            />
            <Tab.Screen name="MyLeague" component={MyLeagueScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="ios-trophy" size={size} color={color} />
                        )
                    },
                    tabBarLabel: "My Leagues"
                }}
            // listeners={{
            //     tabPress: e => {
            //         e.preventDefault()
            //         navigation.navigate("Search")
            //     },
            // }}
            />
            <Tab.Screen name="Winners" component={WinnerScreen}
                options={{
                    tabBarLabel: "Winners",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome5 name="medal" size={size} color={color}
                                style={{
                                    transform: [{
                                        rotate: "180deg"
                                    }]
                                }}
                            />
                        )
                    }
                }} />
            <Tab.Screen name="News" component={NewsScreen}
                options={{
                    tabBarLabel: "News",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="md-newspaper" size={size} color={color} />
                        )
                    }
                }} />
            <Tab.Screen name="ProfileStack" component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="md-person" size={size} color={color} />
                        )
                    },
                }}
            />
        </Tab.Navigator>
    );
}
export default Tabs;