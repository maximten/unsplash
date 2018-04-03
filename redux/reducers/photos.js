import { Types } from '../constants'

const initialState = {
  photos: {},
  fetching: false,
  page: 1
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
    // case Types.PHOTOS_SET_PAGE_AND_REQUEST_FETCH:
    //   return {
    //     ...state,
    //     page: actions.page,
    //     fetching: true
    //   }
    // Merge action result with existing photos in state
    case Types.PHOTOS_FETCH_SUCCESS:
      return {
        ...state,
        photos: {
          ...state.photos,
          ...action.items.reduce((carry, item) => {
            carry[item.id] = item
            return carry
          }, {})
        },
        fetching: false
      }
    case Types.PHOTOS_FETCH_PAGE_SUCCESS:
      return {
        ...state,
        page: action.page,
        photos: {
          ...state.photos,
          ...action.items.reduce((carry, item) => {
            carry[item.id] = item
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