import React from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import NewsList from '../../../components/NewsList';
import { navigationProps } from '../../../types/nav';
interface props extends navigationProps {

}
const NewsScreen: React.FC<props> = ({

}) => {
    const renderItem: ListRenderItem<{}> = ({ item, index }) => {
        return <NewsList />
    }
    return (
        <MainContainer>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem}
                keyExtractor={(item, index) => `newsList ${index.toString()}`}
            />
        </MainContainer>
    )
}
export default NewsScreen;