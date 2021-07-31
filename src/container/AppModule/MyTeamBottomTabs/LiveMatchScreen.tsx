import React from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../../components/Container';
import LiveMatchList from '../../../components/LiveMatchList';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';

interface props extends navigationProps { };

const LiveMatchScreen: React.FC<props> = ({

}) => {
    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <LiveMatchList />
    }
    return (
        <MainContainer>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7]}
                renderItem={renderItem}
                keyExtractor={(_, index) => `LiveMatch ${index.toString()}`}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
            />
        </MainContainer>
    )
}

export default LiveMatchScreen;