import { useState } from 'react'
import { RegExModel } from '../../data/models/RegExModel'
import { RegExMatch } from '../../domain/usecases/RegExMatch'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

// ViewModel para la pantalla del visualizador de expresiones regulares
// Este ViewModel maneja el estado de la expresión regular, las flags, el texto a evaluar y los resultados de las coincidencias
export const VisualizerViewModel = () => {
  const { pattern, setPattern, flags, setFlags, testString, setTestString, reset: resetGlobal } = useRegexGlobalStore()

  const [result, setResult] = useState<RegExModel | null>(null)

  // Actualiza el resultado de la coincidencia
  const updateMatch = () => {
    const matched = RegExMatch(pattern, flags, testString)
    setResult(matched)
  }

  // Resetea el estado global y el resultado de las coincidencias
  const reset = () => {
    resetGlobal()
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
