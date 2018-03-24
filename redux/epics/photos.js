import { combineEpics, ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/add/operator/mergeMap'
import { map } from 'rxjs/add/operator/map'
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Types } from '../constants'
import { success } from '../actions/photos.js'

const fetchEpic = action$ => (
  action$.ofType(Types.PHOTOS_FETCH_REQUEST)
  .mergeMap(action => 
    ajax.getJSON(`/api/photos/`)
    .map(response => success(response))
  )
)

export default combineEpics(
  fetchEpic
)