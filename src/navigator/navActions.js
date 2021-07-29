import { CommonActions } from "@react-navigation/native";
//import { Routes } from "src/utils/routes";

export const AppStack = CommonActions.reset({
    index: 0,
    routes: [
        { name: "AppStack" },
    ],
})
export const AuthStack = CommonActions.reset({
    index: 0,
    routes: [
        { name: "AuthStack" },
    ],
})