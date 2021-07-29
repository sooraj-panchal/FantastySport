import { RouteProp, CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type ProfileParamList = {
  Profile: undefined;
  MyProperties: undefined;
  ContactedProperies: undefined;
  SavedSearch: undefined
};

export type FilterParamsList = {
  SearchingFor: undefined;
  LookingFor: undefined;
  Filter: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  AppIntro: undefined;
  Auth:undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Verification: {
    email: string
  };
  EmailSent: undefined;
  ResetPassword: undefined;
  SelectLocation: undefined;
  InviteFriend: undefined;
  ReachMoreBuyers: undefined;
  SkipLiveBlog: undefined;
  FilterStack: NavigatorScreenParams<FilterParamsList>;
  LiveBlog: undefined;
  SellerPostList: undefined;
  ChatDetail: { name: string };
};

export type settingParamList = {
  Setting: { title: string };
  ChangePassword: { title: string };
  TermsAndCondition: { title: string };
  Feedback: { title: string };
  Notification: { hello: string }
};

export type chatParamList = {
  Chat: undefined;
  ChatDetail: { name: string };
  Filter: undefined;
};

export type unAuthParamList = {
  tabs: NavigatorScreenParams<tabParamList>
  PropertyList: undefined;
  PropertyDetail: undefined;
  ChatStack: NavigatorScreenParams<chatParamList>;
  LiveBlog: undefined;
  BrokersProfile: undefined;
  SellerPostList: undefined;
  SettingStack: NavigatorScreenParams<settingParamList>;
  Notification:undefined;
  CreateOrJoin:undefined;
  CreateLeague:undefined;
  AddLiveMatches:undefined;
};

export type tabParamList = {
  Home: undefined;
  Search: undefined;
  Saved: undefined;
  LiveBlog: undefined;
  ProfileStack: NavigatorScreenParams<ProfileParamList>
};



export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;

export type settingRoutProps = RouteProp<settingParamList, 'Feedback'>;


export type authRouteProp = RouteProp<RootStackParamList, 'Verification'>;

export type authNavigationeProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type homeNavProps = CompositeNavigationProp<
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
