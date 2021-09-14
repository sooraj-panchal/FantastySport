import React from 'react';
import Container from './Container';
import Label from './Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { screenWidth } from '../types/sizes';
import { useNavigation } from '@react-navigation/native';
import { homeNavProps, navigationProps, unAuthParamList } from '../types/nav';
import { OrangeColor } from '../assets/colors';
import { PlayerPositionTypes } from '../types/flatListTypes';

const PlayerList: React.FC<PlayerPositionTypes> = ({
    Position
}) => {
    // const { navigation } = useNavigation<navigationProps>();
    const navigation = useNavigation<homeNavProps>();
    return <>
        <Container
            containerStyle={{ flexDirection: "row", alignItems: "center" }}
            mpContainer={{ mh: 20 }}
            height={55}
        >
            <Label labelSize={12} style={{ letterSpacing: 0.5, color: 'grey' }} >{Position}</Label>
            <Ionicons
                name="md-person"
                size={52}
                color={'grey'}
                style={{
                    alignSelf: "flex-end",
                    marginHorizontal: 20,
                    marginTop: 10
                }}
            />
            <Label labelSize={16} style={{ letterSpacing: 0.5, color: "grey" }} >Empty</Label>
            <Container
                containerStyle={{
                    borderWidth: 2,
                    borderRadius: 30,
                    borderColor: OrangeColor,
                    position: 'absolute',
                    right: 5,
                    borderStyle: "dashed",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                width={30} height={30}
                onPress={() => {
                    navigation.navigate('AddPlayer')
                }}
            >
                <Ionicons
                    name="add-sharp"
                    size={25}
                    style={{

                    }}
                    color={OrangeColor}
                />
            </Container>
        </Container>
        <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
    </>
}
export default PlayerList;