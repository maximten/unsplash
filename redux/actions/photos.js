import { Types } from '../constants'

export const fetch = () => ({
  type: Types.PHOTOS_FETCH_REQUEST
})

export const setPageEndRequestFetch = (page) => ({
  type: Types.PHOTOS_SET_PAGE_AND_REQUEST_FETCH,
  page
})

export const fetchPage = (page) => ({
  type: Types.PHOTOS_FETCH_REQUEST_PAGE,
  page
})

export const setFetchingFlag = () => ({
  type: Types.PHOTOS_SET_FETCHING_FLAG
})

export const success = (items) => ({
  type: Types.PHOTOS_FETCH_SUCCESS,
  items
})

export const successPage = (items, page) => ({
  type: Types.PHOTOS_FETCH_PAGE_SUCCESS,
  items,
  page
})