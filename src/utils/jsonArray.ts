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

const leagueData = {
    weekType: 'singleWeek' || 'multipleWeek',
    selectedWeek: [{ week: 1 }] || [{ week: 1 }, { week: 2 }],
    leagueTeam: [
        {
            team_id: '',
            op_team_id: '',
            start_time: '',
            team_key: '',
            op_team_key: '',
            team_logo: '',
            op_team_logo: ''
        },
        {
            team_id: '',
            op_team_id: '',
            start_time: '',
        },
        {
            team_id: '',
            op_team_id: '',
            start_time: '',
        },
    ],
    league_type: 'private' || 'public',
    league_name: '',
    max_participant: '',
    scoring_system: 'Standard' || 'SNIPER' || 'SNIPER+'
}


const data = [
    {
        week: 1,
        league_id:'',
        players: [
            {
                "Accuracy": "1",
                "GameDate": "2021-09-12T13:00:00",
                "Opponent": "PIT",
                "PlayerID": 19801,
                "Position": "QB",
                "PredictionPoints": "20",
                "SniperPoints": "20",
                "Team": "BUF",
                "photoUrl": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/19801.png"
            },
            {
                "Accuracy": "1",
                "GameDate": "2021-09-09T20:20:00",
                "Opponent": "DAL",
                "PlayerID": 11056,
                "Position": "WR",
                "PredictionPoints": "12",
                "SniperPoints": "12",
                "Team": "TB",
                "photoUrl": "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/11056.png"
            }
        ]
    }
]