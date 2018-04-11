import { combineReducers } from "redux"
import photos from './photos'
import app from './app'

export default combineReducers({
  photos,
  app
})