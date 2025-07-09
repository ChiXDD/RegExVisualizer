import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../../core/navigation/types'
import { useHistoryViewModel } from '../viewmodels/HistoryViewModel'
import { HistoryList } from '../molecules/HistoryList'
import { HistoryEntry } from '../../data/models/HistoryEntry'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useThemeStore } from '../../../../core/context/ThemeStore'

export const HistoryScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList, 'Home'>>()
  const { history, loading, load, clear } = useHistoryViewModel()
  const setPattern = useRegexGlobalStore((s) => s.setPattern)
  const setFlags = useRegexGlobalStore((s) => s.setFlags)
  const setTestString = useRegexGlobalStore((s) => s.setTestString)
  const { colors } = useThemeStore()

  // recarga al volver a la pantalla
  useFocusEffect(
    React.useCallback(() => {
      load()
    }, [load])
  )

  const handleSelect = useCallback(
    (entry: HistoryEntry) => {
      setPattern(entry.pattern)
      setFlags(entry.flags)
      setTestString(entry.testString)
      navigation.navigate('Visualizer')
    },
    [navigation, setPattern, setFlags, setTestString]
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Historial de Expresiones</Text>

      {loading ? <ActivityIndicator size="small" color={colors.text} /> : <HistoryList history={history} onSelect={handleSelect} />}

      <TouchableOpacity onPress={clear} style={[styles.clearBtn, { backgroundColor: colors.buttonBackground, borderColor: colors.border }]}>
        <Text style={[styles.clearText, { color: colors.buttonText }]}>Limpiar Historial</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  clearBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 12,
  },
  clearText: { fontSize: 16, fontWeight: '600' },
})
