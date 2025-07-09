import { ExampleButton } from '../atoms/ExampleButton'
import { ClearButton } from '../atoms/ClearButton'
import ASTButton from '../atoms/ASTButton'
import { RailroadButton } from '../atoms/RailRoadButton'
import InfoButton from '../atoms/InfoButton'
import { ScrollView, StyleSheet, View } from 'react-native'
import { RegExForm } from '../organisms/RegExForm'
import { MatchResultPreview } from '../organisms/MatchResultPreview'
import { useNavigation } from '@react-navigation/native'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useState } from 'react'
import { RegExMatch } from '../../domain/usecases/RegExMatch'
import { RegExModel } from '../../data/models/RegExModel'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Pantalla principal del visualizador de expresiones regulares
const VisualizerScreen = () => {
  const navigation = useNavigation()
  const { colors } = useThemeStore()

  const { pattern, flags, testString, reset: resetGlobal } = useRegexGlobalStore()

  const [result, setResult] = useState<RegExModel | null>(null)

  const reset = () => {
    resetGlobal()
    setResult(null)
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={styles.container}>
        <RegExForm setResult={setResult} />
        <ExampleButton />
        <ClearButton reset={reset} />
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
