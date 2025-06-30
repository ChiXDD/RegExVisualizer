import React, { useEffect } from 'react'
import { View } from 'react-native'
import { RegExInput } from '../atoms/RegExInput'
import { ClearButton } from '../atoms/ClearButton'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { RegExMatch } from '../../domain/usecases/RegExMatch'
import { RegExModel } from '../../data/models/RegExModel'

interface Props {
  setResult: (result: RegExModel | null) => void
}

// Formulario que emplea los inputs para capturar la expresión regular, las flags y el texto a evaluar
export const RegExForm = ({ setResult }: Props) => {
  const { pattern, setPattern, flags, setFlags, testString, setTestString, reset } = useRegexGlobalStore()

  useEffect(() => {
    const matched = RegExMatch(pattern, flags, testString)
    setResult(matched)
  }, [pattern, flags, testString])

  return (
    <View>
      <RegExInput label="Regular Expression" value={pattern} onChangeText={setPattern} />
      <RegExInput label="Flags (g, i, m...)" value={flags} onChangeText={setFlags} />
      <RegExInput label="Write Here Your Text" value={testString} onChangeText={setTestString} />
      <ClearButton reset={reset} />
    </View>
  )
}
