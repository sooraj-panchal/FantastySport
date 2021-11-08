import React from "react";
import { GrayColor, OrangeColor } from "../../assets/colors";
import Btn from "../Btn";
import Container from "../Container";
import Label from "../Label";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { StyleSheet } from "react-native";

interface props {
    modalizeRef: React.Ref<Modalize>,
    onDone: (val:any) => void
}

const ImagePickerModal: React.FC<props> = ({
    modalizeRef,
    onDone
}) => {

    

    const renderChildren = () => {
        return <>
            <Label labelSize={16} style={styles.selectPhotoText} mpLabel={{ mt: 10, pl: 10 }}
            >{'Select Photo'}</Label>
            <Container>
                <Btn
                    title={'Take photo'}
                    mpBtn={{ mh: 10, mt: 20, pl: 20 }}
                    btnHeight={40}
                    labelSize={18}
                    btnStyle={{ elevation: 2,backgroundColor:OrangeColor }}
                    onPress={() => {
                        onDone("camera")
                    }}
                    textColor='white'
                />
                <Btn
                    title={'Select from gallery'}
                    mpBtn={{ mt: 20, mh: 10, mb: 30, pl: 20 }}
                    btnHeight={40}
                    labelSize={18}
                    btnStyle={{ elevation: 2,backgroundColor:OrangeColor }}
                    onPress={()=>{
                        onDone(null)
                    }}
                    textColor='white'

                />
            </Container>
        </>
    }

    return (
        <Portal>
            <Modalize
                ref={modalizeRef}
                adjustToContentHeight={true}
                withHandle={false}
                handlePosition="inside"
                modalStyle={styles.modalStyle}
                childrenStyle={{
                    paddingBottom:40
                }}
            >
                {renderChildren()}
            </Modalize>
        </Portal>
    );
}
export default ImagePickerModal;

const styles = StyleSheet.create({
    modalStyle: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    selectPhotoText: {
        letterSpacing: 0.7,
        color: GrayColor
    }
})
