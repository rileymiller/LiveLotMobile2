import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

import Lot from 'components/Lot/Lot'
import { useNavigation } from 'hooks/useNavigation'
const LotsView = () => {

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Lot />
      <Lot />
      <Lot />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export default LotsView