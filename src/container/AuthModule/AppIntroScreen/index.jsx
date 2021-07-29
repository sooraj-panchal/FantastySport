import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PrimaryColor } from '../../../assets/colors';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import MainContainer from '../../../components/MainContainer';
import PagerView from 'react-native-pager-view';
import { View } from 'react-native';
import { useRef } from 'react';
import Label from '../../../components/Label';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';


export default function AppIntroScreen({

}) {

    const [page, setPage] = React.useState(0)

    const sliderImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2F6f_rSM-AGKWqF7T0VDwgVlQBsFWOipWCA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0P2tl_4JUmiWQLXySvEXI7MFN7N-sLewb0eMieqxsTyYyGdnS-_S2ICocMnmieAifyuI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsgGc0WaWY3trAvHYZ5v2uJD8YXT6CsYRLw&usqp=CAU"
    ]
    const viewPagerRef = useRef(null)

    return (
        <MainContainer>
            <PagerView style={{
                flex: 1
            }} initialPage={0}
                onPageSelected={(event) => {
                    console.log(event.nativeEvent.position)
                    setPage(event.nativeEvent.position)
                }}
                ref={viewPagerRef}
                offscreenPageLimit={20}

            >
                <View key={1}>
                    <FirstPage />
                </View>
                <View key={2}  >
                    <SecondPage />
                </View>
                <View key={3}>
                    <FirstPage />
                </View>
            </PagerView>
            <Container
                containerStyle={{
                    position: "absolute",
                    bottom: 60,
                    flexDirection: "row",
                    alignSelf: "center"
                }}
            >
                {[1, 2, 3].map((item, index) => {
                    return (
                        <Container
                            containerStyle={{
                                backgroundColor: index == page ? PrimaryColor : "white",
                                borderRadius: 20,
                                elevation: 2,
                                // borderWidth:0.5,
                                // borderColor:"white"
                            }}
                            mpContainer={{ mh: 5 }}
                            width={40} height={4}
                        >
                        </Container>
                    )
                })}
            </Container>
        </MainContainer>
    )
}
