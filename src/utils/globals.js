import { Dimensions, Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export function getStatusBarHeight(val= 0) {
  const insets = useSafeAreaInsets()
  return Platform.OS == "android" ? StatusBar.currentHeight + val : insets.top + val
}

export const appName = 'BuyABlock'
export const mainUrl = "https://chessmafia.com/php/BuyaBlock/api/buyer/"
export const isInternetConnected = true;
export const fcmToken = '';
export const authToken = "sJ4[pR3=bM5^gJ0]pS6.gI2$hV5*uS"
export const toastMessage = ""
export const buyer_id = ""


export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const iPhoneX =
  Platform.OS === "ios" &&
  Dimensions.get("window").height === 812 &&
  Dimensions.get("window").width === 375;


export const registerUser = 'auth/register'
export const otp_verify = 'auth/verifyOtp'
export const loginUser = 'auth/login'
export const forgotPassword = 'auth/forgotPassword'
export const Resetpassword = 'auth/Resetpassword'
// export const getUserData = 'user/Getprofile'
// export const updateProfile = 'user/Updateprofile'

