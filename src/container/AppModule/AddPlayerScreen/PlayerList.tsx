import React from 'react';
import Container from '../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Label from '../../../components/Label';
import { navigationProps } from '../../../types/nav';
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { OrangeColor } from '../../../assets/colors';
interface props {
    onPress: () => void,
    index: number

}
const PlayerList: React.FC<props> = ({
    onPress,
    index
}) => {

    return <>
        <Container
            containerStyle={{
                flexDirection: "row",
                alignItems: "center"
            }}
            mpContainer={{ mh: 15 }}
            height={65}
        >
            <Img
                imgSrc={AppImages.player_1}
                width={50} height={50}
            // style={{
            // }}
            />
            <Container mpContainer={{ pl: 15 }} >
                <Label labelSize={16} style={{ letterSpacing: 0.5, color: "black" }} >P. Mahomes</Label>
                <Container containerStyle={{ flexDirection: "row", alignItems: "center" }} >
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: 'grey' }} >QB</Label>
                    <Label labelSize={14} style={{ letterSpacing: 0.5, color: 'green' }} mpLabel={{ pl: 10 }} >Accuracy 98%</Label>
                </Container>
            </Container>
            {
                index == 1 ?
                    <Container
                        containerStyle={{
                            borderRadius: 30,
                            position: 'absolute',
                            right: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: OrangeColor
                        }}
                        width={30} height={30}
                        onPress={onPress}
                    >
                        <Ionicons
                            name="md-checkmark"
                            size={25}
                            style={{

                            }}
                            color={'white'}
                        />
                    </Container> :
                    <Container
                        containerStyle={{
                            borderWidth: 2,
                            borderRadius: 30,
                            borderColor: OrangeColor,
                            position: 'absolute',
                            right: 0,
                            borderStyle: "dashed",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        width={30} height={30}
                        onPress={onPress}
                    >
                        <Ionicons
                            name="add-sharp"
                            size={25}
                            style={{

                            }}
                            color={OrangeColor}
                        />
                    </Container>
            }
        </Container>
        <Container containerStyle={{ backgroundColor: "lightgrey" }} height={1} mpContainer={{ mh: 15 }} />
    </>
}
export default PlayerList;