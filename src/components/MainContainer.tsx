import React, { ReactNode, useEffect } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStatusBarHeight } from '../utils/globals';
// import * as globals from '../../utils/globals';
import Loader from './Loader';
import ModalLoader from './ModalLoader';

import Toast from 'react-native-simple-toast';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface Props {
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
    } | any
}

const MainContainer: React.FC<Props> = ({
    children,
    loading,
    absoluteLoading,
    loaderTop,
    modalLoading,
    style,
    absoluteModalLoading,
    loadingLabel,
    statusBarHeight,
    errorMessage
}) => {

    const insets = useSafeAreaInsets()

    useEffect(() => {
        if (errorMessage) {
            Toast.show(errorMessage.data.message, Toast.LONG)
        }
    }, [errorMessage])

    const absoluteLoadingContainer = () => {
        if (absoluteModalLoading) return <ModalLoader loadingLabel={loadingLabel} />
        if (absoluteLoading) return <Loader absoluteLoading />
    }
    const loadingContainer = () => {
        if (modalLoading) return <ModalLoader />
        if (loading) return <Loader loaderTop={loaderTop} />
        return children
    }

    return (
        <SafeAreaView
            style={[{
                flex: 1,
                backgroundColor: "#f2f2f2",
            }, style]}
            edges={['bottom', 'left', 'right']}
        >
            {loadingContainer()}
            {absoluteLoadingContainer()}
        </SafeAreaView>
    );
};

export default MainContainer;