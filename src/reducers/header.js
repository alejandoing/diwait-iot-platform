import { VISIBILITY_DRAWER } from '../constants/action-types'
import { fromJS } from 'immutable'

const initialState = fromJS({
  keyboardDrawer: 'chevron-left',
  drawer: true
})

export const header = (state = initialState, action) => {
  switch (action.type) {
    case VISIBILITY_DRAWER:
      return state.set('drawer', action.payload.drawer).set('keyboardDrawer', action.payload.keyboardDrawer)
      
    default:
      return state
  }
}