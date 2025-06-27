import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function VisualizerScreen() {
    const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Visualizer Screen </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text> Abrir Modal </Text>
      </TouchableOpacity>
    </View>
  )
}