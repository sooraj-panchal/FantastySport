import React from "react";
import { GrayColor, OrangeColor } from "../../assets/colors";
import Btn from "../Btn";
import Container from "../Container";
import Label from "../Label";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface props {
    modalizeRef: React.Ref<Modalize>,
    onDone: (val: any) => void,
    fromProfileUpdate?: boolean,
    closeModal: () => void ;
}

const ImagePickerModal: React.FC<props> = ({
    modalizeRef,
    onDone,
    fromProfileUpdate,
    closeModal
}) => {

    const renderChildren = () => {
        return <>
            <Label labelSize={16} style={styles.selectPhotoText} mpLabel={{ mt: 10, pl: 10 }}
            >{'Select Photo'}</Label>
            <Ionicons
                name='ios-close'
                size={30}
                color='black'
                style={{
                    position: 'absolute',
                    right: 10,
                    top: 5
                }}
                onPress={() => {
                closeModal()
                }}
            />
            <Container>
                <Btn
                    title={'Take photo'}
                    mpBtn={{ mh: 10, mt: 20, pl: 20 }}
                    btnHeight={40}
                    labelSize={18}
                    btnStyle={{ elevation: 2, backgroundColor: OrangeColor }}
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
                    btnStyle={{ elevation: 2, backgroundColor: OrangeColor }}
                    onPress={() => {
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
                    paddingBottom: 40
                }}
                // closeOnOverlayTap={true}
                // withReactModal={fromProfileUpdate || false}
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
        color: 'black'
    }
})
