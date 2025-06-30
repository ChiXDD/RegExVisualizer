import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../../../types'

interface Props {
  pattern: string
  flags: string
  text: string
}

export default function ASTButton({ pattern, flags, text }: Props) {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('AST', {
            pattern,
            flags,
            text,
          })
        }>
        <Text style={styles.buttonText}>Ver AST</Text>
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
