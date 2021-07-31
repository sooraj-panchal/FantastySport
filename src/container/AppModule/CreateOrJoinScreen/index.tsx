import React from 'react';
import { OrangeColor, PrimaryColor } from '../../../assets/colors';
import Btn from '../../../components/Btn';
import Label from '../../../components/Label';
import MainContainer from '../../../components/MainContainer';
import { navigationProps } from '../../../types/nav';

interface props extends navigationProps {

}
const CreateOrJoin: React.FC<props> = ({
    navigation, route
}) => {
    return <MainContainer
        style={{
            justifyContent: "center",
            backgroundColor: PrimaryColor
        }}
    >
        <Label
            labelSize={50}
            style={{
                maxWidth: "70%",
                textAlign: 'center',
                alignSelf: "center",
                color: 'white'
            }}
        >Fantasty League</Label>
        <Btn
            title="CREATE LEAGUE"
            btnStyle={{
                backgroundColor: "white"
            }}
            radius={5}
            btnHeight={50}
            labelSize={16}
            labelStyle={{

            }}
            mpBtn={{ mh: 20, mt: 80 }}
            onPress={() => {
                navigation.navigate('CreateLeague')
            }}
        />
        <Btn
            title="JOIN LEAGUE"
            btnStyle={{
                backgroundColor: OrangeColor
            }}
            radius={5}
            btnHeight={50}
            labelSize={16}
            labelStyle={{
                color: "white"
            }}
            mpBtn={{ mh: 20, mt: 15 }}
            onPress={() => {
                navigation.navigate("JoinLeague")
            }}
        />
    </MainContainer>
}
export default CreateOrJoin;