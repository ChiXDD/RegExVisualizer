import InfoButton from '../atoms/InfoButton'
import ASTButton from '../atoms/ASTButton'
import { RailroadButton } from '../atoms/RailRoadButton'
import { ScrollView, StyleSheet, View } from 'react-native'
import { RegExForm } from '../organisms/RegExForm'
import { MatchResultPreview } from '../organisms/MatchResultPreview'
import { useNavigation } from '@react-navigation/native'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useState } from 'react'
import { RegExMatch } from '../../domain/usecases/RegExMatch'
import { RegExModel } from '../../data/models/RegExModel'

const VisualizerScreen = () => {
  const navigation = useNavigation()

  const { pattern, setPattern, flags, setFlags, testString, setTestString, reset: resetGlobal } = useRegexGlobalStore()

  const [result, setResult] = useState<RegExModel | null>(null)

  const updateMatch = () => {
    const matched = RegExMatch(pattern, flags, testString)
    setResult(matched)
  }

  const reset = () => {
    resetGlobal()
    setResult(null)
  }

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <RegExForm setResult={setResult} />
        <InfoButton />
        <ASTButton pattern={pattern} flags={flags} text={testString} />
        <RailroadButton pattern={pattern} />
        <MatchResultPreview result={result} />
      </ScrollView>
    </View>
  )
}

export default VisualizerScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
