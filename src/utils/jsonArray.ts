interface players {
    PlayerID?: number,
    Team?: string,
    Name?: string,
    Position?: string,
    FantasyPosition?: string,
    FantasyPointsFantasyDraft?: string,
    FantasyPointsDraftKings?: string,
    photoUrl?: string;
    isSelected?: boolean;
    GameDate?: Date;
    Opponent?: string;
}

type arr = Array<players | any>
export const positionsLength: Record<string, number> = { "QB": 1, "WR": 3, "RB": 2, "TE": 1, "W/R/T": 1, "K": 1, "DEF": 1 }
export const positions: Array<string> = ["QB", "WR", "RB", "TE", "W/R/T", "K", "DEF"]
export const myPlayers: Record<string, arr> = {
    "QB": [null],
    "WR": [null, null, null],
    "RB": [null, null],
    "TE": [null],
    "W/R/T": [null],
    "K": [null],
    "DEF": [null]
}

export type IWeek = {
    week: string | number,
    isSelected?: boolean;
}


export const WeekArray: Array<IWeek> = [
    { week: 1,isSelected:true },
    { week: 2 },
    { week: 3 },
    { week: 4 },
    { week: 5 },
    { week: 6 },
    { week: 7 },
    { week: 8 },
    { week: 9 },
    { week: 10 },
    { week: 11 },
    { week: 12 },
    { week: 13 },
    { week: 14 },
    { week: 15 },
    { week: 16 },
    { week: 17 },
    { week: 18 },
]




