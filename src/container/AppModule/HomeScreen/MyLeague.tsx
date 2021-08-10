import React from 'react';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { MyLeagueList } from '../../../../arrayList';
import { DarkBlueColor, OrangeColor, redColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { screenWidth } from '../../../types/sizes';


const MyLeague: React.FC = ({

}) => {
    const [page, setPage] = React.useState(0)

    return (
        <Container>
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}
                mpContainer={{ pt: 20, ph: 20 }}
            >
                <Label
                    labelSize={16}
                    style={{
                        fontFamily: medium
                    }}
                >My League</Label>
                <Label
                    labelSize={16}
                    style={{
                        color: "grey"
                    }}
                >View all</Label>
            </Container>
            <PagerView
                initialPage={0}
                style={{
                    height: 150,
                    marginTop: 10,
                }}
                onPageSelected={(event) => {
                    console.log(event.nativeEvent.position)
                    setPage(event.nativeEvent.position)
                }}
            >
                {
                    MyLeagueList.map((item, index) => {
                        return <View key={index}>
                            <Container
                                containerStyle={{
                                    width: screenWidth * 0.90,
                                    height: 140,
                                    backgroundColor: "white",
                                    elevation: 2,
                                    alignSelf: 'center',
                                    borderRadius: 10
                                }}
                                mpContainer={{ pl: 15 }}
                            >
                                <Label
                                    labelSize={17}
                                    style={{
                                        letterSpacing: 0.5,
                                        color: "black"
                                    }}
                                    mpLabel={{ mt: 10 }}
                                >{item.name}</Label>
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
                                            letterSpacing: 0.5,
                                            color: "black",
                                            fontWeight: "900"
                                        }}
                                        mpLabel={{ ml: 10 }}
                                    >{item.league_name}</Label>
                                </Container>
                                <Container containerStyle={{
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
                                    >{item.match_time}</Label>
                                </Container>
                                <Img
                                    imgSrc={AppImages.private}
                                    imgStyle={{
                                        width: 45, height: 45,
                                        position: 'absolute',
                                        right: 10,
                                        top: 10,
                                        resizeMode: 'contain'
                                    }}
                                />
                            </Container>
                        </View>
                    })
                }
            </PagerView>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignSelf: "center"
                }}
                mpContainer={{ mt: 5 }}
            >
                {MyLeagueList.map((item, index) => {
                    return (
                        <Container key={`paginDot ${index}`}
                            containerStyle={{
                                backgroundColor: index == page ? DarkBlueColor : "#f2f2f2",
                                borderRadius: 40,
                                elevation: 0.5,
                                borderWidth: index == page ? 0 : 1,
                                borderColor: "grey"
                            }}
                            mpContainer={{ mh: 2 }}
                            width={8} height={8}
                        >
                        </Container>
                    )
                })}
            </Container>
        </Container>
    )
}
export default MyLeague;
