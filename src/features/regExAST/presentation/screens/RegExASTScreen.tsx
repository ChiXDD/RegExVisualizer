import React, { useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { RegExTree } from '../organisms/RegExTree'
import GoBackButton from '../../../visualizer/presentation/atoms/GoBackButton'
import ExportButton from '../atoms/ExportButton'
import { ParseRegEx } from '../../domain/usecases/ParseRegEx'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Pantalla principal que muestra el AST de la expresión regular
const RegexAstAndMatchScreen = () => {
  const { pattern, flags, testString, setAST } = useRegexGlobalStore()
  const { colors } = useThemeStore()

  useEffect(() => {
    const astResult = ParseRegEx(pattern, flags)
    setAST(astResult)
  }, [pattern, flags, testString])

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <View style={{ marginBottom: 20 }}>
        <GoBackButton />
        <ExportButton />
      </View>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>RegEx AST</Text>
      <RegExTree />
    </ScrollView>
  )
}

export default RegexAstAndMatchScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
})
