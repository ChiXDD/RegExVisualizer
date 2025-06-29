import InfoButton from '../atoms/InfoButton'
import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { RegExForm } from '../organisms/RegExForm'
import { MatchResultPreview } from '../organisms/MatchResultPreview'
import { VisualizerViewModel } from '../viewmodels/VisualizerViewModel'

const RegexTesterScreen = () => {
  const { pattern, setPattern, flags, setFlags, testString, setTestString, result, updateMatch, reset } = VisualizerViewModel()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RegExForm pattern={pattern} flags={flags} testString={testString} setPattern={setPattern} setFlags={setFlags} setTestString={setTestString} updateMatch={updateMatch} reset={reset} />
      <InfoButton />
      <MatchResultPreview result={result} />
    </ScrollView>
  )
}

export default RegexTesterScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
