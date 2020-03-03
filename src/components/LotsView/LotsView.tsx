import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { updateLots } from 'state/lots/lot-actions'
import { AppState } from 'state/types'
import Lot from 'components/Lot/Lot'
import { getLots } from 'api/lots/LotAPI'
import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO'


const LotsView = () => {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchLots = async () => {
      const lots = await getLots()

      await dispatch(updateLots(lots))

      setIsLoading(false)
    }
    fetchLots()
  }, [])
  const lotState = useSelector((state: AppState) => state.lots.lots)

  console.log(lotState)
  return (
    <ScrollView>
      {
        isLoading ? (
          <>
            <Lot isLoading={isLoading} />
            <Lot isLoading={isLoading} />
            <Lot isLoading={isLoading} />
          </>
        ) :
          lotState.map((lot: XOutboundLotDTO, i) => {
            return (
              <Lot key={i} isLoading={false} lot={lot} />
            )
          })
      }
    </ScrollView>
  )
}

export default LotsView