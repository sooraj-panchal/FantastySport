import React from 'react';
import { AppImages, AuthImages } from '../../../../assets/images/map';
import Btn from '../../../../components/Btn';
import Container from '../../../../components/Container';
import Img from '../../../../components/Img';
import InputBox from '../../../../components/InputBox';
import Label from '../../../../components/Label';
import MainContainer from '../../../../components/MainContainer';
import { navigationProps } from '../../../../types/nav';
interface props extends navigationProps {
}


const AddSniperPointScreen: React.FC<props> = ({
    navigation,
    route
}) => {
    // console.log(openModal)
    return (
        <MainContainer>
            <Container
                mpContainer={{ ph: 20, pv: 15, mt: 20, mh: 20 }}
                containerStyle={{
                    backgroundColor: "white",
                    elevation: 1,
                    borderRadius: 10
                }}
            >
                <Container
                    containerStyle={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    height={130}
                >
                    <Container>
                        <Label
                            labelSize={22}
                            style={{ fontWeight: '900', letterSpacing: 0.5 }}
                        >P. Mahomes</Label>
                        <Label
                            labelSize={16}
                            style={{ color: 'black', fontWeight: '900', letterSpacing: 0.5 }}
                            mpLabel={{ mt: 5 }}
                        >QB</Label>
                        <Label
                            labelSize={15}
                            style={{ letterSpacing: 0.5 }}
                            mpLabel={{ mt: 5 }}
                        >Sun 4:25 PM</Label>
                        <Label
                            labelSize={15}
                            style={{ letterSpacing: 0.5 }}
                        >vs SEA</Label>
                    </Container>
                    <Img
                        width={100}
                        height={100}
                        imgStyle={{ alignSelf: 'flex-end' }}
                        imgSrc={AppImages.player_1}
                    // containerStyle={{backgroundColor:"red"}}
                    />
                </Container>
                <Container containerStyle={{ backgroundColor: 'lightgrey' }} height={1} mpContainer={{}} />
                <Container
                    containerStyle={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                    mpContainer={{ mt: 15 }}
                >
                    <Container
                        containerStyle={{ alignItems: 'center' }}
                    >
                        <Label
                            labelSize={25}
                        >36.3</Label>
                        <Label
                            labelSize={16}
                            style={{ letterSpacing: 0.5 }}
                        >Proj</Label>
                    </Container>
                    <Container
                        containerStyle={{ alignItems: 'center' }}
                    >
                        <Label
                            labelSize={25}
                        >38.3</Label>
                        <Label
                            labelSize={16}
                            style={{ letterSpacing: 0.5 }}
                        >Pred</Label>
                    </Container>
                    <Container
                        containerStyle={{ alignItems: 'center' }}
                    >
                        <Label
                            labelSize={25}
                        >36.3</Label>
                        <Label
                            labelSize={16}
                            style={{ letterSpacing: 0.5 }}
                        >Actual</Label>
                    </Container>
                    <Container
                        containerStyle={{ alignItems: 'center' }}
                    >
                        <Label
                            labelSize={25}
                        >98%</Label>
                        <Label
                            labelSize={16}
                            style={{ letterSpacing: 0.5 }}
                        >Accuracy</Label>
                    </Container>
                </Container>
            </Container>
            <Container
                containerStyle={{
                    backgroundColor: "white",
                    elevation: 2,
                    borderRadius: 10
                }}
                mpContainer={{ pv: 20, mh: 20, mt: 20 }}
            >
                <Label labelSize={15} style={{ textAlign: 'center', letterSpacing: 0.5 }} >Enter sniper point prediction (s.p.pred)</Label>
                <InputBox
                    placeholder="Type here.."
                    mpContainer={{ mh: 20, mt: 15, pl: 15 }}
                    radius={5}
                />
                <Btn
                    title="ADD"
                    btnStyle={{ backgroundColor: 'red' }}
                    mpBtn={{ mt: 15, mh: 20 }}
                    btnHeight={45}
                    radius={5}
                    labelSize={16}
                    labelStyle={{ color: "white" }}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </Container>
        </MainContainer>
    )
}

export default AddSniperPointScreen