import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'
import { useThemeStore } from '../../../../core/context/ThemeStore'

interface Props {
  label: string
  value: string
  onChangeText: (text: string) => void
}

export const RegExInput = ({ label, value, onChangeText }: Props) => {
  const { colors } = useThemeStore()

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <TextInput style={[styles.input, { color: colors.text, borderColor: colors.border }]} value={value} onChangeText={onChangeText} autoCorrect={false} multiline />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    fontSize: 20,
  },
})
