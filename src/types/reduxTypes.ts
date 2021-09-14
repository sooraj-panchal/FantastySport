
import { store } from "../store";
import { scheduleListTypes } from "./flatListTypes";
export type RootState = ReturnType<typeof store.getState>

// export interface RootState {
//     schedule: {
//         loading: boolean,
//         data: Array<scheduleListTypes>
//     },
// }
