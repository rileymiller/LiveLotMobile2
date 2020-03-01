import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import { Card, withBadge } from 'react-native-elements'
import { SPOT_THRESHOLD } from 'state/constants'
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

  const getLotStatus = () => {
    if (!lot?.lotStatus) {
      return `down`
    } else if (lot.numSpots <= SPOT_THRESHOLD) {
      return `less than 5 available spots`
    } else {
      return `healthy`
    }
  }

  const getLotColor = () => {
    if (!lot?.lotStatus) {
      return colors.disabledColor
    } else if (lot.numSpots <= SPOT_THRESHOLD) {
      return colors.lotSpotBackgroundRedColor
    } else {
      return colors.lotSpotBackgroundGreenColor
    }
  }

  const getNumSpotColor = () => {
    if (!lot?.lotStatus) {
      return styles.disabledSpots
    } else if (lot.numSpots <= SPOT_THRESHOLD) {
      return styles.redSpots
    } else {
      return styles.greenSpots
    }
  }


  return (

    <Card
      containerStyle={{
        borderRadius: spacing.xxxs,
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
              </SkeletonContent>
            </>

          ) : (
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  borderBottomColor: colors.dividerColor,
                  borderBottomWidth: spacing.borderWidth,
                }}
              >
                <Text
                  style={{
                    fontSize: spacing.l,
                    textAlign: 'center',
                    fontWeight: '400',
                    color: getLotColor()
                  }}
                >
                  {lot?.lotName}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View
                  style={
                    getNumSpotColor()
                  }
                >
                  <Text
                    style={{
                      fontSize: spacing.l,
                      color: colors.textSecondaryColor
                    }}
                  >
                    {lot?.numSpots}
                  </Text>
                </View>
              </View>
              <Text>
                <Text
                  style={{
                    fontWeight: '600',
                    color: colors.textPrimaryColor,
                  }}
                >
                  {`Status: `}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    color: getLotColor()
                  }}
                >
                  {
                    getLotStatus()
                  }
                </Text>
              </Text>
            </View>
          )
      }
    </Card>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenSpots: {
    backgroundColor: colors.lotSpotBackgroundGreenColor,
    borderRadius: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  disabledSpots: {
    backgroundColor: colors.disabledColor,
    borderRadius: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  redSpots: {
    backgroundColor: colors.lotSpotBackgroundRedColor,
    borderRadius: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
  }
})
export default Lot