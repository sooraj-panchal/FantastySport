import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice( {
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increamentCount: ( state ) => {
            state.count += 1;
        },
        decrementCount: ( state ) => {
            state.count -= 1;
        },
        increamentCountByAmount: ( state, action ) => {
            state.count += action.payload;
        }
    }
} );

export const { increamentCount, decrementCount, increamentCountByAmount } = counterSlice.actions;
export default counterSlice.reducer;