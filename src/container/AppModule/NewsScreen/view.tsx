import React, { useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AppImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import NewsList from '../../../components/NewsList';
import { api_token } from '../../../services/apiPaths';
import { newsListTypes } from '../../../types/flatListTypes';
import { navigationProps } from '../../../types/nav';
interface props extends navigationProps {

}
const NewsScreen: React.FC<props> = ({

}) => {
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        getNewsData()
    }, [])

    const getNewsData = () => {
        let requestHeaders: any = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Ocp-Apim-Subscription-Key": api_token
        };
        fetch('https://api.sportsdata.io/v3/nfl/scores/json/News', {
            method: 'GET',
            headers: requestHeaders
        }).then((res) => res.json())
            .then((res) => {
                console.log('res==>', res)
                setNewsList(res)
            }).catch((err) => {
                console.log("err", err)
            })
    }

    const renderItem: ListRenderItem<newsListTypes | any> = ({ item, index }) => {
        return <NewsList
            title={item.Title}
            description={item.Content}
            uploadedDate={item.TimeAgo}
            cat_name={item.Categories}
        />
    }
    return (
        <MainContainer>
            <FlatList
                data={newsList}
                renderItem={renderItem}
                keyExtractor={(item, index) => `newsList ${index.toString()}`}
                contentContainerStyle={{ paddingBottom: 10 }}
            />
        </MainContainer>
    )
}
export default NewsScreen;