import React from 'react';
import { PrimaryColor } from '../assets/colors';
import Tabs from './Tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ChangePasswordScreen from '../container/AppModule/ChangePasswordScreen';
import TermsAndConditionScreen from '../container/AppModule/TermsConditionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { unAuthParamList } from '../types/nav';
import NotificationScreen from '../container/AppModule/NotificationScreen';
import CreateOrJoin from '../container/AppModule/CreateOrJoinScreen';
import CreateLeagueScreen from '../container/AppModule/CreateLeagueScreen/view';
import AddLiveMatchesTabs from '../container/AppModule/AddLiveMatchesTabs/view';
import MyTeamBottomTabs from '../container/AppModule/MyTeamBottomTabs';
import AddPlayerScreen from '../container/AppModule/AddPlayerScreen/view';
import AddSniperPointScreen from '../container/AppModule/AddLiveMatchesTabs/AddSniperPointScreen/view';
import InviteFriendScreen from '../container/AppModule/InviteFriendScreen/view';
import EditTeamInfoScreen from '../container/AppModule/EditTeamInfoScreen/view';
import EditTeamScreen from '../container/AppModule/EditTeamScreen/view';
import JoinLeagueScreen from '../container/AppModule/JoinLeagueScreen/view';
import JoinLeagueTeamNameScreen from '../container/AppModule/JoinLeagueTeamNameScreen/view';
import LiveMatchDetailScreen from '../container/AppModule/LiveMatchDetailScreen/view';
import StandingScreen from '../container/AppModule/StandingScreen/view';
import TeamLevelScreen from '../container/AppModule/TeamLevelScreen/view';
import WinnerDetailScreen from '../container/AppModule/WinnerDetailScreen/view';
import GameDetailScreen from '../container/AppModule/GameDetailScreen/view';
import NewsDetailScreen from '../container/AppModule/NewsDetailScreen/view';
import AddPlayerPointScreen from '../container/AppModule/AddPointScreen/view';
import LiveMatchListScreen from '../container/AppModule/LiveMatchListScreen/view';
import { Platform } from 'react-native';

const StackScreen = createNativeStackNavigator<unAuthParamList>()

const AppStackScreen: React.FC = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="tabs"
            screenOptions={{
                headerStyle: {
                    backgroundColor: PrimaryColor
                },
                presentation: Platform.OS === 'ios' ? 'card' : 'transparentModal',
                animation: Platform.OS === 'ios' ? 'slide_from_right' : "fade",
                headerTintColor: "white",
                headerBackTitleVisible: false
            }}
        >
            <StackScreen.Screen
                name="tabs"
                component={Tabs}
                options={({ navigation, route }) => {
                    return ({
                        headerShown: false,
                        
                    })
                }}
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
                    headerTranslucent: true,
                    headerStyle: { backgroundColor: 'transparent' }
                })}
            />
            <StackScreen.Screen
                name="CreateLeague"
                component={CreateLeagueScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Create Fantasy sniper league",
                    headerTitleStyle: {
                        fontSize: 16,
                    }
                })}
            />
            <StackScreen.Screen
                name="AddLiveMatches"
                component={AddLiveMatchesTabs}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Add Live Games"
                })}
            />
            <StackScreen.Screen
                name="MyTeamTab"
                component={MyTeamBottomTabs}
                options={({ navigation }) => ({
                    headerShown: false,
                    headerTitle: "Redbelly's league"
                })}
            />
            <StackScreen.Screen
                name="AddPlayer"
                component={AddPlayerScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Players"
                })}
            />
            <StackScreen.Screen
                name="AddSniperPoint"
                component={AddSniperPointScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Add sniper point"
                })}
            />
            <StackScreen.Screen
                name="InviteFriend"
                component={InviteFriendScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Redbelly's League"
                })}
            />
            <StackScreen.Screen
                name="EditTeamInfo"
                component={EditTeamInfoScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Edit team info"
                })}
            />
            <StackScreen.Screen
                name="EditTeam"
                component={EditTeamScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Edit Team"
                })}
            />
            <StackScreen.Screen
                name="JoinLeague"
                component={JoinLeagueScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Join league"
                })}
            />
            <StackScreen.Screen
                name="JoinLeagueTeamName"
                component={JoinLeagueTeamNameScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Join league"
                })}
            />
            <StackScreen.Screen
                name="LiveMatchDetail"
                component={LiveMatchDetailScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Joshu's team"
                })}
            />
            <StackScreen.Screen
                name="Standing"
                component={StandingScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Standings"
                })}
            />
            <StackScreen.Screen
                name="TeamLevel"
                component={TeamLevelScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Team level"
                })}
            />
            <StackScreen.Screen
                name="WinnerDetail"
                component={WinnerDetailScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "John's Official Team"
                })}
            />
            <StackScreen.Screen
                name="GameDetail"
                component={GameDetailScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Mini militia"
                })}
            />
            <StackScreen.Screen
                name="NewsDetail"
                component={NewsDetailScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "",
                    headerTranslucent: true,
                    // headerTintColor:'white',
                    headerStyle: { backgroundColor: 'transparent' },
                    headerShadowVisible: false
                })}
            />
            <StackScreen.Screen
                name="TermsAndCondition"
                component={TermsAndConditionScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: route.params?.title,
                        headerStyle: {
                            backgroundColor: PrimaryColor,
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
            <StackScreen.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'transparent' },
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerTranslucent: true,
                    headerTintColor: "white"
                }}
            />
            <StackScreen.Screen
                name="AddPlayerPoint"
                component={AddPlayerPointScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Redbelly's Team",
                })}
            />
            <StackScreen.Screen
                name='LiveMatchList'
                component={LiveMatchListScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "My leagues",
                })}
            />
        </StackScreen.Navigator>
    )
}
export default AppStackScreen;
