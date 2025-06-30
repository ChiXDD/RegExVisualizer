import { useRegexGlobalStore } from "../../../../core/context/GlobalStore"

// Tipos de tokens que se pueden generar en el diagrama de ferrocarril
export interface RailroadToken {
  type: 'literal' | 'operator' | 'group' | 'branch'
  value: string
}

// Hook que genera el diagrama de ferrocarril a partir del patrón de expresión regular
export const useRailroadViewModel = (): RailroadToken[] => {
  const pattern = useRegexGlobalStore((state) => state.pattern)

  const tokens: RailroadToken[] = []
  let current = ''
  let inGroup = false

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    // Si el caracter es un ( se inicia un grupo
    if (char === '(') {
      if (current) {
        tokens.push({ type: 'literal', value: current })
        current = ''
      }
      inGroup = true
      continue
    }

    // Si el caracter es un ) se cierra el grupo
    if (char === ')') {
      if (current) {
        tokens.push({ type: 'group', value: current })
        current = ''
      }
      inGroup = false
      continue
    }

    // Si el caracter es una barra vertical | se crea una bifurcación
    if (char === '|') {
      if (current) {
        tokens.push({ type: inGroup ? 'group' : 'literal', value: current })
        current = ''
      }
      tokens.push({ type: 'branch', value: '|' })
      continue
    }

    // Si el caracter es un operador especial (*, +, ?, [, ], {, }) se trata como un operador y se agrega al token correspondiente
    if ('*+?[]{}'.includes(char)) {
      if (current) {
        tokens.push({ type: inGroup ? 'group' : 'literal', value: current })
        current = ''
      }
      tokens.push({ type: 'operator', value: char })
    } else {
      current += char
    }
  }

  // Si hay un token pendiente al final del recorrido, se agrega
  if (current) {
    tokens.push({ type: inGroup ? 'group' : 'literal', value: current })
  }

  return tokens
}
