import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { ExportJSON } from '../../../../core/utils/ExportAST'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Componente que permite exportar el AST de la expresión regular actual como JSON
export default function ExportButton() {
  const ast = useRegexGlobalStore((state) => state.ast)
  const { colors } = useThemeStore()

  if (!ast) return null

  return (
    <View>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.exportButton }]} onPress={() => ExportJSON(ast)}>
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>Export AST as JSON</Text>
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
