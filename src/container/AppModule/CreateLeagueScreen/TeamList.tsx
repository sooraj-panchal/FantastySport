import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Img from '../../../components/Img';
import { AppImages } from '../../../assets/images/map';
import { OrangeColor } from '../../../assets/colors';
import { medium, regular } from '../../../assets/fonts/fonts';

const TeamList: React.FC = ({

}) => {
    return (
        <Container
            containerStyle={{
                backgroundColor: "white",
                height: 65,
                elevation: 2,
                borderRadius: 5,
                alignItems: "flex-start",
                // borderWidth: 1,
                // borderColor: "#f2f2f2"
            }}
            mpContainer={{ mh: 15 }}
        >
            <Container
                containerStyle={{ flexDirection: "row" }}
            >
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }} mpContainer={{ ml: 10 }} >
                    <Label
                        labelSize={14}
                        style={{ fontFamily: medium }}
                        mpLabel={{ mt: 5 }}
                    >Giants</Label>
                </Container>
                <Label labelSize={14} mpLabel={{ mt: 5, mh: 10 }} style={{ color: OrangeColor, letterSpacing: 0.5, fontFamily: medium }} >VS</Label>
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }} >
                    <Label
                        labelSize={14}
                        style={{ fontFamily: medium }}
                        mpLabel={{ mt: 5 }}
                    >Pacers</Label>
                </Container>
            </Container>
            <Label
                labelSize={14}
                style={{}}
                mpLabel={{ mt: 5, ml: 10 }}
            >Mon 08/12  04:00 PM </Label>
            <Container
                containerStyle={{
                    borderRadius: 35,
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    borderStyle: "dashed",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'red'
                }}
                width={20} height={20}
            >
                <Ionicons
                    name="md-close"
                    size={15}
                    color="white"
                />
            </Container>
        </Container>
    )
}

export default TeamList;