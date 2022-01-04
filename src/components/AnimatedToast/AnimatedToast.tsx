import React, { ComponentType } from 'react';
import { View } from 'react-native';
import { MainContainerTypes } from '../../types/types';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

// interface props {
//     isSuccessMessage?: boolean,
//     message: string | any
// }

// interface Props {
//     errorMessage?: {
//         data: {
//             message: string
//         },
//         status: string
//     } | any,
//     successMessage?: string | any,
// }

const AnimatedToast = (WrapperComponent: ComponentType<MainContainerTypes>) => ({
    successMessage, errorMessage, ...props }: MainContainerTypes) => {
    // const { successMessage, errorMessage } = props;
    // console.log( 'props', props );

    const renderAnimtatedToast = () => {
        if (successMessage) {
            console.log('successMessage', successMessage);
            return <SuccessMessage
                message={successMessage}
            />;
        }
        if (errorMessage) {
            console.log('errorMessage', errorMessage);
            return <ErrorMessage
                message={errorMessage?.data?.message}
            />;
        }
        return null;
    };

    return (
        <>
            {/* { renderAnimtatedToast() } */}
            <WrapperComponent {...props} />
            {/* <SuccessMessage
                { ...props }
                message={successMessage }
            />;  */}
            {renderAnimtatedToast()}
        </>
    );
}

export default AnimatedToast;



