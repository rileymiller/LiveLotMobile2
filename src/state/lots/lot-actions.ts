import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO'
import { UpdateLotAction } from 'state/types'

export enum LOT_ACTION_TYPES {
  UPDATE_LOTS = 'LOTS/UPDATE_LOTS',
}

export const updateLots = (lots: XOutboundLotDTO[]): UpdateLotAction => ({
  type: LOT_ACTION_TYPES.UPDATE_LOTS,
  payload: {
    lots,
  }
});
