import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Diferentes colores para distinguir los diferentes resaltados
export const highlighColor = ['#ffeaa7', '#a29bfe', '#fab1a0', '#81ecec', '#74b9ff', '#fdcb6e']

interface Props {
  text: string
  matches: { index: number; length: number }[]
}

// Componente que resalta partes del texto basándose en las coincidencias encontradas
export const HighlightedText = ({ text, matches }: Props) => {
  const parts: { text: string; highlight: boolean; color?: string }[] = []
  let lastIndex = 0
  const { colors } = useThemeStore()

  matches.forEach((match, i) => {
    const { index, length } = match
    if (index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, index), highlight: false })
    }
    parts.push({
      text: text.slice(index, index + length),
      highlight: true,
      color: highlighColor[i % highlighColor.length],
    })
    lastIndex = index + length
  })

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), highlight: false })
  }

  return (
    <Text style={styles.text}>
      {parts.map((part, idx) => (
        <Text key={idx} style={part.highlight ? [styles.highlighted, { backgroundColor: part.color }] : undefined}>
          {part.text}
        </Text>
      ))}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
  },
  highlighted: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
