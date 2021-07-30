import React from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
interface props extends navigationProps {

}
const InviteFriendScreen: React.FC<props> = ({

}) => {
    return (
        <MainContainer>
            <Label
                labelSize={20}
                style={{ letterSpacing: 0.5 }}
                mpLabel={{ mt: 20, ml: 20 }}
            >Invite your friends</Label>
            <Container
                containerStyle={{
                    backgroundColor: 'rgba(198, 223, 247,0.5)',
                    // elevation: 1,
                    borderRadius: 5
                }}
                height={150}
                mpContainer={{ mt: 10, mh: 20 }}
            >
                <Label labelSize={16}
                    mpLabel={{ pt: 10, pl: 15 }}
                    style={{
                        fontWeight: '900'
                    }}
                >League code</Label>
                <Label labelSize={14}
                    mpLabel={{ pt: 5, ph: 15 }}
                    style={{
                        fontWeight: '900'
                    }}
                >If your friends have created team, they can use this code to join your league.</Label>
                <Btn
                    title="1010F82G3YR"
                    onPress={() => { }}
                    btnStyle={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderColor: 'grey',
                        borderStyle: "dashed"
                    }}
                    labelStyle={{ color: "black" }}
                    radius={5}
                    btnHeight={45}
                    mpBtn={{ mt: 20, mh: 20 }}
                    labelSize={16}
                    rightIcon={() => <Ionicons name="copy-outline" size={25} color="grey" style={{ position: "absolute", right: 15 }} />}
                />
            </Container>
            <Container
                containerStyle={{
                    backgroundColor: 'rgba(198, 223, 247,0.5)',
                    // elevation: 1,
                    borderRadius: 5
                }}
                mpContainer={{ mt: 15, mh: 20, pv: 10 }}
            >
                <Label labelSize={16}
                    mpLabel={{ pl: 15 }}
                    style={{
                        fontWeight: '900'
                    }}
                >Share your league</Label>
                <Label labelSize={14}
                    mpLabel={{ pt: 5, ph: 15 }}
                    style={{
                        fontWeight: '900'
                    }}
                >Invite friends using your chat apps.</Label>
                <Btn
                    title="SHARE LEAGUE"
                    onPress={() => { }}
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
export default InviteFriendScreen;