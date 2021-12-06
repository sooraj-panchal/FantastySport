import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/AppModule/HomeScreen/view';
import ProfileScreen from '../container/AppModule/ProfileScreen/view';
import Ionicons from "react-native-vector-icons/Ionicons";
import { DarkBlueColor, PrimaryColor } from "../assets/colors";

import { getStatusBarHeight } from "../utils/globals";
import { tabParamList } from "../types/nav";
import MyLeagueScreen from "../container/AppModule/MyLeagueScreen/view";
import WinnerScreen from "../container/AppModule/WinnerScreen/view";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MyGamesScreen from "../container/AppModule/MyGamesScreen";
import NewsScreen from "../container/AppModule/NewsScreen/view";
import LeaderBoardScreen from "../container/AppModule/LeaderBoardScreen";

const Tab = createBottomTabNavigator<tabParamList>();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ navigation }) => ({
                tabBarActiveTintColor: PrimaryColor,
                tabBarInactiveTintColor: "gray",
                headerShown: true,
                tabBarStyle: {
                    backgroundColor: "white",
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
                headerStyle: {
                    // height: 80,
                    backgroundColor: PrimaryColor
                },
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
            {/* <Tab.Screen name='MyGames' component={MyGamesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="american-football" size={size} color={color} />
                        )
                    },
                    tabBarLabel: "My Games"
                }}
            /> */}
            {/* <Tab.Screen name="Winners" component={WinnerScreen}
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
                }}
            /> */}
            <Tab.Screen name='LeaderBoard' component={LeaderBoardScreen}
                options={{
                    tabBarLabel: "LeaderBoard",
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
                }}
            />
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