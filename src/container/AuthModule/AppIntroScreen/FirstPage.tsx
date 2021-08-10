import React from 'react';
import { View } from 'react-native';
import { bold, medium, regular, semiBold } from '../../../assets/fonts/fonts';
import { AuthImages } from '../../../assets/images/map';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';
import { screenWidth } from '../../../types/sizes';

// interface props {

// }

const FirstPage: React.FC = ({

}) => {
    return (
        <Container
            containerStyle={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }} >
            {/* <Label
                labelSize={50}
                style={{
                    color: "black",
                    maxWidth: "50%",
                    textAlign: "center"
                }}
            >Fantasy Sniper</Label> */}
            <Img
                imgSrc={AuthImages.Splash_logo}
                imgStyle={{
                    width: screenWidth * 0.80,
                    height: "30%",
                    resizeMode: "contain",
                }}
                mpImage={{ mt: 80 }}
            />
            <Label
                labelSize={20}
                style={{
                    color: "black",
                    fontFamily: semiBold,
                }}
                mpLabel={{
                    mt: 40
                }}
            >Game descriptions</Label>
            <Label
                labelSize={13}
                style={{
                    color: "black",
                    textAlign: "center",
                    lineHeight: 20
                }}
                mpLabel={{
                    mt: 15, mh: 15
                }}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, eveniet distinctio laborum blanditiis earum minus voluptatem excepturi quidem ut praesentium, enim officiis aliquam velit aspernatur quia odio deserunt voluptates.</Label>
            <Label
                labelSize={13}
                style={{
                    color: "black",
                    textAlign: "center",
                    lineHeight: 20
                }}
                mpLabel={{
                    mt: 10, mh: 15
                }}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur, eveniet distinctio laborum blanditiis earum minus voluptatem excepturi quidem ut praesentium, enim officiis aliquam velit aspernatur quia odio deserunt voluptates.</Label>
        </Container>
    )
}
export default FirstPage;