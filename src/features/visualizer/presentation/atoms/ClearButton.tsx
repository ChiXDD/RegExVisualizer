import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Botón que limpia los campos
export const ClearButton = () => {
  const navigation = useNavigation()
  const reset = useRegexGlobalStore((state) => state.reset)
  const { colors } = useThemeStore()

  return (
    <View>
      <TouchableOpacity onPress={reset} style={[styles.button, { backgroundColor: colors.buttonBackground }]}>
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>Clear Inputs</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
  },
})
