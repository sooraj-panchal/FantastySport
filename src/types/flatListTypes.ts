import { ImageSourcePropType } from "react-native";
import { navigationProps } from "./nav";

export interface  ChatListTypes extends navigationProps {
    name: string;
    time: string;
    currentMsg: string;
    image: ImageSourcePropType
}
