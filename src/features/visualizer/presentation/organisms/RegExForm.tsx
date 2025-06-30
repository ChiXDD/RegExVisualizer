import React, { useEffect } from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { RegExInput } from '../atoms/RegExInput'
import { ClearButton } from '../atoms/ClearButton'

interface Props {
  pattern: string
  flags: string
  testString: string
  setPattern: (v: string) => void
  setFlags: (v: string) => void
  setTestString: (v: string) => void
  updateMatch: () => void
  reset: () => void
}

export const RegExForm = ({ pattern, flags, testString, setPattern, setFlags, setTestString, updateMatch, reset }: Props) => {
  useEffect(() => {
    updateMatch()
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
