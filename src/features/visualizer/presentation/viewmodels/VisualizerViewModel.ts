import { useState } from 'react'
import { RegExModel } from '../../data/models/RegExModel'
import { RegExMatch } from '../../domain/usecases/RegExMatch'

const DEFAULT_PATTERN = 'regex|tester|visualizer'
const DEFAULT_FLAGS = 'gi'
const DEFAULT_STRING = 'Welcome to the RegEx Visualizer & Tester. Modify the inputs below to test and visualize your own regular expression.'

export const VisualizerViewModel = () => {
  const [pattern, setPattern] = useState(DEFAULT_PATTERN)
  const [flags, setFlags] = useState(DEFAULT_FLAGS)
  const [testString, setTestString] = useState(DEFAULT_STRING)
  const [result, setResult] = useState<RegExModel | null>(null)

  const updateMatch = () => {
    const matched = RegExMatch(pattern, flags, testString)
    setResult(matched)
  }

  const reset = () => {
    setPattern('')
    setFlags('')
    setTestString('')
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
