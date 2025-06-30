import { View, Text, StyleSheet } from 'react-native'

// Definición de los tipos de los props que recibe el componente
// type puede ser 'literal', 'operator', 'group' o 'branch'
interface Props {
  type: 'literal' | 'operator' | 'group' | 'branch'
  value: string
}

// Componente que representa cada token o elemento del diagrama de ferrocarril
// Recibe un tipo y un valor, y muestra el token con un estilo específico
export const RailroadToken = ({ type, value }: Props) => (
  <View style={styles.wrapper}>
    <View style={styles.line} />
    <View style={[styles.token, styles[type]]}>
      <Text style={styles.text}>{value}</Text>
    </View>
    <View style={styles.line} />
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 12,
  },
  line: {
    width: 10,
    height: 2,
    backgroundColor: '#636e72',
  },
  token: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#636e72',
    marginHorizontal: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'monospace',
  },
  literal: {
    backgroundColor: '#dfe6e9',
  },
  operator: {
    backgroundColor: '#fab1a0',
  },
  group: {
    backgroundColor: '#74b9ff',
  },
  branch: {
    backgroundColor: '#ffeaa7',
  },
})
