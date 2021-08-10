import React from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import InputBox from '../../../components/InputBox';
import Img from '../../../components/Img';
import { AppImages, AuthImages } from '../../../assets/images/map';
import { screenWidth } from '../../../types/sizes';
import { OrangeColor } from '../../../assets/colors';
interface props extends navigationProps {

}
const JoinLeagueTeamNameScreen: React.FC<props> = ({
    navigation
}) => {
    return (
        <MainContainer>
            <Img
                imgSrc={AuthImages.Splash_logo}
                imgStyle={{
                    alignSelf: "center",
                    width: screenWidth * 0.80
                }}
                height={100}
                mpImage={{ mt: 80 }}
            />
            <Container
                containerStyle={{
                    backgroundColor: 'white',
                    elevation: 1,
                    borderRadius: 5
                }}
                mpContainer={{ mt: 50, mh: 20, pv: 20 }}
            >
                <Label labelSize={18}
                    mpLabel={{ pl: 15 }}
                    style={{
                        fontWeight: '900'
                    }}
                >Join fantasy sniper league</Label>
                <Container
                    containerStyle={{flexDirection:'row',alignItems:'center'}}
                    mpContainer={{mt:15}}
                >
                    <Label labelSize={14}
                        mpLabel={{pl:15}}
                        style={{
                            fontWeight: '900'
                        }}
                    >Team name</Label>
                    <Img
                        imgSrc={AppImages.team}
                        imgStyle={{
                            alignSelf: "center",
                            width:20
                        }}
                        height={20}
                        mpImage={{ ml: 10 }}
                    />
                </Container>
                <InputBox
                    placeholder="Type here"
                    onPress={() => { }}
                    containerStyle={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                    }}
                    radius={5}
                    inputHeight={45}
                    mpContainer={{ mt: 10, mh: 15, pl: 10 }}
                    textSize={16}
                />
                <Btn
                    title="JOIN"
                    onPress={() => {
                        navigation.navigate('MyTeamTab', {
                            screen: 'MyTeam'
                        })
                    }}
                    btnStyle={{
                        backgroundColor: OrangeColor
                    }}
                    labelStyle={{ color: "white" }}
                    radius={5}
                    btnHeight={45}
                    mpBtn={{ mt: 20, mh: 20 }}
                    labelSize={14}
                />
            </Container>
        </MainContainer>
    )
}
export default JoinLeagueTeamNameScreen;