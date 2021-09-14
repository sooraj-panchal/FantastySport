import { PickerProps } from '@react-native-picker/picker';
import React from 'react';
import { Platform } from 'react-native';
import AndroidPicker, { pickerTypes } from './androidPicker';
import IosPicker from './iosPicker';


const PickerModal: React.FC<pickerTypes & PickerProps> = (props) => {
    if (Platform.OS === 'android') {
        return <AndroidPicker {...props} />
    } else {
        return <IosPicker {...props} />
    }
}
export default PickerModal;