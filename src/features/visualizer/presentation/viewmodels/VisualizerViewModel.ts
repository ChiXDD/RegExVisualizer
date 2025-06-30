import { useState } from 'react'
import { RegExModel } from '../../data/models/RegExModel'
import { RegExMatch } from '../../domain/usecases/RegExMatch'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

export const VisualizerViewModel = () => {
  const { pattern, setPattern, flags, setFlags, testString, setTestString, reset: resetGlobal } = useRegexGlobalStore()

  const [result, setResult] = useState<RegExModel | null>(null)

  const updateMatch = () => {
    const matched = RegExMatch(pattern, flags, testString)
    setResult(matched)
  }

  const reset = () => {
    resetGlobal() // 🟢 esto reinicia los valores al default global
    setResult(null)
  }

  return {
    pattern,
    setPattern,
    flags,
    setFlags,
    testString,
    setTestString,
    result,
    updateMatch,
    reset,
  }
}
