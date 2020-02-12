import React from 'react'
import { Text } from 'react-native'
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import { Card } from 'react-native-elements'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'

const Lot = () => {
  const randWidth = () => {

    return (Math.floor(Math.random() * 250) + 100)
  }

  return (

    <Card
      containerStyle={{
        borderRadius: spacing.xxs
      }}
      wrapperStyle={{
        // alignItems: 'center',
        height: 225
      }}
    >

      <SkeletonContent
        containerStyle={{ flex: 1, }}
        isLoading={true}
        layout={[
          { key: 'lotNumber', width: 100, height: 100, borderRadius: 100, alignSelf: 'center', marginBottom: spacing.s },
          { key: "1", width: randWidth(), height: 25, marginBottom: spacing.xs },
          { key: "2", width: randWidth(), height: 25, marginBottom: spacing.xs },
          { key: "3", width: randWidth(), height: 25, marginBottom: spacing.xs },
        ]}
      >
        <Text style={{ color: colors.textPrimaryColor, alignSelf: 'center', fontWeight: '500', marginBottom: 10 }}>
          Lot data or something
      </Text>
      </SkeletonContent>
    </Card>
  )
}

export default Lot