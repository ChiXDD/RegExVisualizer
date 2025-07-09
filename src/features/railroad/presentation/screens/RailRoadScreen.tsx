// src/features/railroad/presentation/screens/RailroadScreen.tsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GoBackButton from '../../../visualizer/presentation/atoms/GoBackButton'
import { RegulexEmbed } from '../molecules/RegulexEmbed'
import { useThemeStore } from '../../../../core/context/ThemeStore'

export const RailroadScreen = () => {
  const { colors } = useThemeStore()

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GoBackButton />
      <Text style={[styles.label, { color: colors.text }]}>Railroad Diagram</Text>
      <View style={styles.diagramContainer}>
        <RegulexEmbed />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: { fontSize: 16, fontWeight: 'bold', margin: 12 },
  diagramContainer: { flex: 1 },
})
