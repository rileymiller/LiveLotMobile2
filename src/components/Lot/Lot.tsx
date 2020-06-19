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
  isLoading: boolean
}

const Lot = ({ isLoading, lot }: Props) => {
  const randWidth = () => {

    return (Math.floor(Math.random() * 250) + 100)
  }

  const getLotStatus = () => {
    if (!lot?.lotStatus) {
      return `down`
    } else if (lot.numSpots <= SPOT_THRESHOLD) {
      return `< 5 spots`
    } else {
      return `healthy`
    }
  }

  const getLotColor = () => {
    return colors.hintColor
    // if (!lot?.lotStatus) {
    //   return colors.disabledColor
    // } else if (lot.numSpots <= SPOT_THRESHOLD) {
    //   return colors.lotSpotBackgroundRedColor
    // } else {
    //   return colors.lotSpotBackgroundGreenColor
    // }
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
      containerStyle={styles.card}
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
                  marginBottom: spacing.xs
                }}
              >
                <Text
                  style={{
                    fontSize: spacing.l,
                    textAlign: 'center',
                    fontWeight: '300',
                    color: colors.hintColor
                  }}
                >
                  {lot?.lotName}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', }}>

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                    borderRightColor: colors.dividerColor,
                    borderRightWidth: spacing.borderWidth,
                    paddingRight: spacing.m,
                  }}
                >
                  <Text>
                    <Text
                      style={styles.label}
                    >
                      Lot name:
                    </Text>
                    <Text
                      style={styles.info}
                    >

                      {` ${lot?.lotName}`}
                    </Text>
                  </Text>
                  <Text>
                    <Text
                      style={styles.label}
                    >
                      Address:
                    </Text>
                    <Text
                      style={styles.info}
                    >

                      {` ${lot?.lotAddress}`}
                    </Text>
                  </Text>
                  <Text>
                    <Text
                      style={styles.label}
                    >
                      Total Spots:
                    </Text>
                    <Text
                      style={styles.info}
                    >

                      {` ${lot?.totalSpots}`}
                    </Text>
                  </Text>
                  <Text>
                    <Text
                      style={styles.label}
                    >
                      {`Status: `}
                    </Text>
                    <Text
                      style={styles.info}
                    >
                      {
                        getLotStatus()
                      }
                    </Text>
                  </Text>
                  <Text>
                    <Text
                      style={styles.label}
                    >
                      {`Last Updated: `}
                    </Text>
                    <Text
                      style={styles.info}
                    >
                      {
                        `${new Date(lot?.lastUpdated).toLocaleString()}`
                      }
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    padding: spacing.m,
                    justifyContent: 'center',
                    alignContent: 'center'
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
                        color: colors.textPrimaryColor
                      }}
                    >
                      {lot?.numSpots}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )
      }
    </Card>
  )
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: spacing.xxs
  },
  label: {
    fontWeight: '600',
    color: colors.hintColor,
  },
  info: {
    fontWeight: '500',
    color: colors.hintSecondaryColor,
  },
  greenSpots: {
    backgroundColor: colors.lotSpotBackgroundGreenColor,
    borderRadius: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    alignSelf: 'center',
    elevation: 4,
    width: 80,
    minWidth: 80,
    height: 80,
  },
  disabledSpots: {
    backgroundColor: colors.disabledColor,
    borderRadius: spacing.xl,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    alignItems: 'center',
    width: 80,
    minWidth: 80,
    height: 80,
  },
  redSpots: {
    backgroundColor: colors.lotSpotBackgroundRedColor,
    borderRadius: spacing.xl,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    alignItems: 'center',
    width: 80,
    minWidth: 80,
    height: 80,
  }
})
export default Lot