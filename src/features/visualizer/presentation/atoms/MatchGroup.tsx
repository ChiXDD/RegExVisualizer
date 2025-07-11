import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useThemeStore } from '../../../../core/context/ThemeStore'

interface Props {
  index: number
  value: string
  color: string
}

// Componente que divide en grupos las coincidencias
export const MatchGroup = ({ index, value, color }: Props) => {
  const { colors } = useThemeStore()

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>Match {index + 1}:</Text>
      <View style={[styles.matchBox, { backgroundColor: color }]}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  matchBox: {
    padding: 6,
    borderRadius: 4,
  },
  text: {
    fontSize: 20,
  },
})
