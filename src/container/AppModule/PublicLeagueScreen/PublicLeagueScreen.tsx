import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { useDispatch, useSelector } from 'react-redux';
import { MyLeagueList } from '../../../../arrayList';
import { DarkBlueColor, OrangeColor, redColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { useAllLeagueListQuery, useLeagueListQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { homeNavProps, navigationProps } from '../../../types/nav';
import { MyLeagueResponse, UserResponse } from '../../../types/responseTypes';
import { screenWidth } from '../../../types/sizes';


const PublicLeagueScreen: React.FC<navigationProps> = ({
    navigation
}) => {
    const { data, isLoading, error } = useAllLeagueListQuery(null, {
        refetchOnMountOrArgChange: true
    })
    const user: UserResponse = useSelector((store: RootState) => store.auth.user)

    // console.log('error', JSON.stringify(error))

    const renderItem: ListRenderItem<MyLeagueResponse> = ({ item, index }) => {
        return (
            <View key={index}>
                <Container
                    containerStyle={{
                        width: screenWidth * 0.90,
                        backgroundColor: "white",
                        elevation: 2,
                        alignSelf: 'center',
                        borderRadius: 10
                    }}
                    mpContainer={{ pl: 15, pv: 10 }}
                    onPress={() => {
                        // console.log(item)
                        // let parsedWeek = JSON.parse(item.week)
                        // dispatch(leagueDetailsWatcher({ ...item }))
                        // navigation.navigate('MyTeamTab', {
                        //     screen: 'MyTeam'
                        // })
                        console.log(item)
                        navigation.navigate('CreateTeam', {
                            week_id: item.week[0]?.week_id,
                            type: 'public',
                            league_id: item.league_id
                        })
                    }}
                >
                    <Label
                        labelSize={17}
                        style={{
                            color: "black"
                        }}
                    >{item.user_name}</Label>
                    <Container containerStyle={{
                        flexDirection: "row",
                        alignItems: 'center'
                    }} mpContainer={{ mt: 10 }} >
                        <Img
                            imgSrc={AppImages.green_logo}
                            imgStyle={{
                                height: 40, width: 40,
                                resizeMode: 'contain'
                            }}
                        />
                        <Label
                            labelSize={20}
                            style={{
                                color: "black",
                                fontWeight: "900"
                            }}
                            mpLabel={{ ml: 10 }}
                        >{item.name}</Label>
                    </Container>
                    {/* <Container containerStyle={{
                                    flexDirection: "row",
                                    alignItems: 'center'
                                }} mpContainer={{ mt: 10 }} >
                                    <Label
                                        labelSize={18}
                                        style={{
                                            letterSpacing: 0.5,
                                            color: "black",
                                            fontWeight: "900"
                                        }}
                                    >Match time : </Label>
                                    <Label
                                        labelSize={15}
                                        style={{
                                            letterSpacing: 0.5,
                                            color: "black",
                                            fontWeight: "900"
                                        }}
                                    >{item.league_match[0]?.start_time}</Label>
                                </Container> */}
                    <Img
                        imgSrc={AppImages.private}
                        imgStyle={{
                            width: 40, height: 40,
                            position: 'absolute',
                            right: 10,
                            top: 6,
                            resizeMode: 'contain'
                        }}
                    />
                    {/* <Label
                        labelSize={14}
                        style={{
                            color: OrangeColor,
                        }}
                        mpLabel={{ mt: 10 }}
                    >League full</Label> */}
                    {/* <Btn
                        title='Join'
                        btnStyle={{
                            width: 60, height: 25,
                            position: 'absolute',
                            right: 10,
                            top: 10,
                            borderRadius: 5,
                            borderColor: OrangeColor,
                            borderWidth: 1,
                            backgroundColor: 'white'
                        }}
                        labelStyle={{
                            color: OrangeColor,
                            fontSize: 14
                        }}
                        mpLabel={{ mt: -2 }}
                        onPress={() => { }}
                    /> */}
                </Container>
            </View>
        )
    }

    return (
        <MainContainer loading={isLoading} >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
            />
        </MainContainer>
    )
}
export default PublicLeagueScreen;
