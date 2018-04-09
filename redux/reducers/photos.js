import { Types } from '../constants'

const initialState = {
  photos: {},
  fetching: false,
  page: 1,
  pageSize: 10
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.PHOTOS_FETCH_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case Types.PHOTOS_FETCH_REQUEST_PAGE:
      return {
        ...state,
        fetching: true
      }
    // Merge action result with existing photos in state
    case Types.PHOTOS_FETCH_SUCCESS:
      return {
        ...state,
        pageSize: action.items.length,
        photos: {
          ...state.photos,
          ...action.items.reduce((carry, item, index) => {
            carry[index + Object.keys(state.photos).length] = item
            return carry
          }, {})
        },
        fetching: false
      }
    case Types.PHOTOS_FETCH_PAGE_SUCCESS:
      return {
        ...state,
        page: action.page,
        pageSize: action.items.length,
        photos: {
          ...state.photos,
          ...action.items.reduce((carry, item, index) => {
            carry[index + Object.keys(state.photos).length] = item
            return carry
          }, {})
        },
        fetching: false
      }
    case Types.PHOTOS_FETCH_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}