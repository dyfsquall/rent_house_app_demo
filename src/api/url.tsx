const BASE_URL = process.env.REACT_APP_BASEURL
// citys
const CITY_LIST = "/area/city"
const HOT_CITY = "/area/hot"
const CURRENT_CITY = "/area/info"
const COMMUNITYS = "/area/community"

// map
const MAP_INFO = "/area/map"

// house
const HOUSE = "/houses"
const HOUSE_CONDITION = "/houses/condition"
const HOUSE_IMAGE = "/houses/image"

// home
const HOME_SWIPER = "/home/swiper"
const HOME_GROUP = "/home/groups?area=AREA%7C88cff55c-aaa4-e2e0"
const HOME_NEWS = "/home/news?area=AREA%7C88cff55c-aaa4-e2e0"

// user
const GET_USER = "/user"
const USER_LOGIN = "/user/login"
const USER_LOGOUT = "/user/logout"
const FAVORITES = "/user/favorites"
const USER_HOUSES = "/user/houses"

export {
  BASE_URL,
  CITY_LIST,
  HOT_CITY,
  HOME_SWIPER,
  HOME_GROUP,
  HOME_NEWS,
  CURRENT_CITY,
  COMMUNITYS,
  MAP_INFO,
  HOUSE,
  HOUSE_CONDITION,
  USER_LOGIN,
  GET_USER,
  USER_LOGOUT,
  FAVORITES,
  USER_HOUSES,
  HOUSE_IMAGE,
}
