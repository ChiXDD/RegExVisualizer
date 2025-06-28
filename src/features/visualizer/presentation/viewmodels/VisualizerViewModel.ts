import { useState } from 'react'
import { RegExModel } from '../../data/models/RegExModel'
import { RegExMatch } from '../../domain/usecases/RegExMatch'

export const VisualizerViweModel = () => {
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState('')
  const [testString, setTestString] = useState('')
  const [result, setResult] = useState<RegExModel | null>(null)

  const updateMatch = () => {
    const matched = RegExMatch(pattern, flags, testString)
    setResult(matched)
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
  }
}