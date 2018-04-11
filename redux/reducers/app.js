import { Types } from '../constants'

const initialState = {
  isMobile: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_MOBILE:
      return {
        ...state,
        isMobile: action.value
      }
    default:
      return state
  }
}