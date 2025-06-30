import React, { useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { RegExTree } from '../organisms/RegExTree'
import { TextTree } from '../organisms/TextTree'
import GoBackButton from '../../../visualizer/presentation/atoms/GoBackButton'
import ExportButton from '../atoms/ExportButton'
import { ParseRegEx } from '../../domain/usecases/ParseRegEx'
import { ParseText } from '../../domain/usecases/ParseText'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

// Pantalla principal que muestra el AST de la expresión regular y del texto analizado
const RegexAstAndMatchScreen = () => {
  const { pattern, flags, testString, setAST, setMatchTree, ast } = useRegexGlobalStore()

  useEffect(() => {
    const astResult = ParseRegEx(pattern, flags)
    const textResult = ParseText(pattern, flags, testString)

    
    setAST(astResult)
    setMatchTree(textResult)
  }, [pattern, flags, testString])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <GoBackButton />
        <ExportButton />
      </View>
      <Text style={styles.sectionTitle}>RegEx AST</Text>
      <RegExTree />
      <Text style={styles.sectionTitle}>Text String Matches</Text>
      <TextTree />
    </ScrollView>
  )
}

export default RegexAstAndMatchScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  exportButton: {
    backgroundColor: '#0984e3',
    color: 'white',
    padding: 10,
    borderRadius: 6,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
})
