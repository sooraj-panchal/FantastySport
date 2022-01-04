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
export const sniperPlusPositionLength: Record<string, number> = { "QB": 2, "WR": 4, "RB": 2, "TE": 2, "W/R/T": 1, "K": 1, "DEF": 2 }

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
export const sniperPlusPlayers: Record<string, arr> = {
    "QB": [null, null],
    "WR": [null, null, null, null],
    "RB": [null, null],
    "TE": [null, null],
    "W/R/T": [null],
    "K": [null],
    "DEF": [null, null]
}

export const SniperPlayerList = [
    {
        "Position": 'QB',
        "length": 1
    },
    {
        "Position": 'WR',
        "length": 3
    },
    {
        "Position": 'RB',
        "length": 2
    },
    {
        "Position": 'TE',
        "length": 1
    },
    {
        "Position": 'W/R/T',
        "length": 1
    },
    {
        "Position": 'K',
        "length": 1
    },
    {
        "Position": 'DEF',
        "length": 1
    }
]

export const SniperPlusPlayerList = [
    {
        "Position": 'QB',
        "length": 2
    },
    {
        "Position": 'WR',
        "length": 4
    },
    {
        "Position": 'RB',
        "length": 2
    },
    {
        "Position": 'TE',
        "length": 2
    },
    {
        "Position": 'W/R/T',
        "length": 1
    },
    {
        "Position": 'K',
        "length": 1
    },
    {
        "Position": 'DEF',
        "length": 2
    }
]


export type IWeek = {
    week: string | number,
    isSelected?: boolean;
}


export const WeekArray: Array<IWeek> = [
    { week: 1, isSelected: true },
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

