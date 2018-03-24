import { Types } from '../constants'

export const fetch = () => ({
  type: Types.PHOTOS_FETCH_REQUEST
})

export const success = (items) => ({
  type: Types.PHOTOS_FETCH_SUCCESS,
  items
})