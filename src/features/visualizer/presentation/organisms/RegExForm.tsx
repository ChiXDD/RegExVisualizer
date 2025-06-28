import React, { useEffect } from 'react'
import { RegExInput } from '../atoms/RegExInput'
import { View } from 'react-native'

export const RegexForm = ({ pattern, flags, testString, setPattern, setFlags, setTestString, updateMatch }: any) => {
  useEffect(() => {
    updateMatch()
  }, [pattern, flags, testString])

  return (
    <View>
      <RegExInput label="Expresión regular" value={pattern} onChangeText={setPattern} />
      <RegExInput label="Flags (g, i, m...)" value={flags} onChangeText={setFlags}/>
      <RegExInput label="Texto a probar" value={testString} onChangeText={setTestString} />
    </View>
  )
}
