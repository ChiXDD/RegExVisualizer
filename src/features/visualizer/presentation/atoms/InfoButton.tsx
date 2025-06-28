import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function InfoButton() {
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Check All Tokens Here!</Text>
      </TouchableOpacity>
    </View>
  )
}
