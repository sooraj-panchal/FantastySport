import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import { navigationProps } from '../../../types/nav';
import WinnerList from '../../../components/WinnerList';
import GamePlayerList from '../../../components/GamePlayerList';
interface props extends navigationProps {

}
const GameDetailScreen: React.FC<props> = ({
    navigation
}) => {

    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return (
            <GamePlayerList
                index={index}
            />
        )
    }

    return <MainContainer
        style={{ backgroundColor: 'white' }}
    >
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: "space-between"
            }}
            mpContainer={{mt: 15, mb: 5 }}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 25 }}
                numberOfLines={1}
                style={{
                    fontWeight: 'bold'
                }}
            >No.</Label>
            <Label
                labelSize={15}
                mpLabel={{ ml: 35 }}
                style={{
                    fontWeight: 'bold'
                }}
            >Users</Label>
            <Label
                labelSize={15}
                style={{
                    position: 'absolute',
                    right: 15,
                    fontWeight: 'bold'
                }}
            >FS. pred pt</Label>
        </Container>
        <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            renderItem={renderItem}
            keyExtractor={(item, index) => `Winners${index.toString()}`}
        />
    </MainContainer>
}
export default GameDetailScreen;