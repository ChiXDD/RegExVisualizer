import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { RegExASTModel } from '../../data/models/RegExASTModel'

interface Props {
  ast: RegExASTModel | null
}

export const RegExTree = ({ ast }: Props) => {
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
    return <Text style={styles.error}>Invalid Expression</Text>
  }

  const lines = renderNode(ast)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{lines.join('\n')}</Text>
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
    backgroundColor: '#f1f2f6',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
})
