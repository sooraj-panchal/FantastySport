import React from 'react';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { MyLeagueList } from '../../../../arrayList';
import { DarkBlueColor, OrangeColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { screenWidth } from '../../../types/sizes';


const LiveMatch: React.FC = ({

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
                >Live match</Label>
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
                    height: 230,
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
                                    height: 220,
                                    backgroundColor: "white",
                                    elevation: 2,
                                    alignSelf: 'center',
                                    borderRadius: 10,
                                    overflow: "hidden"
                                }}
                            // mpContainer={{}}
                            >
                                <Btn
                                    title="Cats vs Washing Machines"
                                    onPress={() => { }}
                                    btnStyle={{
                                        elevation: 5,
                                        borderRadius: 10,
                                        backgroundColor: "green",
                                        justifyContent: "flex-start"
                                    }}
                                    mpBtn={{ pl: 10 }}
                                    labelSize={14}
                                    labelStyle={{ color: "white" }}
                                    btnHeight={45}
                                    rightIcon={() => {
                                        return <Container
                                            containerStyle={{
                                                position: "absolute",
                                                right: 10
                                            }}
                                        >
                                            <Label labelSize={15} style={{ color: "white" }} >{`View >`}</Label>
                                        </Container>
                                    }}
                                />
                                <Container containerStyle={{ flexDirection: "row" }} mpContainer={{ mt: 20 }} >
                                    <Container
                                        containerStyle={{
                                            width: "45%",
                                            alignItems: "flex-end",
                                        }}
                                    >
                                        <Container
                                            containerStyle={{
                                                flexDirection: "row",
                                                alignItems: "center"
                                            }}
                                        >
                                            <Img
                                                imgSrc={AppImages.green_logo}
                                                imgStyle={{
                                                    height: 40, width: 40,
                                                    resizeMode: 'contain'
                                                }}
                                            />
                                            <Label
                                                labelSize={35}
                                                style={{ color: "black", fontWeight: "bold" }}
                                                mpLabel={{ ml: 20 }}
                                            >0.00</Label>
                                        </Container>
                                        <Container containerStyle={{
                                            flexDirection: "row",
                                            alignItems: 'center'
                                        }}
                                            mpContainer={{}}
                                        >
                                            <Label
                                                labelSize={18}
                                                style={{ color: "grey" }}
                                                mpLabel={{ ml: 20 }}
                                            >Proj</Label>
                                            <Label
                                                labelSize={18}
                                                style={{ color: "green", fontWeight: "bold" }}
                                                mpLabel={{ ml: 5 }}
                                            >98.39</Label>
                                        </Container>
                                        <Label
                                            labelSize={18}
                                            style={{ color: "black" }}
                                            mpLabel={{ mt: 10 }}
                                        >Adam's Team</Label>
                                        <Label
                                            labelSize={22}
                                            style={{ color: "black" }}
                                            mpLabel={{ ml: 20 }}
                                        >0-0-0</Label>
                                    </Container>
                                    <Container
                                        containerStyle={{
                                            width: 1,
                                            backgroundColor: "lightgrey",
                                            height: 100,

                                        }}
                                        mpContainer={{ mh: 20 }}
                                    />
                                    <Container
                                        containerStyle={{
                                            width: "45%",
                                            alignItems: "flex-start"
                                        }}
                                    >
                                        <Container
                                            containerStyle={{
                                                flexDirection: "row",
                                                alignItems: "center"
                                            }}
                                        >
                                            <Label
                                                labelSize={35}
                                                style={{ color: "black", fontWeight: "bold" }}
                                            >0.00</Label>
                                            <Img
                                                imgSrc={AppImages.green_logo}
                                                imgStyle={{
                                                    height: 40, width: 40,
                                                    resizeMode: 'contain'
                                                }}
                                                mpImage={{ ml: 15 }}
                                            />
                                        </Container>
                                        <Container containerStyle={{
                                            flexDirection: "row",
                                            alignItems: 'center'
                                        }}
                                            mpContainer={{}}
                                        >
                                            <Label
                                                labelSize={18}
                                                style={{ color: "green", fontWeight: "bold" }}
                                            >98.39</Label>
                                            <Label
                                                labelSize={18}
                                                style={{ color: "grey" }}
                                                mpLabel={{ ml: 5 }}
                                            >Proj</Label>
                                        </Container>
                                        <Label
                                            labelSize={18}
                                            style={{ color: "black" }}
                                            mpLabel={{ mt: 10 }}
                                        >Adam's Team</Label>
                                        <Label
                                            labelSize={22}
                                            style={{ color: "black" }}
                                        >0-0-0</Label>
                                    </Container>
                                </Container>
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
export default LiveMatch;
