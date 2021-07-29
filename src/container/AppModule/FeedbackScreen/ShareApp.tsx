import React from 'react';
import { DarkBlueColor } from '../../../assets/colors';
import { medium, semiBold } from '../../../assets/fonts/fonts';
import { AppImages } from '../../../assets/images/map';
import Btn from '../../../components/Btn';
import Container from '../../../components/Container';
import Img from '../../../components/Img';
import Label from '../../../components/Label';


interface props {

}

const ShareApp: React.FC<props> = ({

}) => {
    return <Container containerStyle={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }}  >
        <Img
            imgSrc={AppImages.shareBigImage}
            imgStyle={{
                resizeMode: "contain",
            }}
            width={300}
            height={400}
        />
        <Label
            style={{
                fontFamily: semiBold,
                letterSpacing: 1
            }}
            labelSize={22}
            mpLabel={{ pv: 30 }}
        >DO YOU LIKE OUR APP ?</Label>
        <Btn
            title="Share Now!"
            labelStyle={{color:"white",fontFamily:medium}}
            btnHeight={50}
            btnStyle={{
                justifyContent: "center",
                backgroundColor: DarkBlueColor,
                borderRadius: 30,
                width: "80%"
            }}
            labelSize={15}
            mpBtn={{pt:4}}
            onPress={() => { }}
        />
    </Container>
}
export default ShareApp