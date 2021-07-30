import React from 'react';
import Container from '../../../components/Container';
import Label from '../../../components/Label';
import Ionicons from 'react-native-vector-icons/Ionicons'

const TeamList: React.FC = ({

}) => {
    return (
        <Container
            containerStyle={{
                backgroundColor: "white",
                height: 120,
                elevation: 2,
                borderRadius: 5,
                justifyContent: "center",
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
                    <Container
                        containerStyle={{ backgroundColor: "red", borderRadius: 30 }}
                        width={40} height={40} mpContainer={{}} />
                    <Label
                        labelSize={12}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >Team name</Label>
                </Container>
                <Label labelSize={16} mpLabel={{ mt: 5, mh: 5 }} style={{ color: "grey", letterSpacing: 0.5 }} >VS</Label>
                <Container containerStyle={{
                    justifyContent: "center",
                    alignItems: 'center'
                }} >
                    <Container
                        containerStyle={{ backgroundColor: "red", borderRadius: 30 }}
                        width={40} height={40} mpContainer={{}} />
                    <Label
                        labelSize={12}
                        style={{}}
                        mpLabel={{ mt: 5 }}
                    >Team name</Label>
                </Container>
            </Container>
            <Label
                labelSize={14}
                style={{}}
                mpLabel={{ mt: 10, ml: 10 }}
            >21-07-2000   04:00 PM </Label>
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
                width={30} height={30}
            >
                <Ionicons
                    name="md-close"
                    size={20}
                    color="white"
                />
            </Container>
        </Container>
    )
}

export default TeamList;