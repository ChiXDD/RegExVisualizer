import { View, StyleSheet, ScrollView } from 'react-native'
import { RailroadToken } from '../atoms/RailRoadToken'
import { RailroadToken as TokenType } from '../viewmodels/RailRoadViewModel'

interface Props {
  tokens: TokenType[]
}

export const RailroadTrack = ({ tokens }: Props) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.scroll}>
      <View style={styles.track}>
        {tokens.map((token, index) => (
          <RailroadToken key={index} type={token.type} value={token.value} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 10,
  },
  track: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f1f2f6',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dfe6e9',
  },
})
