import React from 'react';
import { PrimaryColor } from '../assets/colors';
import Tabs from './Tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ChangePasswordScreen from '../container/AppModule/ChangePasswordScreen/view';
import TermsAndConditionScreen from '../container/AppModule/TermsConditionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { unAuthParamList } from '../types/nav';
import NotificationScreen from '../container/AppModule/NotificationScreen';
import CreateOrJoin from '../container/AppModule/CreateOrJoinScreen';
import CreateLeagueScreen from '../container/AppModule/CreateLeagueScreen/view';
import MyTeamBottomTabs from '../container/AppModule/MyTeamBottomTabs';
import AddPlayerScreen from '../container/AppModule/AddPlayerScreen/view';
import InviteFriendScreen from '../container/AppModule/InviteFriendScreen/view';
import EditTeamInfoScreen from '../container/AppModule/EditTeamInfoScreen/view';
import EditTeamScreen from '../container/AppModule/EditTeamScreen/view';
import JoinLeagueScreen from '../container/AppModule/JoinLeagueScreen/view';
import JoinLeagueTeamNameScreen from '../container/AppModule/JoinLeagueTeamNameScreen/view';
import LiveMatchDetailScreen from '../container/AppModule/LiveMatchDetailScreen/view';
import StandingScreen from '../container/AppModule/StandingScreen/view';
import TeamLevelScreen from '../container/AppModule/TeamLevelScreen/view';
import TeamDetailScreen from '../container/AppModule/TeamDetailScreen/view';
import GameDetailScreen from '../container/AppModule/GameDetailScreen/view';
import NewsDetailScreen from '../container/AppModule/NewsDetailScreen/view';
import AddPlayerPointScreen from '../container/AppModule/AddPointScreen/view';
import LiveMatchListScreen from '../container/AppModule/LiveMatchListScreen/view';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import LiveMatchupRankings from '../container/AppModule/LiveMatchupRankings';
import CreateTeamScreen from '../container/AppModule/CreateTeamScreen';
import CreateMatchScreen from '../container/AppModule/CreateMatchScreen';
import MyTeamScreen from '../container/AppModule/MyTeamBottomTabs/MyTeamScreen';
import PublicLeagueScreen from '../container/AppModule/PublicLeagueScreen';
import { useNFLCurrentWeekQuery } from '../features/sportsData';
import AddBattleLeagueScreen from '../container/AppModule/AddBattleLeagueScreen';
import LeagueDetailScreen from '../container/AppModule/LeagueDetailScreen';
import UpdateTeamScreen from '../container/AppModule/UpdateTeamScreen';
import ShowPlayerScreen from '../container/SniperPlus/ShowPlayerScreen';

const StackScreen = createNativeStackNavigator<unAuthParamList>()

const AppStackScreen: React.ReactNode = () => {
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    const { error } = useNFLCurrentWeekQuery(null)
    // console.log('error from NFL', error)
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
                name='CreateTeam'
                component={CreateTeamScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Create team"
                })}
            />
            <StackScreen.Screen
                name="LiveMatchDetail"
                component={LiveMatchDetailScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: leagueDetails.name,
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
                name="TeamDetail"
                component={TeamDetailScreen}
                options={({ navigation }) => ({
                    headerShown: true
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
                    headerTransparent: true,
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
            <StackScreen.Screen
                name='LiveMatchupRankings'
                component={LiveMatchupRankings}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Live Matchup Rankings",
                })}
            />
            <StackScreen.Screen
                name='MyTeam'
                component={MyTeamScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "",
                })}
            />
            <StackScreen.Screen
                name='CreateMatch'
                component={CreateMatchScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "",
                })}
            />
            <StackScreen.Screen
                name='PublicLeague'
                component={PublicLeagueScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Public Leagues",
                })}
            />
            <StackScreen.Screen
                name='AddBattleLeague'
                component={AddBattleLeagueScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Add Battle League",
                })}
            />
            <StackScreen.Screen
                name='LeagueDetail'
                component={LeagueDetailScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "League Details",
                })}
            />
            <StackScreen.Screen
                name='updateTeam'
                component={UpdateTeamScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "Edit team"
                })}
            />
               <StackScreen.Screen
                name='ShowPlayer'
                component={ShowPlayerScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerTitle: "",
                })}
            />
        </StackScreen.Navigator>
    )
}
export default AppStackScreen;
