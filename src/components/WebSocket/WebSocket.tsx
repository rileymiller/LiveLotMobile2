import React, { useEffect } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
// import socketIOClient from 'socket.io-client'
import io from 'socket.io-client'
import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { updateLot } from 'state/lots/lot-actions'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { SERVER_URL } from 'react-native-dotenv'

const WebSocket = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    // socket example
    const socket = io(SERVER_URL)
    socket.on("Car Out", (lot: XOutboundLotDTO) => {
      console.log('Car came out', lot)
      dispatch(updateLot(lot))
    })
    socket.on("Car In", (lot: XOutboundLotDTO) => {
      console.log('Car came out', lot)
      dispatch(updateLot(lot))
    })
  }, [])
  return (
    <></>
  )
}

export default WebSocket