import React from 'react';
import { DarkBlueColor } from '../../../assets/colors';
import { medium } from '../../../assets/fonts/fonts';
import Btn from '../../../components/Btn';
import InputBox from '../../../components/InputBox';
import Label from '../../../components/Label';
import { navigationProps } from '../../../types/nav';


interface props {

}

const Feedback: React.FC<props> = ({

}) => {
    return <>
        <Label
            style={{
                fontFamily: medium,
                letterSpacing: 1
            }}
            labelSize={20}
            mpLabel={{ p: 20 }}
        >Please share your Feedback</Label>
        <InputBox
            mpContainer={{ mh: 20, pl: 20 }}
            placeholder="Your name"
        />
        <InputBox
            mpContainer={{ mh: 20, pl: 20, mt: 20, pt: 10 }}
            inputHeight={200}
            placeholder="Describe your issue or idea"
            // multiline={true}
            containerStyle={{ alignItems: "flex-start" }}
        />
         <Btn
            title="Send Feedback!"
            labelStyle={{color:"white",fontFamily:medium}}
            btnHeight={50}
            btnStyle={{
                justifyContent: "center",
                backgroundColor: DarkBlueColor,
                borderRadius: 30,
            }}
            labelSize={15}
            mpBtn={{ mh: 20, mt: 20,pt:4 }}
            onPress={() => { }}
        />
    </>
}
export default Feedback