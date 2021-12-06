import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem, View } from 'react-native';
import { navigationProps } from '../../../types/nav';
import WinnerList from '../../../components/WinnerList';
import { useWinnerTeamListQuery } from '../../../features/league';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
interface props extends navigationProps {

}

const WinnerScreen: React.FC<props> = ({
    navigation
}) => {
    const { NFLCurrentWeek } = useSelector((store: RootState) => store.leaguePlayer)

    const { data, isLoading, error } = useWinnerTeamListQuery({
        current_week:NFLCurrentWeek
    })

    const renderItem: ListRenderItem<any> = ({ item, index }) => {
        return (
            <WinnerList
                {...item}
                index={index}
            />
        )
    }


    console.log("useWinnerTeamListQuery",data)

    return <MainContainer
        style={{ backgroundColor: 'white' }}
        loading={isLoading}
    >
        <Container
            containerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
            mpContainer={{ mh: 10, mt: 15, mb: 5 }}
        >
            <Label
                labelSize={16}
                mpLabel={{ ml: 10 }}
                numberOfLines={1}
                style={{
                    fontWeight: 'bold'
                }}
            >Rank</Label>
            <Label
                labelSize={15}
                mpLabel={{ ml: 20 }}
                style={{
                    fontWeight: 'bold'
                }}
            >Team</Label>
            <Label
                labelSize={15}
                style={{
                    position: 'absolute',
                    right: 5,
                    fontWeight: 'bold'
                }}
            >FanPts</Label>
        </Container>
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `Winners${index.toString()}`}
            />
        </View>
    </MainContainer>
}
export default WinnerScreen;