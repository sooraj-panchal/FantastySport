import React from 'react';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { DarkBlueColor, OrangeColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { screenWidth } from '../../../types/sizes';

const News: React.FC = ({

}) => {
    const [page, setPage] = React.useState(0)

    return (
        <Container>
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}
                mpContainer={{ pt: 10, ph: 20 }}
            >
                <Label
                    labelSize={16}
                    style={{
                        fontFamily: medium
                    }}
                >News</Label>
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
                    height: 160,
                    marginTop: 10,
                    alignSelf: "center",
                    width: screenWidth
                }}
                onPageSelected={(event) => {
                    console.log(event.nativeEvent.position)
                    setPage(event.nativeEvent.position)
                }}
            >
                {
                    [1, 2, 3, 4].map((item, index) => {
                        return <View key={index}
                        >
                            <Img
                                imgSrc={AppImages.newsImg}
                                imgStyle={{
                                    width: screenWidth * 0.90,
                                    height: 160,
                                    borderRadius: 10,
                                    alignSelf: "center"
                                }}
                            />
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                    height: 160,
                                    width: screenWidth * 0.90,
                                    borderRadius: 10,
                                    alignSelf: "center"
                                }}
                            />
                            <Container
                                containerStyle={{
                                    position: "absolute",
                                    bottom: 5,
                                    // backgroundColor:"red"
                                }}
                                mpContainer={{ mh: 30, }}
                            >
                                <Label
                                    labelSize={18}
                                    style={{
                                        color: "white",
                                    }}
                                >News Title</Label>
                                <Label
                                    labelSize={14}
                                    style={{
                                        color: "white",
                                        lineHeight: 20
                                    }}
                                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae iste .</Label>
                            </Container>

                        </View>
                    })
                }
            </PagerView>
            {/* <View
                    style={{
                        position: 'absolute',
                        backgroundColor: "rgba(0,0,0,0.5)",
                        height: 160,
                        justifyContent: "center",
                        borderRadius: 10,
                        width: screenWidth * 0.90,
                        alignSelf: "center",
                        overflow: "hidden",
                        marginTop: 10
                    }}
                /> */}
            {/* </View> */}
            <Container
                containerStyle={{
                    flexDirection: "row",
                    alignSelf: "center"
                }}
                mpContainer={{ mt: 10 }}
            >
                {[1, 2, 3, 4].map((item, index) => {
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
export default News;
