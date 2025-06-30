import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface Props {
  reset: () => void
}

export const ClearButton = ({ reset }: Props) => {
  const navigation = useNavigation()

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
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})
