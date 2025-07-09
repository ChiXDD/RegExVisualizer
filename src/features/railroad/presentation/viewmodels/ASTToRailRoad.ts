// src/features/railroad/presentation/viewmodels/astToRailroad.ts
import * as RD from 'railroad-diagrams'
import { RegExASTModel } from '../../../regExAST/data/models/RegExASTModel'

const { Diagram, Sequence, Choice, Optional, OneOrMore, ZeroOrMore, Terminal, NonTerminal } = RD

function nodeToBlock(node: RegExASTModel): any {
  switch (node.type) {
    case 'Alternative': {
      // aplanar sub-alternativas
      const flat: RegExASTModel[] = []
      node.children!.forEach((c) => {
        if (c.type === 'Alternative' && c.children) flat.push(...c.children)
        else flat.push(c)
      })
      // elige la rama central como baseline:
      const n = flat.length
      const baseline = Math.floor(n / 2)
      return Choice(baseline, ...flat.map(nodeToBlock))
    }

    case 'Sequence': {
      const kids = node.children!
      if (kids.every((c) => c.type === 'Literal' && c.value != null)) {
        return Terminal(kids.map((c) => c.value).join(''))
      }
      return Sequence(...kids.map(nodeToBlock))
    }

    case 'Quantifier': {
      const child = nodeToBlock(node.children![0])
      switch (node.value) {
        case '*':
          return ZeroOrMore(child)
        case '+':
          return OneOrMore(child)
        case '?':
          return Optional(child)
        default:
          return OneOrMore(child)
      }
    }

    case 'CharClass': {
      let items = node.children!
      if (items[0]?.type === 'Literal' && items[0].value === '^') items = items.slice(1)
      return Choice(0, ...items.map((c) => (c.type === 'Literal' ? Terminal(c.value!) : NonTerminal(c.value!))))
    }

    case 'Group': {
      const inner = nodeToBlock(node.children![0])
      return NonTerminal(inner)
    }

    case 'Literal':
      return Terminal(node.value!)

    default:
      if (node.children) return Sequence(...node.children.map(nodeToBlock))
      return Terminal(node.value || '')
  }
}

export function buildRailroadSVG(ast: RegExASTModel, width: number): string {
  const block = nodeToBlock(ast)
  return Diagram(block).toString().replace('<svg ', `<svg width="${width}" `)
}
