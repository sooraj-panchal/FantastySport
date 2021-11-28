import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { View } from 'react-native-animatable';
import PagerView from 'react-native-pager-view';
import { useDispatch, useSelector } from 'react-redux';
import { MyLeagueList } from '../../../../arrayList';
import { DarkBlueColor, OrangeColor, redColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import AllLeagueItem from '../../../components/AllLeagueItem';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { useAllLeagueListQuery, useLeagueListQuery } from '../../../features/league';
import { RootState } from '../../../store';
import { leagueDetailsWatcher } from '../../../store/slices/selectedLeague';
import { homeNavProps, navigationProps } from '../../../types/nav';
import { MyLeagueResponse, UserResponse } from '../../../types/responseTypes';
import { screenWidth } from '../../../types/sizes';


const PublicLeagueScreen: React.FC<navigationProps> = ({
    navigation
}) => {
    const { data, isLoading, error } = useAllLeagueListQuery(null, {
        refetchOnMountOrArgChange: true
    })
    const user: UserResponse = useSelector((store: RootState) => store.auth.user)

    // console.log('error', JSON.stringify(error))

    const renderItem: ListRenderItem<MyLeagueResponse> = ({ item, index }) => {
        return (
            <AllLeagueItem
                {...item}
            />
        )
    }

    return (
        <MainContainer loading={isLoading} >
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 10 }} />}
                ItemSeparatorComponent={() => <Container mpContainer={{ mv: 5 }} />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 10 }} />}
            />
        </MainContainer>
    )
}
export default PublicLeagueScreen;
