import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// Boton para navegar a la pantalla de información sobre tokens de expresiones regulares
export default function InfoButton() {
  const navigation = useNavigation()

  return (
    <View>
      <Text style={styles.title}>Don't know how to make a regular expression?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Text style={styles.text}>Check All Tokens Here!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
  },
  text: {
    color: 'blue',
    fontSize: 18,
  },
})