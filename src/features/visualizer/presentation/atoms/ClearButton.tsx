import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

// Boton que limpia los campos
export const ClearButton = () => {
  const navigation = useNavigation()
  const reset = useRegexGlobalStore((state) => state.reset)

  return (
    <View>
      <TouchableOpacity onPress={reset} style={styles.button}>
        <Text style={styles.buttonText}>Clear Inputs</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#3674B5',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})
