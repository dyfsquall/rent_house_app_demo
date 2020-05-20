import { httpPost, httpGet, httpDel } from "utils/http"
import { IApiRsp } from "./common"
import { USER_LOGIN, USER_LOGOUT, GET_USER, FAVORITES } from "./url"
import { getLocalToken } from "utils/localStorage"

type UserInfo = {
  username: string
  password: string
}

type TokenType = {
  token: string
}

type LoginRsp = {
  token: string
  err?: string
}

const apiLogin = async (userInfo: UserInfo): Promise<LoginRsp> => {
  const [res, err] = await httpPost<IApiRsp<TokenType>>(USER_LOGIN, userInfo)
  if (err || res.data.status !== 200) {
    return { token: "", err: "error !" }
  }

  return { token: res.data.body.token }
}

export type userInfoType = {
  avatar: string
  gender: string
  nickname: string
  phone: number | null
  id: number
}

type getUserRsp = {
  userInfo?: userInfoType
  err?: string
}

// const defaultUserInfo = {
//   avatar: "",
//   gender: "",
//   nickname: "",
//   phone: null,
//   id: 1,
// }

const apiGetUser = async (): Promise<getUserRsp> => {
  const [res, err] = await httpGet<IApiRsp<userInfoType>>(GET_USER)
  if (err || res.data.status !== 200) {
    return { err: `Err: ${res.data.description}` }
  }
  return { userInfo: res.data.body }
}

type LogoutRsp = {
  isSuccess: boolean
  err?: string
}

const apiLogout = async (): Promise<LogoutRsp> => {
  const token = getLocalToken()
  const [res, err] = await httpPost<IApiRsp<null>>(USER_LOGOUT, {
    authorization: token,
  })
  if (err || res.data.status !== 200) {
    return { isSuccess: false, err: `Err: ${res.data.description}` }
  }
  return { isSuccess: true }
}

type FavoritesType = {
  authorization: string
  id: string
}

type FavoritesRsp = {
  isSuccess: boolean
  err?: string
}

/**
 *
 * @param id 房屋的code值
 */
const apiAddFavorite = async (id: string): Promise<FavoritesRsp> => {
  const token = getLocalToken()
  const [res, err] = await httpPost<IApiRsp<FavoritesType>>(
    `${FAVORITES}/${id}`,
    {
      authorization: token,
      id,
    }
  )
  if (err || res.data.status !== 200) {
    return { isSuccess: false, err }
  }

  return { isSuccess: true }
}

const apiDelFavorite = async (id: string): Promise<FavoritesRsp> => {
  const token = getLocalToken()
  const [res, err] = await httpDel<IApiRsp<FavoritesType>>(
    `${FAVORITES}/${id}`,
    {
      authorization: token,
      id,
    }
  )
  if (err || res.data.status !== 200) {
    return { isSuccess: false, err }
  }
  return { isSuccess: true }
}

export { apiLogin, apiLogout, apiGetUser, apiAddFavorite, apiDelFavorite }
