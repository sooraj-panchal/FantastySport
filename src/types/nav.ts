import { RouteProp, CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
  Splash: undefined;
  AppIntro: undefined;
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Verification: { email: string };
  EmailSent: undefined;
  ResetPassword: undefined;
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
  AddPlayer: undefined;
  AddSniperPoint: undefined;
  InviteFriend: undefined;
  EditTeamInfo: undefined;
  EditTeam: undefined;
  JoinLeague: undefined;
  JoinLeagueTeamName: undefined;
  LiveMatchDetail: undefined;
  Standing: undefined;
  TeamLevel: undefined;
  WinnerDetail: undefined;
  GameDetail: undefined;
  NewsDetail: undefined;
  TermsAndCondition: { title: string };
  ChangePassword: undefined;
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
