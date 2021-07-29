import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ActivityIndicator } from 'react-native';
import { PrimaryColor } from '../assets/colors';

interface Props {
    absoluteLoading?: boolean,
    loaderTop?: boolean,
}

const Loader: React.FC<Props> = ({ absoluteLoading, loaderTop }) => {
    let style
    if (absoluteLoading) {
        style = styles.absLoadingContainer
    }
    if (!absoluteLoading) {
        if (loaderTop) {
            style = styles.loaderTopStyle
        }
        style = styles.loadingContainer
    }
    return (
        <View style={style}>
            <ActivityIndicator size="large" color={PrimaryColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    absLoadingContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 100
    },
    loaderTopStyle: {
        marginTop: 100,
    }
});

export default Loader;

