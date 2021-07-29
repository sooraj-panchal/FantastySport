
import React from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Text,
    Platform,
    ActivityIndicator
} from 'react-native';
// import {
//     MaterialIndicator,
//     SkypeIndicator,
//     UIActivityIndicator
// } from 'react-native-indicators'
import { PrimaryColor } from '../../assets/colors';
import { hs, vs } from '../../utils/styleUtils';
const ModalLoader = ({
    loading
}) => {
    return (
        <Modal transparent={true} visible={loading}>
            <View style={styles.modalView}>
                {Platform.OS == "android"
                    ? (
                        <View style={styles.AnroidActivityIndicatorWrapper}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }} >
                                <ActivityIndicator
                                    animating={loading}
                                    style={styles.indicator}
                                    color={PrimaryColor} size={35}
                                />
                                <Text style={styles.text1} >Loading...</Text>
                            </View>
                        </View>
                    )
                    : (
                        <View style={styles.IOSActivityIndicatorWrapper} >
                            <ActivityIndicator animating={loading}
                                color={PrimaryColor} size="large"
                            />
                        </View>
                    )
                }
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
        backgroundColor: "#00000080"
    },
    AnroidActivityIndicatorWrapper: {
        justifyContent: "center",
        width: "80%",  //100,
        height: vs(100), //100,
        borderRadius: 2,
        backgroundColor: "white"
    },
    indicator: {
        position: "absolute",
        left: hs(30),//30
    },
    text1: {
        left: hs(100), ///100,
        fontSize: hs(20),//20,
        color: PrimaryColor,
    },
    IOSActivityIndicatorWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: hs(120),  //100,
        height: vs(120), //100,
        borderRadius: 10,
        backgroundColor: "white"
    }
});

export default ModalLoader;
