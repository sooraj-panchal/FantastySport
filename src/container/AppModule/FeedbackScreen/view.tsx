import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import MainContainer from '../../../components/MainContainer';
import { navigationProps, RootStackParamList, settingParamList, settingRoutProps } from '../../../types/nav';
import Feedback from './Feedback';
import RateUs from './RateUs';
import ShareApp from './ShareApp';

interface props extends navigationProps {

}
const FeedbackScreen: React.FC<props> = (props) => {
    const route = useRoute<RouteProp<settingParamList, 'Feedback'>>();
    return (
        <MainContainer>
            {route.params.title == "Feedback" && <Feedback {...props} />}
            {route.params.title == "Share" && <ShareApp />}
            {route.params.title == "Rate us" && <RateUs />}
        </MainContainer>
    )
}

export default FeedbackScreen