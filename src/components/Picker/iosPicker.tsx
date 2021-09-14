import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { ActionSheetIOS, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import InputBox from '../InputBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { hs, mpStyle, normalize, vs } from '../../types/sizes';


export interface pickerTypes {
    value: string | number | any;
    data: Array<string | number | any>;
    setValue: (value: any) => void;
    pickerStyle?: StyleProp<ViewStyle>,
    mpContainer?: mpStyle,
    isSideView?: boolean
}

const IosPicker: React.FC<pickerTypes> = ({ value, data, setValue, isSideView, mpContainer }) => {

    const styles = StyleSheet.create({
        inputContainerStyle: {
            backgroundColor: 'white',
            borderColor: 'lightgrey',
            ...mpStyle({ ...mpContainer }),
            paddingLeft: hs(10)
        },
        inputTextStyle: { fontSize: hs(15), color: 'black' },
    });

    const openIosPicker = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Cancel', ...data],
                cancelButtonIndex: 0,
                userInterfaceStyle: 'white',
            },
            (buttonIndex) => {
                if (buttonIndex !== 0) {
                    setValue(data[buttonIndex - 1]);
                }
            },
        );
    };
    return (
        <InputBox
            placeholder="Select service"
            containerStyle={styles.inputContainerStyle}
            rightIcon={() => (
                <Ionicons
                    name="ios-caret-down-outline"
                    size={normalize(20)}
                    color={'grey'}
                    style={{ right: hs(10), position: 'absolute' }}
                />
            )}
            value={value}
            inputStyle={styles.inputTextStyle}
            editable={false}
            onPress={() => openIosPicker()}
        />
    );
};



export default IosPicker;
