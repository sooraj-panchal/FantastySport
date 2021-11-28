import { Dimensions, Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function getStatusBarHeight(val = 0) {
  const insets = useSafeAreaInsets()
  return Platform.OS == "android" ? StatusBar.currentHeight + val : insets.top + val
}

export const baseUrl = "https://chessmafia.com/php/fantasy/api/"
// export const fcmToken = '';


