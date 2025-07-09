import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../../core/navigation/types'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Botón que permite navegar a la pantalla de AST
export default function ASTButton() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>()
  const { pattern, flags, testString } = useRegexGlobalStore()
  const { colors } = useThemeStore()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.buttonBackground }]}
        onPress={() =>
          navigation.navigate('AST', {
            pattern,
            flags,
            text: testString,
          })
        }>
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>AST</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    alignItems: 'center',
  },
  button: {
    padding: 15,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
})
