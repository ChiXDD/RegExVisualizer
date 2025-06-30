import { TextASTModel } from "../../data/models/TextASTModel"

/// Función que analiza un texto utilizando una expresión regular y devuelve un árbol de coincidencias
export const ParseText = (pattern: string, flags: string, text: string): TextASTModel[] => {
  const tree: TextASTModel[] = []
  try {
    const regex = new RegExp(pattern, flags)
    const matches = Array.from(text.matchAll(regex))

    matches.forEach((match, i) => {
      const children: TextASTModel[] = []
      if (match.length > 1) {
        for (let j = 1; j < match.length; j++) {
          children.push({
            label: `Group ${j}`,
            value: match[j],
          })
        }
      }
      tree.push({
        label: `Match ${i + 1}`,
        value: match[0],
        children,
      })
    })

    return tree
  } catch (e) {
    return []
  }
}
