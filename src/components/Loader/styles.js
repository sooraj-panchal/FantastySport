import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
