import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface MainContainerTypes {
    children: ReactNode,
    loading?: boolean,
    absoluteLoading?: boolean,
    loaderTop?: boolean,
    modalLoading?: boolean,
    style?: StyleProp<ViewStyle>,
    absoluteModalLoading?: boolean,
    loadingLabel?: string,
    statusBarHeight?: boolean,
    errorMessage?: {
        data: {
            message: string
        },
        status: string
    } | any,
    successMessage?: string | any,
    topEdge?: boolean,
}