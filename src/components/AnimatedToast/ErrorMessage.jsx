import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    ZoomInUp,
    FadeOutUp,
} from 'react-native-reanimated';
import Container from '../Container';
import Label from '../Label';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { OrangeColor } from '../../assets/colors';
import { medium, regular } from '../../assets/fonts/fonts';
import { Portal } from 'react-native-portalize';
import { getStatusBarHeight } from '../../utils/globals';
import { useHeaderHeight } from '@react-navigation/elements';
const HEIGHT = 80;

const ErrorMessage = ( {
    message,
} ) => {
    const [ messageData, setMessageData ] = useState( '' );
    const HEIGHT = useHeaderHeight();
    const paddingTop = getStatusBarHeight();
    
    useEffect( () => {
        if ( message ) {
            setMessageData( message );
        }
        return ()=> setMessageData('')
    }, [ message ] );

    useEffect( () => {
       setTimeout(() => setMessageData( '' ),4000);
        // return () => {
        //     clearTimeout(timeOutInterval);
        //   };
    }, [ messageData ] );

    if ( messageData.length ) {
    return <Portal>
        <Animated.View style={ [ styles.notificationView, {
            paddingTop: paddingTop,
            height: HEIGHT,
        } ] }
            entering={ ZoomInUp.duration( 1000 ) }
            exiting={ FadeOutUp }
        >
            <Container
                containerStyle={ styles.messageView }
                mpContainer={ { ml: 10 } }
            >
                <Label
                    labelSize={ 14 }
                    style={ {
                        fontFamily: medium
                    } }
                    numberOfLines={ 2 }
                    textColor='white'
                >{ 'Error' }</Label>
                <Label
                    labelSize={ 14 }
                    style={ styles.message }
                    numberOfLines={ 2 }
                    textColor='white'
                >{ messageData }</Label>
            </Container>
            <MaterialIcons
                name='error'
                size={ 20 }
                color={ 'white' }
                style={ {
                    position: "absolute",
                    right: 15,
                    top: getStatusBarHeight()+10
                } }
            />
        </Animated.View>
    </Portal>;
            ;
    } else
        return null;
};

const styles = StyleSheet.create( {
    notificationView: {
        backgroundColor: OrangeColor,
        width: "100%",
        // paddingVertical: 10,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 10,
        elevation: 2,
    },
    messageView: {
        flex: 1,
    },
    message: {
        maxWidth: '80%',
        marginTop: 2,
        fontFamily: regular
    }
} );

export default ErrorMessage;
