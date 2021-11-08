import React from 'react';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { OrangeColor } from '../../../assets/colors';
import { firebase } from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const InviteFriendScreen: React.FC<any> = ({

}) => {
    const { leagueDetails } = useSelector((state: RootState) => state.selectedLeague)
    console.log('leagueDetails', leagueDetails.week[0].week_id)

    const createLink = async () => {
        let code = leagueDetails.unique_code
        const link = await firebase.dynamicLinks().buildShortLink({
            link: `https://fantasysniper?code=${code}&week_id=${leagueDetails.week[0].week_id}`,
            android: {
                packageName: 'com.fantastysport',
            },
            domainUriPrefix: 'https://fantasysport.page.link',
            social: {
                title: 'Join NFL Vip League',
                descriptionText: 'Join League and create your team match to get your rank on the top of the NFL League',
                imageUrl: 'https://clutchpoints.com/wp-content/uploads/2021/05/NFL-Tom-Brady-Peyton-Manning-Joe-Montana.jpg'
            }
        });
        return link;
    }

    async function joinTeamCode() {
        const url = await createLink();
        console.log('url==>', url);
        Share.open({
            title: "Fantasy sniper app",
            message: `League code ${leagueDetails.unique_code}`,
            url: url,
        })
            .then((res) => {
                console.log("share res", res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }

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
                    title={leagueDetails.unique_code}
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
                    onPress={joinTeamCode}
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
export default InviteFriendScreen;