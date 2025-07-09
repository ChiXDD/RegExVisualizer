import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'
import { useThemeStore } from '../../../../core/context/ThemeStore'

export const ExampleButton = () => {
  const { examples, setPattern, setFlags, setTestString, setAST } = useRegexGlobalStore()
  const { colors } = useThemeStore()

  const handleSelect = (pattern: string, flags: string, testString: string) => {
    setPattern(pattern)
    setFlags(flags)
    setTestString(testString)
    setAST(null)
  }

  return (
    <View style={styles.container}>
      {examples.map((ex, i) => (
        <TouchableOpacity key={i} onPress={() => handleSelect(ex.pattern, ex.flags, ex.testString)} style={[styles.button, { backgroundColor: colors.buttonBackground }]}>
          <Text style={[styles.text, { color: colors.buttonText }]}>{ex.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5,
    justifyContent: 'center',

  },
  button: {
    padding: 12,
    borderRadius: 8,
    width: '32.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
  },
})
