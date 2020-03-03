import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO'
import { UpdateLotAction, UpdateLotsAction } from 'state/types'

export enum LOT_ACTION_TYPES {
  UPDATE_LOTS = 'LOTS/UPDATE_LOTS',
  UPDATE_LOT = 'LOTS/UPDATE_LOT'
}

export const updateLots = (lots: XOutboundLotDTO[]): UpdateLotsAction => ({
  type: LOT_ACTION_TYPES.UPDATE_LOTS,
  payload: {
    lots,
  }
});

export const updateLot = (lot: XOutboundLotDTO): UpdateLotAction => ({
  type: LOT_ACTION_TYPES.UPDATE_LOT,
  payload: {
    ...lot,
  }
});
