import { combineEpics } from 'redux-observable';
import photos from './photos.js'

export default combineEpics(
  photos
)