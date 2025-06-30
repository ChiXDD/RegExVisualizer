import { RegExASTModel } from '../../data/models/RegExASTModel'
import { parse } from 'regexp-tree'

export const ParseRegEx = (pattern: string, flags: string): RegExASTModel | null => {
  try {
    const ast = parse(`/${pattern}/${flags}`)
    return SimplifiedAST(ast.body)
  } catch (e) {
    return null
  }
}

const SimplifiedAST = (node: any): RegExASTModel => {
  const children: RegExASTModel[] = []

  for (const key in node) {
    const value = node[key]

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item && typeof item === 'object' && item.type) {
          children.push(SimplifiedAST(item))
        }
      })
    } else if (value && typeof value === 'object' && value.type) {
      children.push(SimplifiedAST(value))
    }
  }

  return {
    type: node.type,
    value: node.raw || node.value || node.name || undefined,
    children: children.length ? children : undefined,
  }
}
