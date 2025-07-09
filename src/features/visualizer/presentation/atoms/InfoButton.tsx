import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Boton para navegar a la pantalla de información sobre tokens de expresiones regulares
export default function InfoButton() {
  const navigation = useNavigation()
  const { colors } = useThemeStore()

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Don't know how to make a regular expression?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Text style={[styles.text, { color: colors.infoText }]}>Check All Tokens Here!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
  },
  text: {
    fontSize: 18,
  },
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
})