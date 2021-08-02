import React from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryColor } from '../../../assets/colors';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import HeaderBtn from '../../../components/HeaderBtn';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import NewsList from '../../../components/NewsList';
import { navigationProps } from '../../../types/nav';
import { getStatusBarHeight } from '../../../utils/globals';
import Video from './Video';
interface props extends navigationProps {

}
const NewsDetailScreen: React.FC<props> = ({

}) => {
    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <NewsList />
    }
    return (
        <MainContainer>
            <Container containerStyle={{ backgroundColor: 'black', paddingTop: getStatusBarHeight() }} />
            <Video />
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem}
                keyExtractor={(item, index) => `NewsLst ${index.toString()}`}
                // ListHeaderComponent={() => <Video />}
                ListFooterComponent={() => <Container mpContainer={{ mb: 20 }} />}
            />
        </MainContainer>
    )
}
export default NewsDetailScreen;