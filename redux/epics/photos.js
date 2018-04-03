import { combineEpics, ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/add/operator/mergeMap'
import { map } from 'rxjs/add/operator/map'
import { mapTo } from 'rxjs/add/operator/mapTo'
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Types } from '../constants'
import { success, successPage ,fetchPage } from '../actions/photos.js'

const fetchEpic = action$ => (
  action$.ofType(Types.PHOTOS_FETCH_REQUEST)
  .mergeMap(action => 
    ajax.getJSON(`/api/photos/`)
    .map(response => success(response))
  )
)

const setPageEpic = action$ => (
  action$.ofType(Types.PHOTOS_SET_PAGE_AND_REQUEST_FETCH)
    .mapTo((action) => fetchPage(action))
)

export const fetchPageEpic = action$ => (
  action$.ofType(Types.PHOTOS_FETCH_REQUEST_PAGE)
  .mergeMap(action => 
    ajax.getJSON(`/api/photos?page=${action.page}`)
    .map(response => successPage(response, action.page))
  )
)

export default combineEpics(
  fetchEpic,
  setPageEpic,
  fetchPageEpic
)