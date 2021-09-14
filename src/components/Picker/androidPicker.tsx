import { Picker, PickerProps } from '@react-native-picker/picker';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { hs, vs } from '../../utils/styleUtils';
import { mpStyle } from '../../types/sizes';

export interface pickerTypes {
    value: string | number;
    data: Array<string | number | any>;
    setValue: (value: any) => void;
    pickerStyle?: StyleProp<ViewStyle>,
    mpContainer?: mpStyle,
}

const AndroidPicker: React.FC<pickerTypes & PickerProps> = ({ value, data, setValue, pickerStyle, mpContainer, ...rest }) => {

    const styles = StyleSheet.create({
        container: {
            borderWidth: 1,
            borderRadius: 4,
            borderColor: 'lightgrey',
            overflow: 'hidden',
            // marginTop: vs(5),
            ...mpStyle({ ...mpContainer })
        },
        pickerStyle: {
            height: vs(48),
            bottom: vs(4),
            marginLeft: -hs(20),
            left: hs(15),
            marginRight: hs(10),
        }
    });

    return (
        <View style={[styles.container, pickerStyle]}>
            <Picker
                selectedValue={value}
                onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
                numberOfLines={1}
                style={styles.pickerStyle}
                {...rest}
            >
                {data.map((item, index) => {
                    return <Picker.Item key={index} label={item} value={item} />;
                })}
            </Picker>
        </View>
    );
}



export default AndroidPicker;
