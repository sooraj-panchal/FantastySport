import React from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import PrivateGameList from '../../../components/PrivateGameList';
import PublicGameList from '../../../components/PublicGameList';
import { navigationProps } from '../../../types/nav';
interface props extends navigationProps { }
const MyLeagueScreen: React.FC<props> = ({

}) => {

    const renderPrivateGame: ListRenderItem<{}> = ({}) => {
        return <PrivateGameList/>
    }
    const renderPublicGame: ListRenderItem<{}> = ({}) => {
        return <PublicGameList/>
    }
    return (
        <MainContainer>
            <ScrollView>
                <Label
                    labelSize={18}
                    mpLabel={{ mt: 15, ml: 20 }}
                >Private game</Label>
                <FlatList
                    data={[1, 2]}
                    renderItem={renderPrivateGame}
                    keyExtractor={(item, index) => `Private game ${index.toString()}`}
                    ListHeaderComponent={()=><Container mpContainer={{mt:10}} />}
                    ListFooterComponent={()=><Container mpContainer={{mb:10}} />}
                    ItemSeparatorComponent={()=><Container mpContainer={{mt:10}} />}
                />
                   <Label
                    labelSize={18}
                    mpLabel={{ mt: 5, ml: 20 }}
                >Public game</Label>
                 <FlatList
                    data={[1, 2]}
                    renderItem={renderPublicGame}
                    keyExtractor={(item, index) => `Public game ${index.toString()}`}
                    ListHeaderComponent={()=><Container mpContainer={{mt:10}} />}
                    ListFooterComponent={()=><Container mpContainer={{mb:10}} />}
                    ItemSeparatorComponent={()=><Container mpContainer={{mt:10}} />}
                />
            </ScrollView>
        </MainContainer>
    )
}
export default MyLeagueScreen