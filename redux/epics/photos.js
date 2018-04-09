import { combineEpics, ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/add/operator/mergeMap'
import { map } from 'rxjs/add/operator/map'
import { mapTo } from 'rxjs/add/operator/mapTo'
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Types } from '../constants'
import { successPage, errorPage } from '../actions/photos.js'

export const fetchPageEpic = action$ => (
  action$.ofType(Types.PHOTOS_FETCH_REQUEST_PAGE)
  .mergeMap(action => 
    ajax.getJSON(`/api/photos?page=${action.page}`)
    .map(response => successPage(response, action.page))
    .catch(error => Observable.of(errorPage()))
  )
)

export default combineEpics(
  fetchPageEpic
)