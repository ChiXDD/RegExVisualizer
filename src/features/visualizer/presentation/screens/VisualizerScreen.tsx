import React, { useState, useCallback } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { RegExForm } from '../organisms/RegExForm'
import { ExampleButton } from '../atoms/ExampleButton'
import { ClearButton } from '../atoms/ClearButton'
import ASTButton from '../atoms/ASTButton'
import { RailroadButton } from '../atoms/RailRoadButton'
import InfoButton from '../atoms/InfoButton'
import { MatchResultPreview } from '../organisms/MatchResultPreview'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useHistoryViewModel } from '../../../history/presentation/viewmodels/HistoryViewModel'
import { RegExModel } from '../../data/models/RegExModel'
import { useThemeStore } from '../../../../core/context/ThemeStore'

const VisualizerScreen = () => {
  const { colors } = useThemeStore()
  const { pattern, flags, testString, reset: resetGlobal } = useRegexGlobalStore()

  const [result, setResult] = useState<RegExModel | null>(null)
  const { add: addHistory } = useHistoryViewModel()

  const handleSetResult = useCallback(
    (res: RegExModel | null) => {
      setResult(res)
      if (res && res.matches && res.matches.length > 0) {
        addHistory({ pattern, flags, testString })
      }
    },
    [pattern, flags, testString, addHistory]
  )

  const handleClear = useCallback(() => {
    resetGlobal()
    setResult(null)
  }, [resetGlobal])

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={styles.container}>
        <RegExForm setResult={handleSetResult} />

        <ExampleButton />
        <ClearButton reset={handleClear} />
        <ASTButton />
        <RailroadButton />
        <InfoButton />
        <MatchResultPreview result={result} />
      </ScrollView>
    </View>
  )
}

export default VisualizerScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
})
