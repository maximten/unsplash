import { combineEpics, ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/add/operator/mergeMap'
import { map } from 'rxjs/add/operator/map'
import { mapTo } from 'rxjs/add/operator/mapTo'
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Types } from '../constants'
import { success, fetchPage } from '../actions/photos.js'

const fetchEpic = action$ => (
  action$.ofType(Types.PHOTOS_FETCH_REQUEST)
  .mergeMap(action => 
    ajax.getJSON(`/api/photos/`)
    .map(response => success(response))
  )
)

const setPageEpic = action$ => (
  action$.ofType(Types.PHOTOS_SET_PAGE_AND_REQUEST_FETCH)
    .mapTo((action) => {
      console.log(action)
      return fetchPage(action)
    })
)

const fetchPageEpic = action$ => (
  action$.ofType(Types.PHOTOS_FETCH_REQUEST_PAGE)
  .mergeMap(action => 
    ajax.getJSON(`/api/photos?page=${action.page}`)
    .map(response => success(response))
  )
)

export default combineEpics(
  fetchEpic,
  setPageEpic,
  fetchPageEpic
)