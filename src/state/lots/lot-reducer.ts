import { LotState, LotAction, UpdateLotAction } from 'state/types'
import { LOT_ACTION_TYPES } from './lot-actions'
import { cloneDeep } from 'lodash'
import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO'

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
    case LOT_ACTION_TYPES.UPDATE_LOT:
      return {
        ...oldState,
        lots: [
          ...oldState.lots.map((lot: XOutboundLotDTO) => {
            if (lot.lotName === action.payload.lotName) {
              return action.payload
            }
            return lot
          })
        ]
      }
    default:
      return state
  }
}

export { lots }