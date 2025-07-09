import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Botón para regresar a la página principal
export default function GoBackButton() {
  const navigation = useNavigation()
  const { colors } = useThemeStore()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.button, { backgroundColor: colors.buttonBackground }]}>
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
  },
})
