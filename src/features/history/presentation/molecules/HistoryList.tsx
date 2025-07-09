import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { HistoryEntry } from '../../data/models/HistoryEntry'
import { HistoryItem } from '../atoms/HistoryItem'
import { useThemeStore } from '../../../../core/context/ThemeStore'

interface Props {
  history: HistoryEntry[]
  onSelect: (entry: HistoryEntry) => void
}

export const HistoryList = ({ history, onSelect }: Props) => {
  const { colors } = useThemeStore()

  return <FlatList style={[styles.list, { backgroundColor: colors.background }]} data={history} keyExtractor={(item, i) => item.date.toString() + i} renderItem={({ item }) => <HistoryItem entry={item} onPress={onSelect} />} />
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
})
