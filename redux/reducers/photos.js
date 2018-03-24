import { Types } from '../constants'

const initialState = {
  photos: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
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
      }
    case Types.PHOTOS_FETCH_FAILURE:
      return state
    default:
      return state
  }
}