import { useRegexGlobalStore } from "../../../../core/context/GlobalStore"

export interface RailroadToken {
  type: 'literal' | 'operator' | 'group' | 'branch'
  value: string
}

export const useRailroadViewModel = (): RailroadToken[] => {
  const pattern = useRegexGlobalStore((state) => state.pattern)

  const tokens: RailroadToken[] = []
  let current = ''
  let inGroup = false

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (char === '(') {
      if (current) {
        tokens.push({ type: 'literal', value: current })
        current = ''
      }
      inGroup = true
      continue
    }

    if (char === ')') {
      if (current) {
        tokens.push({ type: 'group', value: current })
        current = ''
      }
      inGroup = false
      continue
    }

    if (char === '|') {
      if (current) {
        tokens.push({ type: inGroup ? 'group' : 'literal', value: current })
        current = ''
      }
      tokens.push({ type: 'branch', value: '|' })
      continue
    }

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

  if (current) {
    tokens.push({ type: inGroup ? 'group' : 'literal', value: current })
  }

  return tokens
}
