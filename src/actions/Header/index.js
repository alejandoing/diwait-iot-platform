import { VISIBILITY_DRAWER } from '../../constants/action-types'
import { CHEVRON_RIGHT, CHEVRON_LEFT } from '../../constants/icon'

export function visibilityDrawer(drawer, keyboardDrawer) {
  return {
    type: VISIBILITY_DRAWER,
    payload: {
      drawer,
      keyboardDrawer: (keyboardDrawer === CHEVRON_RIGHT) ? CHEVRON_LEFT : CHEVRON_RIGHT
    }
  }
}