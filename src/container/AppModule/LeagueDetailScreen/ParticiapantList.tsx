import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SvgUri } from 'react-native-svg';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import { homeNavProps, navigationProps } from '../../../types/nav';
import { MYLeagueTeam } from '../../../types/responseTypes';
const ParticipantUserList: React.FC<MYLeagueTeam | any> = ({
    team_name, team_logo, rank, id
}) => {
    let imageUrl = team_logo ? `https://chessmafia.com/php/fantasy/public/uploads/${team_logo}` : ''
    let imageType = imageUrl?.split('.').pop() == 'svg';
    // console.log('imageType',imageType)
    const navigation = useNavigation<homeNavProps>()
    return (
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center'
            }}
            mpContainer={{ ph: 10 }}
            height={50}
            onPress={() => {
                navigation.navigate('TeamDetail', {
                    team_id: id,
                    fromOtherUser:true
                })
            }}
        >
            <Label
                labelSize={20}
                mpLabel={{ ml: 10 }}
                style={{ width: 40 }}
            >{rank}.</Label>
            <Container containerStyle={{
                backgroundColor: 'lightgrey',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: "center",
                overflow: 'hidden'
            }}
                width={30}
                height={30}
            >
                {/* <Img
                        imgSrc={AppImages.player}
                        imgStyle={{

                        }}
                        width={25}
                        height={30}
                    /> */}
                {
                    imageType ?
                        <SvgUri
                            width={40}
                            height={40}
                            uri={imageUrl || ''}
                        />
                        :
                        <Img
                            imgSrc={{ uri: imageUrl || '' }}
                            width={40} height={45} />
                }
            </Container>
            <Label
                labelSize={20}
                mpLabel={{ ml: 10 }}
            >{team_name}</Label>
        </Container>
    )
}

export default ParticipantUserList;