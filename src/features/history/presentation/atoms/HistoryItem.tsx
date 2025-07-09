import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { HistoryEntry } from '../../data/models/HistoryEntry'
import { useThemeStore } from '../../../../core/context/ThemeStore'

interface Props {
  entry: HistoryEntry
  onPress: (entry: HistoryEntry) => void
}

export const HistoryItem = ({ entry, onPress }: Props) => {
  const { colors } = useThemeStore()

  return (
    <TouchableOpacity style={[styles.container, { borderBottomColor: colors.border, backgroundColor: colors.background }]} onPress={() => onPress(entry)}>
      <Text style={[styles.pattern, { color: colors.text }]}>
        {entry.pattern} / {entry.flags}
      </Text>
      <Text style={[styles.date, { color: colors.infoText }]}>{new Date(entry.date).toLocaleString()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  pattern: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    marginTop: 4,
  },
})
