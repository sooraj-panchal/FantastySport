import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { PrimaryColor } from '../../../assets/colors';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { navigationProps } from '../../../types/nav';
import Btn from '../../../components/Btn';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
interface props extends navigationProps {

}
const TeamLevelScreen: React.FC<props> = ({
    navigation
}) => {

    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return (
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                mpContainer={{ mh: 10, mt: 10 }}
            >
                <Img
                    imgSrc={AppImages.green_logo}
                    width={25} height={28}
                    mpImage={{ ml: 10 }}
                />
                <Label
                    labelSize={16}
                    mpLabel={{ ml: 20 }}
                    numberOfLines={1}
                    style={{ maxWidth: "70%" }}
                >John's Official team</Label>
                <Label
                    labelSize={15}
                    mpLabel={{ ml: 20 }}
                    style={{
                        position: 'absolute',
                        right: 5,
                        letterSpacing: 0.5
                    }}
                >Silver</Label>
            </Container>
        )
    }

    return <MainContainer>
        <Container
            containerStyle={{ backgroundColor: 'white', borderRadius: 5, elevation: 2 }}
            mpContainer={{ mh: 20, mt: 10, pv: 10 }}
        // height={150}
        >
            <Container
                containerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: "space-between"
                }}
                mpContainer={{ mh: 10 }}
            >
                <Container width={40} />
                <Label
                    labelSize={15}
                    mpLabel={{ ml: 20 }}
                >Team</Label>
                <Label
                    labelSize={15}
                    mpLabel={{ ml: 20 }}
                    style={{
                        position: 'absolute',
                        right: 5,
                    }}
                >Level</Label>
            </Container>
            <Container height={1} containerStyle={{ backgroundColor: 'lightgrey' }} mpContainer={{ mt: 10, mh: 10 }} />
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={renderItem}
                keyExtractor={(item, index) => `teamLevel ${index.toString()}`}

            />
        </Container>
    </MainContainer>
}
export default TeamLevelScreen;