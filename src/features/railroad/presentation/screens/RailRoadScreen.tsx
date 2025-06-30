import { ScrollView, Text, StyleSheet, View } from 'react-native'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useRailroadViewModel } from '../viewmodels/RailRoadViewModel'
import { RailroadTrack } from '../molecules/RailRoadTrack'
import GoBackButton from '../../../visualizer/presentation/atoms/GoBackButton'

// Componente que muestra el diagrama de ferrocarril basado en la expresión regular actual
export const RailroadScreen = () => {
  const pattern = useRegexGlobalStore((state) => state.pattern) // Obtiene el patrón de la expresión regular desde el estado global
  const tokens = useRailroadViewModel() // Utiliza el ViewModel para obtener los tokens

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <GoBackButton />
      </View>
      <ScrollView>
        <Text style={styles.label}>Expression:</Text>
        <Text style={styles.patternDisplay}>/{pattern}/</Text>

        <Text style={styles.label}>Diagram:</Text>
        <RailroadTrack tokens={tokens} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  patternDisplay: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: 'monospace',
    marginBottom: 12,
  },
})
