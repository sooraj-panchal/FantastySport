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
interface props extends navigationProps {

}
const StandingScreen: React.FC<props> = ({
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
                <Label
                    labelSize={14}
                    style={{
                        width: 40,
                        textAlign: 'center'
                    }}
                >{index + 1}</Label>
                {
                    index > 3 ?
                        <Label
                            labelSize={16}
                            mpLabel={{ ml: 20 }}
                            numberOfLines={1}
                            style={{ color: "lightgrey" }}
                        >Empty</Label> :
                        <Label
                            labelSize={16}
                            mpLabel={{ ml: 20 }}
                            numberOfLines={1}
                        >John's Official team</Label>
                }
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
                <Label
                    labelSize={14}
                    style={{
                        width: 40,
                        textAlign: 'center'
                    }}
                >Rank</Label>
                <Label
                    labelSize={15}
                    mpLabel={{ ml: 20 }}
                >Team</Label>
            </Container>
            <Container height={1} containerStyle={{ backgroundColor: 'lightgrey' }} mpContainer={{ mt: 10, mh: 10 }} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={renderItem}
                keyExtractor={(item,index)=>`standings ${index.toString()}`}
            />
        </Container>
    </MainContainer>
}
export default StandingScreen;