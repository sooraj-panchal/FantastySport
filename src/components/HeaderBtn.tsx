import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ViewStyle } from 'react-native'
import { StyleProp } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Container from './Container'

interface Props {
    headerStyle?: StyleProp<ViewStyle>
}

const HeaderBtn: React.FC<Props> = ({ headerStyle }) => {

    const navigation = useNavigation()

    return (
        <Container
            containerStyle={[{
                elevation: 2,
                borderRadius: 40,
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 2,
                shadowOpacity: 0.3,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
            }, headerStyle]}
            width={30}
            height={30}
            mpContainer={{ ml: 15, mt: 10, mb: 10 }}
            onPress={() => navigation.goBack()}
        >
            <Ionicons
                name="md-chevron-back"
                size={25}
                color="black"
            />
        </Container>
    )
}
export default HeaderBtn
