import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { DarkBlueColor } from "../../../assets/colors";
import { MyTeamtabParamList, tabParamList } from "../../../types/nav";
import { getStatusBarHeight } from "../../../utils/globals";
import MyTeamScreen from "./MyTeamScreen";
import LiveMatchScreen from "./LiveMatchScreen";
import LeagueScreen from "./LeagueScreen";
import { HeaderBackButton } from '@react-navigation/elements'
const Tab = createBottomTabNavigator<MyTeamtabParamList>();

const MyTeamBottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: DarkBlueColor,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 50,
                    borderTopWidth: 0,
                },
                headerStatusBarHeight: getStatusBarHeight()
            }}
        >
            <Tab.Screen
                name="MyTeam" component={MyTeamScreen}
                options={({ navigation, route }) => {
                    return ({
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons name="md-home" size={size} color={color} />
                            )
                        },
                        headerShown: true,
                        headerTitle: "Adam's Team",
                        headerTintColor: "white",
                        tabBarLabel: "My Team",
                        headerLeft: () => {
                            return <HeaderBackButton
                                tintColor="white"
                                pressColor="rgba(0,0,0,0.1)"
                                style={{ left: 2 }}
                                onPress={() => navigation.goBack()}
                            />
                        }
                    })
                }}
            />
            <Tab.Screen name="LiveMatch" component={LiveMatchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="ios-search-sharp" size={size} color={color} />
                        )
                    },
                    tabBarLabel: "Live Match"
                }}
            />
            <Tab.Screen name="League" component={LeagueScreen}
                options={{
                    tabBarLabel: "Leagues",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={color} />
                        )
                    },
                    headerShown: true,
                    headerTitle: "Leagues",
                    headerStyle: {
                        backgroundColor: DarkBlueColor
                    },
                    headerTintColor: "white"
                }} />
        </Tab.Navigator>
    );
}
export default MyTeamBottomTabs;