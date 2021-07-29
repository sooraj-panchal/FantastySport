import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStatusBarHeight } from '../utils/globals';
// import * as globals from '../../utils/globals';
import Loader from './Loader';
import ModalLoader from './ModalLoader';

// import Toast from 'react-native-simple-toast';
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
    statusBarHeight?: boolean
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
    statusBarHeight
}) => {

    const insets = useSafeAreaInsets()

    // useEffect(() => {
    //     if (globals.toastMessage) {
    //         Toast.show(globals.toastMessage, Toast.LONG)
    //         globals.toastMessage = ""
    //     }
    // }, [globals.toastMessage])

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
        <View
            style={[{
                flex: 1,
                backgroundColor: "#f2f2f2",
                paddingRight: insets.right,
                paddingLeft: insets.left,
                paddingTop: statusBarHeight ? getStatusBarHeight() : 0
            }, style]}>
            {/* {
                isForm && Platform.OS === "ios" ?
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        enableOnAndroid={false}
                        extraHeight={80}
                    >
                        {loadingContainer()}
                        {absoluteLoadingContainer()}
                    </KeyboardAwareScrollView>
                    : */}
            <>
                {loadingContainer()}
                {absoluteLoadingContainer()}
            </>
            {/* } */}
        </View>
    );
};

export default MainContainer;