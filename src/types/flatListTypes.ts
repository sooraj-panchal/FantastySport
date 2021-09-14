import { ImageSourcePropType } from "react-native";
import { navigationProps } from "./nav";

export interface ChatListTypes {
    name: string;
    time: string;
    currentMsg: string;
    image: ImageSourcePropType
}

export interface newsListTypes {
    title: string;
    description: string;
    uploadedDate: string;
    image?: string;
    cat_name: string;
}

export interface apiScheduleListTypes {
    index?: number
    AwayTeam: string;
    HomeTeam: string;
    Date: Date;
}

export interface teamTypes {
    index?: number
    Key: string;
    TeamID: number;
    Name: string;
    WikipediaLogoUrl: string;
}

export interface scheduleListTypes {
    index?: number
    awayTeam: {
        full_name: string,
        key: string,
        logo: string,
        short_name: string,
        team_id: number
    };
    homeTeam: {
        full_name: string,
        key: string,
        logo: string,
        short_name: string,
        team_id: number
    };
    start_time: Date;
    game_key?: number;
    isSelected: boolean
}

export interface PlayerDetailTypes {
    PlayerID?: number,
    PhotoUrl: string
}

export interface LeaguePlayerTypes {
    PlayerID?: number,
    Team: string,
    Name: string,
    Position: string,
    FantasyPosition?: string,
    FantasyPointsFantasyDraft?: string,
    FantasyPointsDraftKings?: string,
    photoUrl?: string;
    isSelected?: boolean;
    GameDate: Date;
    Opponent: string;
}

export interface PlayerPositionTypes {
    Team?: string,
    Name?: string,
    Position: string,
    FantasyPosition?: string,
    FantasyPointsFantasyDraft?: string,
    FantasyPointsDraftKings?: string,
    photoUrl?: string;
    isSelected?: boolean;
    GameDate?: Date;
    Opponent?: string;
}