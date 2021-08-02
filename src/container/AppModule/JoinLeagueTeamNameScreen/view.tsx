import React from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import InputBox from '../../../components/InputBox';
interface props extends navigationProps {

}
const JoinLeagueTeamNameScreen: React.FC<props> = ({
    navigation
}) => {
    return (
        <MainContainer>
            <Label
                labelSize={50}
                style={{
                    textAlign: 'center',
                    alignSelf: "center",
                    color: 'black'
                }}
                mpLabel={{ mt: 50 }}
            >Fantasty League</Label>
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
                <Label labelSize={14}
                    mpLabel={{ pt: 15, ph: 15 }}
                    style={{
                        fontWeight: '900'
                    }}
                >Team name</Label>
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
                        backgroundColor: "red"
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