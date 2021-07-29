import React from 'react';
import LoginScreen from '../container/AuthModule/LoginScreen';
import RegisterScreen from '../container/AuthModule/RegisterScreen';
import ForgotPasswordScreen from '../container/AuthModule/ForgotPasswordScreen';
import EmailSentScreen from '../container/AuthModule/EmailSentScreen';
import VerificationScreen from '../container/AuthModule/VerificationScreen';
import ResetPasswordScreen from '../container/AuthModule/ResetPasswordScreen';
import SelectLocationScreen from '../container/AuthModule/SelectLocation';
import AppIntroScreen from '../container/AuthModule/AppIntroScreen';
import InviteFriendScreen from '../container/AuthModule/InviteFriendScreen';
import ReachMoreBuyersScreen from '../container/AppModule/ReachMoreBuyersScreen';
import FilterScreen from '../container/AppModule/FilterScreen';
import LiveBlogScreen from '../container/AppModule/LiveBlogScreen';
import SellerPostListScreen from '../container/AppModule/SellerPostListScreen';
import ChatDetailScreen from '../container/AppModule/ChatDetailScreen';
import SearchingForScreen from '../container/AppModule/SearchingForScreen';
import LookingForScreen from '../container/AppModule/LookingForScreen';
import SkipLiveBlogScreen from '../container/AppModule/SkipLiveBlogScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FilterParamsList, RootStackParamList } from '../types/nav';
import HeaderBtn from '../components/HeaderBtn';
import Label from '../components/Label';
import { medium } from '../assets/fonts/fonts';

// const StackScreen = createNativeStackNavigator();
const StackScreen = createNativeStackNavigator<RootStackParamList>()
const FilterStackScreen = createNativeStackNavigator<FilterParamsList>()

const FilterStack = () => {
    return (
        <FilterStackScreen.Navigator
            initialRouteName="SearchingFor"
            screenOptions={{ animation: "fade" }}
        >
            <FilterStackScreen.Screen
                name="SearchingFor"
                component={SearchingForScreen}
                options={{
                    headerShown: false
                }}
            />
            <FilterStackScreen.Screen
                name="LookingFor"
                component={LookingForScreen}
                options={{
                    headerShadowVisible: false,
                    headerTranslucent: true,
                    headerShown: true,
                    headerBackVisible: false,
                    headerTitle: ({ tintColor }) => {
                        return null
                    },
                    headerLeft: ({ tintColor }) => {
                        return (
                            <HeaderBtn headerStyle={{ marginLeft: 0 }} />
                        )
                    }
                }}
            />
            <FilterStackScreen.Screen
                name="Filter"
                component={FilterScreen}
                options={{
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    headerTitle: ({ tintColor }) => {
                        return <Label style={{ fontFamily: medium }} labelSize={18} mpLabel={{ ml: 20, mt: 4 }}  >Live blog</Label>
                    },
                    headerLeft: ({ tintColor }) => {
                        return (
                            <HeaderBtn headerStyle={{ marginLeft: 0 }} />
                        )
                    }
                }}
            />
        </FilterStackScreen.Navigator>
    )
}

const AuthStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="AppIntro"
            screenOptions={{
                // ...TransitionPresets.DefaultTransition,
                // detachPreviousScreen: ,
                // animationEnabled:false
                headerShown: false,
                animation:"fade"
                // headerStatusBarHeight: getStatusBarHeight(),
            }}
        >
            <StackScreen.Screen
                name="Login"
                component={LoginScreen}
            />
            <StackScreen.Screen
                name="Register"
                component={RegisterScreen}
            />
            <StackScreen.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
            />
            <StackScreen.Screen
                name="EmailSent"
                component={EmailSentScreen}
            />
            <StackScreen.Screen
                name="Verification"
                component={VerificationScreen}
            />
            <StackScreen.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
            />
            <StackScreen.Screen
                name="SelectLocation"
                component={SelectLocationScreen}
            />
            <StackScreen.Screen
                name="AppIntro"
                component={AppIntroScreen}
            />
            <StackScreen.Screen
                name="InviteFriend"
                component={InviteFriendScreen}
            />
            <StackScreen.Screen
                name="ReachMoreBuyers"
                component={ReachMoreBuyersScreen}
            />
            <StackScreen.Screen
                name="SkipLiveBlog"
                component={SkipLiveBlogScreen}
            />
            <StackScreen.Screen
                name="FilterStack"
                component={FilterStack}
            />
            <StackScreen.Screen
                name="LiveBlog"
                component={LiveBlogScreen}
                options={{
                    headerShadowVisible: false,
                    headerShown: true,
                    headerBackVisible: false,
                    headerTitle: ({ tintColor }) => {
                        return <Label style={{ fontFamily: medium }} labelSize={18} mpLabel={{ ml: 20, mt: 4 }}  >Live blog</Label>
                    },
                    headerLeft: ({ tintColor }) => {
                        return (
                            <HeaderBtn headerStyle={{ marginLeft: 0 }} />
                        )
                    }
                }}
            />
            <StackScreen.Screen
                name="SellerPostList"
                component={SellerPostListScreen}
                options={{
                    headerShadowVisible: false,
                    headerShown: true,
                    headerBackVisible: false,
                    headerTitle: ({ tintColor }) => {
                        return <Label style={{ fontFamily: medium }} labelSize={18} mpLabel={{ ml: 20, mt: 4 }}  >Seller 1</Label>
                    },
                    headerLeft: ({ tintColor }) => {
                        return (
                            <HeaderBtn headerStyle={{ marginLeft: 0 }} />
                        )
                    }
                }}
            />
            {/* <StackScreen.Screen
                name="ChatDetail"
                component={ChatDetailScreen}
                options={({ route, navigation }) => ({
                    // headerTitle: route.params?.name,
                    headerStyle: {
                        elevation: 1,
                        backgroundColor: "white"
                    },
                    headerShown: true,
                    headerLeftContainerStyle: {
                        backgroundColor: "white",
                        elevation: 2,
                        borderRadius: 40,
                        width: 40,
                        height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                        marginTop: 10
                    },
                })}
            /> */}
        </StackScreen.Navigator>
    )
}
export default AuthStackScreen;
