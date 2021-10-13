import { RouteProp, CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { LeaguePlayerTypes } from './flatListTypes';


export type RootStackParamList = {
  Splash: undefined;
  AppIntro: undefined;
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Verification: { email: string | undefined, fromReset?: boolean };
  EmailSent: undefined;
  ResetPassword: { email?: string };
  InviteFriend: undefined;
};

export type unAuthParamList = {
  tabs: NavigatorScreenParams<tabParamList>
  PropertyList: undefined;
  PropertyDetail: undefined;
  LiveBlog: undefined;
  BrokersProfile: undefined;
  SellerPostList: undefined;
  Notification: undefined;
  CreateOrJoin: undefined;
  CreateLeague: undefined;
  AddLiveMatches: undefined;
  MyTeamTab: NavigatorScreenParams<MyTeamtabParamList>,
  AddPlayer: { Position: any, isWRTPosition: boolean };
  AddSniperPoint: undefined;
  InviteFriend: undefined;
  EditTeamInfo: { team_id: any, team_name: any, team_logo: any } | undefined;
  EditTeam: undefined;
  JoinLeague: undefined;
  JoinLeagueTeamName: undefined;
  LiveMatchDetail: { op_team_id: number, team_id: number | any } | undefined;
  Standing: undefined;
  TeamLevel: undefined;
  TeamDetail: { team_id: number } | undefined;
  GameDetail: undefined;
  NewsDetail: undefined;
  TermsAndCondition: { title: string };
  ChangePassword: undefined;
  AddPlayerPoint: undefined;
  LiveMatchList: undefined;
};

export type tabParamList = {
  Home: undefined;
  MyLeague: undefined;
  Winners: undefined;
  News: undefined;
  ProfileStack: undefined
};

export type MyTeamtabParamList = {
  MyTeam: undefined;
  LiveMatch: undefined;
  League: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;

export type authRouteProp = RouteProp<RootStackParamList, 'Verification'>;

export type authNavigationeProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export type homeNavProps = CompositeNavigationProp<
  BottomTabNavigationProp<tabParamList, 'Home'>,
  CompositeNavigationProp<
    NativeStackNavigationProp<unAuthParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >
>;
export type navigationProps = {
  route: authRouteProp;
  navigation: homeNavProps;
};
export type appProps = {
  route: authRouteProp;
  navigation: homeNavProps;

};

export type AddPlayerProps = NativeStackScreenProps<unAuthParamList, 'AddPlayerPoint'>;

export type PlayersNav = NativeStackScreenProps<unAuthParamList, 'AddPlayer'>;
export type EditTeamNav = NativeStackScreenProps<unAuthParamList, 'EditTeamInfo'>;
export type LiveMatchDetailNav = NativeStackScreenProps<unAuthParamList, 'LiveMatchDetail'>;
export type TeamDetailNav = NativeStackScreenProps<unAuthParamList, 'TeamDetail'>;

