import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useThemeStore } from '../../../../core/context/ThemeStore'

export const ThemeToggleButton = () => {
  const { theme, toggleTheme, colors } = useThemeStore()

  return (
    <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: colors.buttonBackground }]}>
      <Text style={[styles.text, { color: colors.buttonText }]}>{theme === 'light' ? '🌙' : '☀️'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  text: {
    fontSize: 18,
  },
})
