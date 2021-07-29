import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Platform,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import Modal from 'react-native-modal';
import { PrimaryColor } from '../assets/colors';
import { hs, vs } from '../types/sizes';


interface Props {
    loading?: boolean,
    loadingLabel?: string,
}

const ModalLoader: React.FC<Props> = ({
    loading,
    loadingLabel
}) => {
    return (
        <Modal
            isVisible={true}
            statusBarTranslucent={true}
            backdropOpacity={0.5}
            useNativeDriverForBackdrop={true}
            useNativeDriver={true}
            animationIn="fadeIn"
            animationOut="fadeOut"
        // deviceHeight={screenHeight}
        >
            <View style={{
                backgroundColor: "white",
                width: "100%",
                height: 80,
                borderRadius: 2,
                justifyContent: "center",
                paddingLeft: 40
            }}>
                <View style={{ flexDirection: "row", alignItems: 'center' }} >
                    <ActivityIndicator
                        animating={loading}
                        color={PrimaryColor} size={35}
                    />
                    <Text style={styles.text1} >{loadingLabel || "Loading..."}</Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent"
    },
    modalView: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#00000080",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    AnroidActivityIndicatorWrapper: {
        justifyContent: "center",
        width: "80%",
        height: vs(100),
        borderRadius: 2,
        backgroundColor: "white"
    },
    text1: {
        fontSize: hs(20),
        color: "black",
        marginLeft: 30,
        letterSpacing: 0.5
    },
    IOSActivityIndicatorWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: hs(120),
        height: vs(120),
        borderRadius: 10,
        backgroundColor: "white"
    }
});

export default ModalLoader;
