import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { RegExASTModel } from '../../data/models/RegExASTModel'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Componente que muestra el AST de la expresión regular actual
export const RegExTree = () => {
  const ast = useRegexGlobalStore((state) => state.ast)
  const { colors } = useThemeStore()

  const renderNode = (node: RegExASTModel, depth: number = 0): string[] => {
    const indent = ' '.repeat(depth * 2)
    const lines: string[] = []

    const label = node.value ? `${node.type}: ${node.value}` : node.type
    lines.push(`${indent}└─ ${label}`)

    if (node.children) {
      node.children.forEach((child) => {
        lines.push(...renderNode(child, depth + 1))
      })
    }

    return lines
  }

  if (!ast) {
    return <Text style={[styles.error, { color: colors.error }]}>Invalid Expression</Text>
  }

  const lines = renderNode(ast)

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { backgroundColor: colors.background, color: colors.text }]}>{lines.join('\n')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontFamily: 'monospace',
    fontSize: 14,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
  },
})
