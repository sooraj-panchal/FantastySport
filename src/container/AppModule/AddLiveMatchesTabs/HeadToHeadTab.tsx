import React from 'react';
import { OrangeColor } from '../../../assets/colors';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
interface props extends navigationProps {

}

const HeadToHeadTab: React.FC<props> = ({
    navigation, route
}) => {
    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <Container
            containerStyle={{
                backgroundColor: "white",
                height: 130,
                elevation: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "flex-start"
            }}
            mpContainer={{ mh: 15 }}
        >
            <Container
                containerStyle={{ flexDirection: "row" }}
            >
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }} mpContainer={{ ml: 20 }} >
                    <Img
                        imgSrc={AppImages.green_logo}
                        imgStyle={{  }}
                        width={40} height={45} />
                    <Label
                        labelSize={15}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >Team name</Label>
                </Container>
                <Label labelSize={16} mpLabel={{ mt: 5, mh: 5 }} style={{ color: "grey", letterSpacing: 0.5 }} >VS</Label>
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }} >
                    <Img
                        imgSrc={AppImages.green_logo}
                        imgStyle={{  }}
                        width={40} height={45} />
                    <Label
                        labelSize={15}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >Team name</Label>
                </Container>
            </Container>
            <Label
                labelSize={16}
                style={{}}
                mpLabel={{ mt: 10, ml: 20 }}
            >21-07-2000   04:00 PM </Label>
            {
                index == 0 ?
                    <Container
                        containerStyle={{
                            borderRadius: 35,
                            position: 'absolute',
                            right: 15,
                            top: 15,
                            borderStyle: "dashed",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: OrangeColor
                        }}
                        width={35} height={35}
                    >
                        <Ionicons
                            name="ios-checkmark-sharp"
                            size={25}
                            style={{
                                color: "white"
                            }}
                            color={OrangeColor}
                        />
                    </Container> :
                    <Container
                        containerStyle={{
                            borderWidth: 2,
                            borderRadius: 35,
                            borderColor: OrangeColor,
                            position: 'absolute',
                            right: 15,
                            top: 15,
                            borderStyle: "dashed",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={35} height={35}
                    >
                        <Ionicons
                            name="add-sharp"
                            size={30}
                            style={{

                            }}
                            color={OrangeColor}
                        />
                    </Container>
            }
        </Container>
    }
    return (
        <MainContainer>
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={renderItem}
                keyExtractor={(item, index) => `renderList ${index.toString()}`}
                // contentContainerStyle={{paddingBottom:10}}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
            />
        </MainContainer>
    )
}

export default HeadToHeadTab;