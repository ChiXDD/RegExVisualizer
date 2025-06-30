import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TextASTModel } from '../../data/models/TextASTModel'

interface Props {
  matchTree: TextASTModel[]
}

export const TextTree = ({ matchTree }: Props) => {
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
  return <Text style={styles.text}>{matchTree.flatMap((node) => renderNode(node)).join('\n')}</Text>
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
