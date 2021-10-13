import { PlayerPositionTypes } from "./flatListTypes";

export interface statusRes {
  status: string,
  message: string,
  code: string
}
export interface UserResponse {
  api_token?: string
  email?: string,
  facebook_id?: string,
  fcm_id?: string,
  fcm_token?: string,
  google_id?: string,
  id?: number,
  image?: string | null,
  name?: string,
  first_name?: string,
  last_name?: string,
  otp_verify?: "Y" | 'N'
}
export interface forgotPasswordResponse {
  email: string
  otp: string,
}

export interface MYLeagueTeam {
  team_id: number,
  team_key?: string,
  team_logo?: string,
  op_team_id: number,
  op_team_key?: string,
  op_team_logo?: string,
  start_time: string
}
export interface WeekObject {
  week_id?: number
  week_no: number,
  schedule: Array<MYLeagueTeam>
}
export interface MyLeagueResponse {
  week_type?: string,
  week: Array<WeekObject>,
  type?: 'private' | 'public',
  name?: string,
  max_participant?: string | number,
  scoring_system: string,
  league_id?: number
}

export interface MyTeamResponse {
  team_id?: number,
  league_id?: number,
  week_id?: number,
  players: Array<PlayerPositionTypes>,
  team_name?: string,
  team_logo?: string
}
export interface MyTeamLogoResponse {
  WikipediaLogoUrl: string | ''
}

export interface TeamMatchDetailsResponse {
  team_name: string,
  team_logo: string,
  accuracy: number,
  prediction_points: number,
  sniper_points: number,
  fantasyPoint: number,
  players: Array<PlayerPositionTypes>,
}

export interface TeamListResponse {
  team_id: number,
  user_id: number,
  team_name: string,
  team_logo: string,
  accuracy: number,
  fantasyPoint: number
}