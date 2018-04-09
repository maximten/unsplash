import { Types } from '../constants'

export const fetchPage = (page) => ({
  type: Types.PHOTOS_FETCH_REQUEST_PAGE,
  page
})

export const successPage = (items, page) => ({
  type: Types.PHOTOS_FETCH_PAGE_SUCCESS,
  items,
  page
})

export const errorPage = (error) => ({
  type: Types.PHOTOS_FETCH_PAGE_FAILURE,
  error,
})