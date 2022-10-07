export interface NewUser {
  id: number
  name: string
  company: string
  username: string
  email: string
  rememberMeToken: string
}

export interface Register {
  [key: string]: any
}

export interface RegisterValidate {
  [key: string]: any
}
