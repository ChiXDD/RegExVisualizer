import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RegExTree } from '../organisms/RegExTree'
import { TextTree } from '../organisms/TextTree'
import { RegExASTViewModel } from '../viewmodels/RegExASTViewModel' 
import GoBackButton from '../../../visualizer/presentation/atoms/GoBackButton'

type RouteParams = {
  RegexAstAndMatch: {
    pattern: string
    flags: string
    text: string
  }
}

const RegexAstAndMatchScreen = () => {
  const route = useRoute<RouteProp<RouteParams, 'RegexAstAndMatch'>>()
  const { pattern, flags, text } = route.params

  const { ast, matchTree } = RegExASTViewModel(pattern, flags, text)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <GoBackButton />
      </View>
      <Text style={styles.sectionTitle}>RegEx AST</Text>
      <RegExTree ast={ast} />
      <Text style={styles.sectionTitle}>Text String Matches</Text>
      <TextTree matchTree={matchTree} />
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
})
