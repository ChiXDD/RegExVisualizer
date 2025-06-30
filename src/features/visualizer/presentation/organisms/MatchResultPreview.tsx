import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HighlightedText, colors } from '../atoms/HighlightedText'
import { MatchGroup } from '../atoms/MatchGroup'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

export const MatchResultPreview = () => {
  const { pattern, flags, testString } = useRegexGlobalStore()

  if (!pattern || !testString) return null

  let regex: RegExp | null = null
  try {
    regex = new RegExp(pattern, flags)
  } catch (e) {
    return <Text style={styles.error}>Expresión inválida</Text>
  }

  const matchData: { index: number; length: number; value: string }[] = []

  if (regex.global) {
    let m
    while ((m = regex.exec(testString)) !== null) {
      matchData.push({ index: m.index, length: m[0].length, value: m[0] })
    }
  } else {
    const m = testString.match(regex)
    if (m && m.index !== undefined) {
      matchData.push({ index: m.index, length: m[0].length, value: m[0] })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text String:</Text>

      <HighlightedText text={testString} matches={matchData.map(({ index, length }) => ({ index, length }))} />

      <Text style={styles.matchInfo}>Match Information:</Text>
      {matchData.map((m, i) => (
        <MatchGroup key={i} index={i} value={m.value} color={colors[i % colors.length]} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    marginBottom: 8,
    fontSize: 18,
  },
  matchInfo: {
    marginTop: 16,
    fontWeight: '600',
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontStyle: 'italic',
  },
})
