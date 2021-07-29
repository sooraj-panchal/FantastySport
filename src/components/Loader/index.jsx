import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { PrimaryColor } from '../../assets/colors';

import styles from './styles';


const Loader = ({ absolute, loaderTop }) => {
    //  = absolute ? styles.absLoadingContainer : styles.loadingContainer
    let style
    if (absolute) {
        console.log(styles.absLoadingContainer)
        style = styles.absLoadingContainer
    }
    if (!absolute) {
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

export default Loader;

