import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
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
import ThirdPage from './ThirdPage';
import Btn from '../../../components/Btn';
import { navigationProps } from '../../../types/nav';

interface props extends navigationProps {

}

const AppIntroScreen: React.FC<props> = ({
    navigation, route
}) => {
    const [page, setPage] = React.useState(0)
    const viewPagerRef = useRef(null)

    return (
        <MainContainer
            statusBarHeight
        >
            <PagerView style={{
                flex: 0.95,
                marginTop: 20
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
                    <ThirdPage />
                </View>
            </PagerView>
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignSelf: "center"
                }}
                mpContainer={{ mt: 20 }}
            >
                {[1, 2, 3].map((item, index) => {
                    return (
                        <Container key={`paginDot ${index}`}
                            containerStyle={{
                                backgroundColor: index == page ? OrangeColor : "lightgrey",
                                borderRadius: 40,
                                elevation: 0.5,
                                // borderWidth:0.5,
                                // borderColor:"white"
                            }}
                            mpContainer={{ mh: 2 }}
                            width={index == page ? 15 : 10} height={10}
                        >
                        </Container>
                    )
                })}
            </Container>
            {page == 2 ?
                <Btn
                    btnStyle={{
                        backgroundColor: OrangeColor,
                        borderRadius: 4,
                        top: 10
                    }}
                    mpBtn={{ mt: 20, mh: 20 }}
                    btnHeight={45}
                    labelSize={18}
                    labelStyle={{ color: 'white' }}
                    title="Get Started"
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                />
                : <Container height={45} mpContainer={{ mt: 20 }} />
            }
        </MainContainer>
    )
}

export default AppIntroScreen;