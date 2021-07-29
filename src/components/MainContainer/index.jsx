import React, { useEffect } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DarkBlueColor } from '../../assets/colors';
import * as globals from '../../utils/globals';
import Loader from '../Loader';
import ModalLoader from '../Loader/ModalLoader';
import Toast from 'react-native-simple-toast';

const MainContainer = ({
    children,
    loading,
    absolute,
    absoluteLoading,
    loaderTop,
    modalLoader,
    statusBarBg,
    style,
    statusBarTransclucent
}) => {
    const insets = useSafeAreaInsets()

    useEffect(() => {
        if (globals.toastMessage) {
            // alert(globals.toastMessage)
            Toast.show(globals.toastMessage, Toast.LONG)
            globals.toastMessage = ""
        }
    }, [globals.toastMessage])

    const absoluteLoadingContainer = () => {
        if (absoluteLoading) {
            if (modalLoader) return <ModalLoader />
            else return <Loader absolute={true} />
        }
    }
    if (loading) {
        if (modalLoader) {
            return (
                <ModalLoader />
            )
        } else {
            return (
                <Loader absolute={absolute} loaderTop={loaderTop} />
            )
        }
    }
    return (
        <View
            style={[{
                flex: 1,
                backgroundColor: "#f2f2f2",
                // paddingTop: insets.top,
                // marginBottom: insets.bottom,
                paddingRight: insets.right,
                paddingLeft: insets.left,
                paddingTop: statusBarTransclucent ? globals.getStatusBarHeight() : null,
                // paddingTop: Platform.OS == "ios" ? getStatusBarHeight() + 10 : 0,
                // marginBottom: getBottomSpace()

            }, style]}>
            {Platform.OS === "ios" && <SafeAreaView style={{ backgroundColor: statusBarBg ? statusBarBg : DarkBlueColor }} />}
            {children}
            {/* {error ? <ErrorView /> : children} */}
            {/* {(absoluteLoading) && <Loader absolute={true}
                // animating={absoluteLoading}
                />} */}
            {absoluteLoadingContainer()}
        </View>
    );

    // if (form)
    //     return (
    //         <KeyboardAwareScrollView
    //             contentContainerStyle={Style.safeAreaContainer}
    //             viewIsInsideTabBar>
    //             {_renderContainer()}
    //         </KeyboardAwareScrollView>
    //     );
};

export default MainContainer;
