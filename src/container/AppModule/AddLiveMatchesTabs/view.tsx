import React from 'react';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';
import BattleLeagueTab from './BattleLeagueTab';
import HeadToHeadTab from './HeadToHeadTab';
import { TabView, SceneMap, TabBar, TabBarProps } from 'react-native-tab-view';
import { useWindowDimensions, View } from 'react-native';

interface props extends navigationProps {

}

const AddLiveMatchesTabs: React.FC<props> = (props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Head to head' },
        { key: 'second', title: 'Battle league' },
    ]);

    const renderScene = SceneMap({
        first: () => <HeadToHeadTab {...props} />,
        second: () => <BattleLeagueTab {...props} />,
    });


    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'grey' }}
            style={{ backgroundColor: 'white', borderBottomWidth: 1, elevation: 0, borderBottomColor: "lightgrey" }}
            getLabelText={({ route }) => route.title}
            activeColor="black"
            inactiveColor="grey"
            labelStyle={{ fontSize: 16 }}
        />
    );

    return (
        <MainContainer>
            {/* <HeadToHeadTab {...props} /> */}
            {/* <BattleLeagueTab {...props} /> */}
            {/* <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            /> */}
            <HeadToHeadTab {...props} />
        </MainContainer>
    )
}

export default AddLiveMatchesTabs;