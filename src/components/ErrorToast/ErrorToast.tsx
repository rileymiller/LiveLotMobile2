import React, { Dispatch, SetStateAction } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from 'colors/colors'
import { spacing } from 'spacing/spacing'
import { useNavigation } from '@react-navigation/native'

type Props = {
  error: string,
  setError: Dispatch<SetStateAction<string>>
}

const ErrorToast: React.FC<Props> = ({ error, setError }) => {

  return (
    <View
      style={{
        display: error ? "flex" : "none",
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: colors.errorColor,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: spacing.xxs,
        borderRadius: spacing.xxxs
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: spacing.s,
          color: colors.errorTextPrimaryColor,
          fontWeight: '500',
        }}
      >
        {error}
      </Text>
      <Icon
        name='close'
        testID={'toast-error-close'}
        size={spacing.s}
        style={{ alignSelf: 'flex-end' }}
        color={colors.textPrimaryColor}
        onPress={() => setError('')}
      />
    </View>
  )
}

export default ErrorToast