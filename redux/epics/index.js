import { combineEpics } from 'redux-observable';
import photos from './photos'

export default combineEpics(
  photos
)