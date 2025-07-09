import React, { useEffect } from 'react'
import { View } from 'react-native'
import { RegExInput } from '../atoms/RegExInput'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { RegExMatch } from '../../domain/usecases/RegExMatch'
import { RegExModel } from '../../data/models/RegExModel'

interface Props {
  setResult: (result: RegExModel | null) => void
}

export const RegExForm = ({ setResult }: Props) => {
  const { pattern, setPattern, flags, setFlags, testString, setTestString } = useRegexGlobalStore()

  useEffect(() => {
    const matched = RegExMatch(pattern, flags, testString)
    setResult(matched)
  }, [pattern, flags, testString, setResult])

  return (
    <View>
      <RegExInput label="Regular Expression" value={pattern} onChangeText={setPattern} />
      <RegExInput label="Flags (g, i, m...)" value={flags} onChangeText={setFlags} />
      <RegExInput label="Write Here Your Text" value={testString} onChangeText={setTestString} multiline />
    </View>
  )
}
