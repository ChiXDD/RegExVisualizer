/* import InfoButton from '../atoms/InfoButton'

export default function VisualizerScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Visualizer Screen </Text>
      <Text> Don't know how to make a regular expression? </Text>
      <InfoButton />
    </View>
  )
} */

import React from 'react'
import { ScrollView, View } from 'react-native'
import { RegexForm } from '../organisms/RegExForm'
import { MatchResultPreview } from '../organisms/MatchResultPreview'
import { VisualizerViweModel } from '../viewmodels/VisualizerViewModel'

const RegexTesterScreen = () => {
  const { pattern, setPattern, flags, setFlags, testString, setTestString, result, updateMatch } = VisualizerViweModel()

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <RegexForm pattern={pattern} flags={flags} testString={testString} setPattern={setPattern} setFlags={setFlags} setTestString={setTestString} updateMatch={updateMatch} />
      <MatchResultPreview result={result} />
    </ScrollView>
  )
}

export default RegexTesterScreen