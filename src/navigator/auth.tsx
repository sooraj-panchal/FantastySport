import React from 'react';
import LoginScreen from '../container/AuthModule/LoginScreen/view';
import RegisterScreen from '../container/AuthModule/RegisterScreen/view';
import ForgotPasswordScreen from '../container/AuthModule/ForgotPasswordScreen/view';
import EmailSentScreen from '../container/AuthModule/EmailSentScreen';
import VerificationScreen from '../container/AuthModule/VerificationScreen/view';
import ResetPasswordScreen from '../container/AuthModule/ResetPasswordScreen/view';
import AppIntroScreen from '../container/AuthModule/AppIntroScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/nav';
import AuthScreen from '../container/AuthModule/AuthScreen';

const StackScreen = createNativeStackNavigator<RootStackParamList>()

const AuthStackScreen:React.FC = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="AppIntro"
            screenOptions={{
                // headerShown: false,
                animation: 'slide_from_right',
                headerBackTitleVisible: false,
                headerShown:false
            }}
        >
            <StackScreen.Screen
                name="AppIntro"
                component={AppIntroScreen}
            />
            <StackScreen.Screen
                name="Auth"
                component={AuthScreen}
            />
            <StackScreen.Screen
                name="Login"
                component={LoginScreen}
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
                name="Register"
                component={RegisterScreen}
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
                name="ForgotPassword"
                component={ForgotPasswordScreen}
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
                name="EmailSent"
                component={EmailSentScreen}
            />
            <StackScreen.Screen
                name="Verification"
                component={VerificationScreen}
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
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'transparent' },
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerTransparent: true,
                    headerTintColor: "white"
                }}
            />
        </StackScreen.Navigator>
    )
}

export default AuthStackScreen;
