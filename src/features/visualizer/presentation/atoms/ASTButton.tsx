import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../../core/navigation/types'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

// Boton que permite navegar a la pantalla de AST
export default function ASTButton() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>()
  const { pattern, flags, testString } = useRegexGlobalStore()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('AST', {
            pattern,
            flags,
            text: testString,
          })
        }>
        <Text style={styles.buttonText}>AST</Text>
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
    backgroundColor: '#3674B5',
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})
