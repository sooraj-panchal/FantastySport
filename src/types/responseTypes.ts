
export interface UserResponse {
  api_token: string
  email: string,
  facebook_id: string,
  fcm_id: string,
  fcm_token: string,
  google_id: string,
  id: number,
  image: string | null,
  name: string,
  otp_verify: "Y" | 'N'
}