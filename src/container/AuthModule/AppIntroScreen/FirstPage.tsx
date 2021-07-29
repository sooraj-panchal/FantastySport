import React from 'react';
import { View } from 'react-native';
import Container from '../../../components/Container';
import Label from '../../../components/Label';

// interface props {

// }

const FirstPage: React.FC = ({

}) => {
    return (
        <Container
            containerStyle={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }} >
            <Label
                labelSize={50}
                style={{
                    color: "black",
                    maxWidth: "50%",
                    textAlign: "center"
                }}
            >Fantasy Sniper</Label>
            <Label
                labelSize={16}
                style={{
                    color: "black",
                    fontWeight: "900"
                }}
                mpLabel={{
                    mt: 40
                }}
            >Game descriptions</Label>
            <Label
                labelSize={16}
                style={{
                    color: "black",
                    textAlign: "center",
                    lineHeight: 20
                }}
                mpLabel={{
                    mt: 20, mh: 20
                }}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, eveniet distinctio laborum blanditiis earum minus voluptatem excepturi quidem ut praesentium, enim officiis aliquam velit aspernatur quia odio deserunt voluptates.</Label>
            <Label
                labelSize={16}
                style={{
                    color: "black",
                    textAlign: "center",
                    lineHeight: 20
                }}
                mpLabel={{
                    mt: 10, mh: 20
                }}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, eveniet distinctio laborum blanditiis earum minus voluptatem excepturi quidem ut praesentium, enim officiis aliquam velit aspernatur quia odio deserunt voluptates.</Label>
        </Container>
    )
}
export default FirstPage;