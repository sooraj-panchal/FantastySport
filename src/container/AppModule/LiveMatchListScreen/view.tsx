import React, { useRef } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { greenColor, OrangeColor } from '../../../assets/colors';
import Container from '../../../components/Container';
import LiveMatchList from '../../../components/LiveMatchList';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import { Modalize } from 'react-native-modalize';
import ChangeTeamModal from '../../../components/Modals/ChangeTeamModal';

interface props extends navigationProps { };

const LiveMatchListScreen: React.FC<props> = ({

}) => {
    const modalizeRef = useRef<Modalize>(null);

    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        let color = index % 2 ? OrangeColor : greenColor
        return <LiveMatchList
            color={color}
            onChangeTeam= {()=>{
                modalizeRef.current?.open()
            }}
        />
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
            <ChangeTeamModal
                modalizeRef={modalizeRef}

                closeModal={() => {
                    modalizeRef.current?.close();
                }}
            />
        </MainContainer>
    )
}

export default LiveMatchListScreen;
