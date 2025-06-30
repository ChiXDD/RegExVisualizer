import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TextASTModel } from '../../data/models/TextASTModel'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

// Componente que muestra el árbol de coincidencias del texto analizado
export const TextTree = () => {
  const matchTree = useRegexGlobalStore((state) => state.matchTree)

  const renderNode = (node: TextASTModel, depth: number = 0): string[] => {
    const indent = ' '.repeat(depth * 2)
    const lines: string[] = []

    lines.push(`${indent}└─ ${node.label}: ${node.value}`)
    if (node.children) {
      node.children.forEach((child) => {
        lines.push(...renderNode(child, depth + 1))
      })
    }
    return lines
  }

  if (!matchTree?.length) {
    return <Text style={styles.text}>No match tree available.</Text>
  }

  const lines = matchTree.flatMap((node) => renderNode(node))

  return <Text style={styles.text}>{lines.join('\n')}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'monospace',
    fontSize: 14,
    backgroundColor: '#f1f2f6',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
})
