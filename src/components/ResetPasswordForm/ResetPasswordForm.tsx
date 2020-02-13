import React from 'react'
import { useState } from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native'

import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'colors/colors'
import { useNavigation } from 'hooks/useNavigation'
import { spacing } from 'spacing/spacing'

const ResetPasswordForm = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)
  const updateEmail = (email: string) => {
    setEmail(email)
    setEmailError(false)
  }

  const validateEmail = () => {
    if (!email?.length) {
      setEmailError(true)
      return
    }

    navigation.navigate('LoginScreen')
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.keyboardContainer}>
        <Input
          label={'Enter Email'}
          placeholder={'Email'}
          labelStyle={{ color: colors.textPrimaryColor }}
          placeholderTextColor={colors.textPrimaryColor}
          onChangeText={updateEmail}
          keyboardType={'email-address'}
          leftIcon={
            <Icon
              name={'envelope'}
              size={spacing.s + spacing.xxxs}
              color={colors.textPrimaryColor}
              style={{ marginRight: spacing.xs }}
            />
          }
          returnKeyType={'go'}
          returnKeyLabel={'Submit'}
          onSubmitEditing={() => validateEmail()}
          errorMessage={emailError ? 'Please enter a valid email' : ''}
        />
        <Button
          title={'Reset Password'}
          containerStyle={{ marginTop: spacing.xs }}
          buttonStyle={{ backgroundColor: colors.buttonPrimaryColor }}
          titleStyle={{ color: colors.buttonTextPrimaryColor }}
          onPress={() => { validateEmail() }}
        />
      </ScrollView>
      <View style={styles.signupLinkContainer}>
        <Button
          containerStyle={{ marginBottom: spacing.xs }}
          buttonStyle={{ backgroundColor: 'transparent' }}
          titleStyle={{ color: colors.textPrimaryColor }}
          title='Login'
          icon={
            <Icon
              name={'angle-double-left'}
              size={spacing.m}
              color={colors.textPrimaryColor}
              style={{ marginRight: spacing.xs }}
            />
          }
          accessibilityLabel={'Login button'}
          onPress={() => { navigation.navigate('LoginScreen') }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: spacing.xs
  },
  keyboardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  signupLinkContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export default ResetPasswordForm