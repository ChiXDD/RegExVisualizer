import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { ExportJSON } from '../../../../core/utils/ExportAST'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

export default function ExportButton() {
  const ast = useRegexGlobalStore((state) => state.ast)

  if (!ast) return null

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => ExportJSON(ast)}>
        <Text style={styles.buttonText}>Export AST as JSON</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#708A58',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
})
