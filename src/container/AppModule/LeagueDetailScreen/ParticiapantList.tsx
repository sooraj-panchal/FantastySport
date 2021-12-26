import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import { homeNavProps, navigationProps } from '../../../types/nav';
import { MYLeagueTeam } from '../../../types/responseTypes';
import { imageBaseUrl } from '../../../utils/globals';
const ParticipantUserList: React.FC<MYLeagueTeam | any> = ({
    team_name, team_logo, rank, id, team_id,
    is_game_created,
    onPressTeamHandler
}) => {
    let imageUrl = team_logo ? `${imageBaseUrl}${team_logo}` : ''
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
                onPressTeamHandler()
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
                        imageUrl ?
                            <Img
                                imgSrc={{ uri: imageUrl || '' }}
                                width={40} height={45} /> :
                            <Container
                                containerStyle={{
                                    borderRadius: 100,
                                    justifyContent: 'center', alignItems: 'center',
                                    overflow: 'hidden',
                                    backgroundColor: 'white',
                                    borderWidth: 3,
                                    borderColor: 'white'
                                }}
                                width={40} height={40}
                            >
                                <Ionicons
                                    name='person'
                                    size={25}
                                    color='grey'
                                />
                            </Container>
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