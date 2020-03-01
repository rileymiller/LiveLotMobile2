/**
 * XOutboundLotDTO
 * 
 * This is the server response for a given lot as defined in our current lot model.
 * Lot model defined https://github.com/maddiearogers/LiveLotAppAPI/blob/master/api/models/lotModel.js
 * 
 */
type XOutboundLotDTO = {
  lotName: string,
  numSpots: number,
  totalSpots: number,
  lotAddress: string,
  lotStatus: boolean
}

export { XOutboundLotDTO }