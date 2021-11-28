import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import { homeNavProps } from '../../../types/nav';
interface props {

}

const Video: React.FC<props> = ({

}) => {
    const navigation = useNavigation<homeNavProps>()

    const renderPlayButton = () => {
        return <Container
            containerStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                flexDirection: 'row',
                position: 'absolute',
                // bottom: 5,
                // right: 5,
            }}
            width={40} height={40}
            onPress={() => {
                navigation.navigate('NewsDetail')
            }}
        >
            <Container
                containerStyle={{
                    borderWidth: 2,
                    borderRadius: 35,
                    borderColor: "white",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                width={35} height={35}
            >
                <Ionicons
                    name="ios-play"
                    size={20}
                    color="white"
                />
            </Container>
        </Container>
    }
    return (
        <Container
            containerStyle={{
                backgroundColor: 'white',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                elevation: 2,
                overflow: 'hidden'
            }}
            // mpContainer={{ mt: 10 }}
            height={280}
            onPress={() => {
                navigation.navigate('NewsDetail')
            }}
        >
            <Container
                containerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Img
                    imgSrc={AppImages.newsImg}
                    imgStyle={{
                        width: "100%",
                    }}
                    height={190}
                />
                {renderPlayButton()}
            </Container>
            <Container
                mpContainer={{ mh: 10, mt: 10 }}
            >
                <Label
                    labelSize={15}
                    style={{ fontWeight: '900' }}
                >Main news title</Label>
                <Label
                    labelSize={12}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit, dicta error aspernatur.</Label>
                <Label
                    labelSize={10}
                    style={{ color: 'grey', letterSpacing: 0.5 }}
                    mpLabel={{ mt: 2 }}
                >Saturday, May 15</Label>
            </Container>
        </Container>
    )
}
export default Video