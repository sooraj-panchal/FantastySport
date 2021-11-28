import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Animated, {
    ZoomInUp,
    FadeOutUp,
} from 'react-native-reanimated';
import { AppImages, AuthImages } from '../assets/images/map';
import Container from './Container';
import Img from './Img';
import Label from './Label';

const HEIGHT = 95;

const AnimatedToast = ( {
    message
} ) => {
    if ( message ) {
        return <Animated.View style={ [ styles.notificationView ] }
            entering={ ZoomInUp.duration( 1000 ) }
            exiting={ FadeOutUp }
        >
            <Img
                imgSrc={ AppImages.green_logo }
                width={ 60 }
                height={ 60 }
            />
            <Container
                containerStyle={ styles.messageView }
                mpContainer={ { ml: 10 } }
            >
                <Label
                    labelSize={ 14 }
                >{ title }</Label>
                <Label
                    labelSize={ 14 }
                    labelStyle={ styles.message }
                    numberOfLines={ 2 }
                >{ message }</Label>
            </Container>
        </Animated.View>;
    } else return null;
};

const styles = StyleSheet.create( {
    notificationView: {
        backgroundColor: 'white',
        width: "100%",
        height: HEIGHT,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 10,
        paddingTop: 25,
        elevation: 2
    },
    messageView: {
        flex: 1
    },
    message: {
        maxWidth: '80%'
    }
} );

export default AnimatedToast;
