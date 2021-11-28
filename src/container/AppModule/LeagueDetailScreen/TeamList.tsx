import React from 'react';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import { SvgUri } from 'react-native-svg';
import { useDate, useTime } from '../../../utils/timeZone';
import { MYLeagueTeam } from '../../../types/responseTypes';

const TeamList: React.FC<MYLeagueTeam> = ({
    team_logo,
    team_name,
    op_team_name,
    op_team_logo,
    team_key,
    op_team_key,
    start_time,
    // onPress
}) => {

    return (
        <Container
            containerStyle={{
                backgroundColor: "white",
                height: 140,
                elevation: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "flex-start",
            }}
            mpContainer={{ mh: 15 }}
        >
            <Container
                containerStyle={{ flexDirection: "row", alignItems: "center" }}
            >
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }}
                    width={100}
                    height={100}
                >
                    <Container height={45} >
                        {
                            team_logo?.split('.').pop() == 'svg' ?
                                <SvgUri
                                    width={45}
                                    height={45}
                                    uri={team_logo}
                                />
                                :
                                <Img
                                    imgSrc={{ uri: team_logo }}
                                    imgStyle={{}}
                                    width={40} height={45} />
                        }
                    </Container>
                    <Label
                        labelSize={15}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >{team_name}</Label>
                    {/* <Label
                        labelSize={12}
                        style={{}}
                        numberOfLines={1}
                        mpLabel={{ mt: 5 }}
                    >({team_name})</Label> */}
                    <Label
                        labelSize={12}
                        style={{}}
                        numberOfLines={1}
                        mpLabel={{ mt: 5, ml: 10 }}
                    >(Home Team)</Label>
                </Container>
                <Label labelSize={16} mpLabel={{ mt: 5, mh: 5 }} style={{ color: "grey", letterSpacing: 0.5 }} >VS</Label>
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }}
                    width={100}
                    height={100}
                >
                    <Container height={45} >
                        {
                            op_team_logo?.split('.').pop() == 'svg' ?
                                <SvgUri
                                    width={45}
                                    height={45}
                                    uri={op_team_logo}
                                />
                                :
                                <Img
                                    imgSrc={{ uri: op_team_logo }}
                                    imgStyle={{}}
                                    width={40} height={45} />
                        }
                    </Container>
                    <Label
                        labelSize={15}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >{op_team_name}</Label>
                    <Label
                        labelSize={12}
                        style={{}}
                        numberOfLines={1}
                        mpLabel={{ mt: 5, ml: 10 }}
                    >(Away Team)</Label>
                </Container>
            </Container>
            <Container containerStyle={{
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-around',
                width: '100%'
            }}
                mpContainer={{ mt: 5 }}
            >
                <Label
                    labelSize={16}
                    style={{}}
                    mpLabel={{}}
                >{useDate(start_time)} </Label>
                <Label
                    labelSize={16}
                >{useTime(start_time)} </Label>
            </Container>
        </Container>
    )
}
export default TeamList;