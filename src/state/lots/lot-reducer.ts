import { LotState, LotAction } from 'state/types'
import { LOT_ACTION_TYPES } from './lot-actions'
import { cloneDeep } from 'lodash'

const initialLotState: LotState = {
  lots: []
}
const lots = (
  state: LotState = initialLotState,
  action: LotAction
) => {
  const oldState: LotState = cloneDeep(state);

  switch (action.type) {
    case LOT_ACTION_TYPES.UPDATE_LOTS:
      return { ...oldState, ...action.payload }
    default:
      return state
  }
}

export { lots }