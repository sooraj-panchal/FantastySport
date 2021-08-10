import React from 'react';
import { View } from 'react-native';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import { AppImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { screenWidth } from '../../../types/sizes';

interface props extends navigationProps {

}
const CreateOrJoin: React.FC<props> = ({
    navigation, route
}) => {

    const headerLayout = () => {
        return <>
            <View style={{
                transform: [{ rotate: '180deg' }]
            }}>
                <View style={{
                    borderBottomWidth: 140,
                    borderBottomColor: "#58d3f5",
                    borderLeftWidth: screenWidth / 2,
                    borderLeftColor: "transparent",
                    borderRightWidth: screenWidth / 2,
                    borderRightColor: "transparent",
                    height: 0,
                    width: 0,
                    left: 0,
                    top: -140,
                    position: "absolute",
                }} />
                <View style={{
                    backgroundColor: "#58d3f5",
                    height: 250,
                    width: screenWidth,
                }} />
            </View>
            <View
                style={{
                    backgroundColor: 'white',
                    height: 265,
                    width: 10,
                    left: 70,
                    bottom: 75,
                    transform: [{ rotate: '-50deg' }]
                }}
            />
            <View
                style={{
                    backgroundColor: 'white',
                    height: 265,
                    width: 10,
                    right: 75,
                    top: 180,
                    transform: [{ rotate: '52deg' }],
                    position: "absolute",
                }}
            />
        </>
    }

    return <MainContainer
        style={{
            // justifyContent: "center",
            backgroundColor: PrimaryColor
        }}
    >
        {headerLayout()}
        <Container
            containerStyle={{
                top: 100,
                position: 'absolute',
                alignSelf: "center",
                justifyContent: "center",
                alignItems: 'center'
            }}
        >
            <Label
                labelSize={50}
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    letterSpacing: 0.5
                }}
            >Fantasty League</Label>
            <Img
                imgSrc={AppImages.cup}
                imgStyle={{
                    width: 180,
                    height:180,
                    // resizeMode: "contain",
                }}
                mpImage={{ mt: 60 }}
            />
            <Btn
                title="CREATE LEAGUE"
                btnStyle={{
                    backgroundColor: "white",
                    width: screenWidth * 0.90
                }}
                radius={5}
                btnHeight={50}
                labelSize={16}
                labelStyle={{

                }}
                mpBtn={{ mt: 60 }}
                onPress={() => {
                    navigation.navigate('CreateLeague')
                }}
            />
            <Btn
                title="JOIN LEAGUE"
                btnStyle={{
                    backgroundColor: OrangeColor,
                    width: screenWidth * 0.90
                }}
                radius={5}
                btnHeight={50}
                labelSize={16}
                labelStyle={{
                    color: "white"
                }}
                mpBtn={{ mt: 15 }}
                onPress={() => {
                    navigation.navigate("JoinLeague")
                }}
            />
        </Container>

    </MainContainer >
}
export default CreateOrJoin;