import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import { DarkBlueColor, PrimaryColor } from "../../../assets/colors";
import { MyTeamtabParamList, tabParamList } from "../../../types/nav";
import { getStatusBarHeight } from "../../../utils/globals";
import MyTeamScreen from "./MyTeamScreen";
import LiveMatchScreen from "./LiveMatchScreen";
import LeagueScreen from "./LeagueScreen";
import { HeaderBackButton } from '@react-navigation/elements'
import Container from "../../../components/Container";
import Label from "../../../components/Label";
import { regular } from "../../../assets/fonts/fonts";
const Tab = createBottomTabNavigator<MyTeamtabParamList>();

const MyTeamBottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: PrimaryColor,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    // height: 60,
                    borderTopWidth: 0
                },
                headerStatusBarHeight: getStatusBarHeight(),
                tabBarLabelStyle: {
                    fontSize: 12,
                    bottom: 5
                },
                headerStyle: {
                    backgroundColor: PrimaryColor
                },
                headerTitleAlign: 'left'
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
                        headerTitle: "Redbelly's League",
                        headerTitleStyle: {
                            fontSize: 16,
                            fontFamily: regular
                        },
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
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Container
                                containerStyle={{
                                    backgroundColor: focused ? 'red' : 'grey',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 4
                                }}

                                mpContainer={{ ph: 5, pv: 2 }}
                            >
                                <Label
                                    labelSize={14}
                                    style={{ color: 'white' }}
                                >LIVE</Label>
                            </Container>
                        )
                    },
                    headerShown: true,
                    headerTitle: "Adam's Team",
                    headerTintColor: "white",
                    tabBarLabel: "Live Match",
                    headerLeft: () => {
                        return <HeaderBackButton
                            tintColor="white"
                            pressColor="rgba(0,0,0,0.1)"
                            style={{ left: 2 }}
                            onPress={() => navigation.goBack()}
                        />
                    }
                })}
            />
            <Tab.Screen name="League" component={LeagueScreen}
                options={({ navigation }) => ({
                    tabBarLabel: "Leagues",
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons name="md-trophy" size={size} color={color} />
                        )
                    },
                    headerShown: true,
                    headerTitle: "Leagues",
                    headerStyle: {
                        backgroundColor: PrimaryColor
                    },
                    headerTintColor: "white",
                    headerLeft: () => {
                        return <HeaderBackButton
                            tintColor="white"
                            pressColor="rgba(0,0,0,0.1)"
                            style={{ left: 2 }}
                            onPress={() => navigation.goBack()}
                        />
                    }
                })} />
        </Tab.Navigator>
    );
}
export default MyTeamBottomTabs;