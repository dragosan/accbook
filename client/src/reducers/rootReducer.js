import { combineReducers } from "redux"

import {
  authReducer,
  deleteUsersReducer,
  getUserReducer,
  getUsersReducer,
  profileReducer,
  updateUserReducer,
} from "./userReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  usersList: getUsersReducer,
  usersGet: getUsersReducer,
  userDelete: deleteUsersReducer,
  userGet: getUserReducer,
  userUpdate: updateUserReducer,
})

export default rootReducer
