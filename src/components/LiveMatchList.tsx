import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { greenColor } from '../assets/colors';
import { AppImages } from '../assets/images/map';
import { homeNavProps } from '../types/nav';
import { screenWidth } from '../types/sizes';
import Btn from './Btn';
import Container from './Container';
import Img from './Img';
import Label from './Label';

const LiveMatchList: React.FC = ({

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
                title="Cats vs Washing Machines"
                onPress={() => { 
                    navigation.navigate('LiveMatchDetail')
                }}
                btnStyle={{
                    elevation: 5,
                    borderRadius: 10,
                    backgroundColor: greenColor,
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
                    <Container
                        containerStyle={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <Img
                            imgStyle={{width:35,height:40}}
                            imgSrc={AppImages.green_logo}
                        />
                        {/* <Container containerStyle={{ backgroundColor: "red", borderRadius: 40 }} width={40} height={40} /> */}
                        <Label
                            labelSize={35}
                            style={{ color: "black", fontWeight: "bold" }}
                            mpLabel={{ ml: 20 }}
                        >0.00</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                        mpContainer={{}}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: "grey" }}
                            mpLabel={{ ml: 20 }}
                        >Proj</Label>
                        <Label
                            labelSize={16}
                            style={{ color: greenColor, fontWeight: "bold" }}
                            mpLabel={{ ml: 5 }}
                        >98.39</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                        mpContainer={{}}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: "grey" }}
                            mpLabel={{ ml: 20 }}
                        >Pred</Label>
                        <Label
                            labelSize={16}
                            style={{ color: greenColor, fontWeight: "bold" }}
                            mpLabel={{ ml: 5 }}
                        >98.39</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                        mpContainer={{}}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: "grey" }}
                            mpLabel={{ ml: 20 }}
                        >Actual</Label>
                        <Label
                            labelSize={16}
                            style={{ color: greenColor, fontWeight: "bold" }}
                            mpLabel={{ ml: 5 }}
                        >98.39</Label>
                    </Container>
                    <Label
                        labelSize={18}
                        style={{ color: "black" }}
                        mpLabel={{ mt: 10 }}
                    >Adam's Team</Label>
                    <Label
                        labelSize={22}
                        style={{ color: "black" }}
                        mpLabel={{ ml: 20 }}
                    >0-0-0</Label>
                </Container>
                <Container
                    containerStyle={{
                        width: 1,
                        backgroundColor: "lightgrey",
                        height: 120,

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
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <Label
                            labelSize={35}
                            style={{ color: "black", fontWeight: "bold" }}
                        >0.00</Label>
                           <Img
                            imgStyle={{width:35,height:40}}
                            imgSrc={AppImages.green_logo}
                            mpImage={{ml:15}}
                        />
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                        mpContainer={{}}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: greenColor, fontWeight: "bold" }}
                        >98.39</Label>
                        <Label
                            labelSize={16}
                            style={{ color: "grey" }}
                            mpLabel={{ ml: 5 }}
                        >Proj</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                        mpContainer={{}}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: greenColor, fontWeight: "bold" }}
                        >98.39</Label>
                        <Label
                            labelSize={16}
                            style={{ color: "grey" }}
                            mpLabel={{ ml: 5 }}
                        >Pred</Label>
                    </Container>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }}
                        mpContainer={{}}
                    >
                        <Label
                            labelSize={16}
                            style={{ color: greenColor, fontWeight: "bold" }}
                        >98.39</Label>
                        <Label
                            labelSize={16}
                            style={{ color: "grey" }}
                            mpLabel={{ ml: 5 }}
                        >Actual</Label>
                    </Container>
                    <Label
                        labelSize={18}
                        style={{ color: "black" }}
                        mpLabel={{ mt: 10 }}
                    >Adam's Team</Label>
                    <Label
                        labelSize={22}
                        style={{ color: "black" }}
                    >0-0-0</Label>
                </Container>
            </Container>
        </Container>
    </View>
}
export default LiveMatchList;