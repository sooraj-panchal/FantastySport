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

const RateUs: React.FC<props> = ({

}) => {
    return <Container containerStyle={{
        alignItems: "center",
    }} mpContainer={{ pt: 20 }} >
        <Img
            imgSrc={AppImages.RateUsImage}
            imgStyle={{
                resizeMode: "contain",
                width: "95%",
                height: "50%"
            }}
        />
        <Label
            style={{
                fontFamily: semiBold,
                letterSpacing: 1
            }}
            labelSize={22}
            mpLabel={{ mt: 20 }}
        >DO YOU LIKE OUR APP ?</Label>
        <Label
            style={{
                textAlign: "center",
                width: "80%"
            }}
            labelSize={20}
            mpLabel={{ mt: 15 }}
        >Give us Quick rating, so we know if you like it!</Label>
        <Btn
            title="Rate Now!"
            labelStyle={{color:"white",fontFamily:medium}}
            btnHeight={50}
            btnStyle={{
                justifyContent: "center",
                backgroundColor: DarkBlueColor,
                borderRadius: 30,
                width: "80%"
            }}
            labelSize={15}
            mpBtn={{ mt: 30,pt:4}}
            onPress={()=>{}}
        />
        <Btn
            title="May be later!"
            labelStyle={{ color: "black",fontFamily:medium }}
            labelSize={15}
            btnHeight={50}
            btnStyle={{
                justifyContent: "center",
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 30,
                width: "80%"
            }}
            mpBtn={{ mt: 20,pt:4 }}
            onPress={()=>{}}
        />
    </Container>
}
export default RateUs