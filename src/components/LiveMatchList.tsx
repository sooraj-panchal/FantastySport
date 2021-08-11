import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { greenColor } from '../assets/colors';
import { medium } from '../assets/fonts/fonts';
import { AppImages } from '../assets/images/map';
import { homeNavProps } from '../types/nav';
import { screenWidth } from '../types/sizes';
import Btn from './Btn';
import Container from './Container';
import Img from './Img';
import Label from './Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
interface props {
    color: string,
    onChangeTeam: () => void
}

const LiveMatchList: React.FC<props> = ({
    color,
    onChangeTeam
}) => {
    const navigation = useNavigation<homeNavProps>()
    return <View>
        <Container
            containerStyle={{
                width: screenWidth * 0.90,
                backgroundColor: "white",
                elevation: 2,
                alignSelf: 'center',
                borderRadius: 10,
                overflow: "hidden"
            }}
            mpContainer={{ pb: 10 }}
        >
            <Btn
                title="BBC league"
                onPress={() => {
                    navigation.navigate('LiveMatchDetail')
                }}
                btnStyle={{
                    elevation: 5,
                    borderRadius: 10,
                    backgroundColor: color,
                    justifyContent: "flex-start"
                }}
                mpBtn={{ pl: 10 }}
                labelSize={14}
                labelStyle={{ color: "white" }}
                btnHeight={45}
                rightIcon={() => {
                    return <Container
                        containerStyle={{
                            position: "absolute",
                            right: 10
                        }}
                    >
                        <Label labelSize={15} style={{ color: "white" }} >{`View >`}</Label>
                    </Container>
                }}
            />
            <Container containerStyle={{ flexDirection: "row" }} mpContainer={{ mt: 10 }} >
                <Container
                    containerStyle={{
                        width: "45%",
                        alignItems: "flex-end",
                    }}
                >
                    <Label
                        labelSize={16}
                        style={{ color: "black" }}
                        mpLabel={{ mr: 20 }}
                    >Joshu's Team</Label>
                    <Container
                        containerStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Img
                            imgStyle={{ width: 35, height: 40 }}
                            imgSrc={AppImages.green_logo}
                        />
                        {/* <Container containerStyle={{ backgroundColor: "red", borderRadius: 40 }} width={40} height={40} /> */}
                        <Label
                            labelSize={35}
                            style={{ color: "black", fontWeight: "bold" }}
                            mpLabel={{ ml: 20 }}
                        >0.00</Label>
                    </Container>
                </Container>
                <Container
                    containerStyle={{
                        width: 1,
                        backgroundColor: "lightgrey",
                        height: 80,

                    }}
                    mpContainer={{ mh: 20 }}
                />
                <Container
                    containerStyle={{
                        width: "45%",
                        alignItems: "flex-start"
                    }}
                >
                    <Container
                        containerStyle={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={onChangeTeam}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: "black" }}
                            mpLabel={{ mr: 2 }}
                        >Frank the tank</Label>
                        <Ionicons
                            name="md-chevron-down"
                            size={18}
                            color="black"
                            style={{ top: 1 }}
                        />
                    </Container>
                    <Container
                        containerStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        mpContainer={{ mt: 5 }}
                    >
                        <Label
                            labelSize={35}
                            style={{ color: "black", fontWeight: "bold" }}
                        >0.00</Label>
                        <Img
                            imgStyle={{ width: 35, height: 40 }}
                            imgSrc={AppImages.green_logo}
                            mpImage={{ ml: 15 }}
                        />
                    </Container>
                </Container>
            </Container>
            <Container containerStyle={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'center'
            }}
                mpContainer={{ mt: 5 }}
            >
                <Label
                    labelSize={16}
                    style={{ color: greenColor, fontFamily: medium }}
                >94.3</Label>
                <Label
                    labelSize={16}
                    style={{ color: 'grey', fontFamily: medium, width: 70, textAlign: 'center' }}
                >S.Pts</Label>
                <Label
                    labelSize={16}
                    style={{ color: 'grey', fontFamily: medium }}
                >83.4</Label>
            </Container>
            <Container containerStyle={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'center'
            }}
                mpContainer={{ mt: 5 }}
            >
                <Label
                    labelSize={16}
                    style={{ color: greenColor, fontFamily: medium }}
                >3</Label>
                <Label
                    labelSize={16}
                    style={{ color: 'grey', fontFamily: medium, width: 70, textAlign: 'center' }}
                >Pl.Rem</Label>
                <Label
                    labelSize={16}
                    style={{ color: 'grey', fontFamily: medium }}
                >3</Label>
            </Container>
            <Container containerStyle={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'center'
            }}
                mpContainer={{ mt: 5 }}
            >
                <Label
                    labelSize={16}
                    style={{ color: greenColor, fontFamily: medium }}
                >3</Label>
                <Label
                    labelSize={16}
                    style={{ color: 'grey', fontFamily: medium, width: 70, textAlign: 'center' }}
                >Rank</Label>
                <Label
                    labelSize={16}
                    style={{ color: 'grey', fontFamily: medium }}
                >1</Label>
            </Container>
        </Container>
    </View>
}
export default LiveMatchList;