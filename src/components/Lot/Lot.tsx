import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import { Card } from 'react-native-elements'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { XOutboundLotDTO } from 'api/lots/XOutboundLotDTO';

type Props = {
  lot?: XOutboundLotDTO
  isLoading?: boolean
}

const Lot = ({ isLoading, lot }: Props) => {
  const randWidth = () => {

    return (Math.floor(Math.random() * 250) + 100)
  }

  return (

    <Card
      containerStyle={{
        borderRadius: spacing.xxxs,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'black',
        shadowOpacity: .4,
      }}
      wrapperStyle={{
        height: 200
      }}
    >
      {
        isLoading ?
          (
            <>
              <SkeletonContent
                containerStyle={{ flex: 1, }}
                isLoading={true}
                layout={[
                  { key: 'lotNumber', width: 75, height: 75, borderRadius: 75, alignSelf: 'center', marginBottom: spacing.s },
                  { key: "1", width: randWidth(), height: 15, marginBottom: spacing.xs },
                  { key: "2", width: randWidth(), height: 15, marginBottom: spacing.xs },
                  { key: "3", width: randWidth(), height: 15, marginBottom: spacing.xs },
                  { key: "4", width: randWidth(), height: 15, marginBottom: spacing.xs },
                ]}
              >
                <Text style={{ color: colors.textPrimaryColor, alignSelf: 'center', fontWeight: '500', marginBottom: 10 }}>
                  Lot data or something
                </Text>
              </SkeletonContent>
            </>

          ) : (
            <>
              <Text
                style={{
                  fontSize: spacing.l,
                  textAlign: 'center',
                }}
              >
                {lot?.numSpots}
              </Text>
              <Text>
                {lot?.lotName}
              </Text>
              <Text>
                {`total spots: ${lot?.totalSpots}`}
              </Text>
            </>
          )
      }
    </Card>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.borderPrimaryColor,
    borderWidth: 1
  }
})
export default Lot