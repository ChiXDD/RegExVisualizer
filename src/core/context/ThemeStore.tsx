// src/core/context/ThemeStore.ts
import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  toggleTheme: () => void
  colors: {
    background: string
    buttonBackground: string
    text: string
    buttonText: string
    border: string
    infoText: string
    error: string
    exportButton: string
  }
}

const lightColors = {
  background: '#ffffff',
  buttonBackground: '#3674B5',
  text: '#000000',
  buttonText: '#ffffff',
  border: '#000000',
  infoText: 'blue',
  error: '#FF4C4C',
  exportButton: '#708A58',
}

const darkColors = {
  background: '#222831',
  buttonBackground: '#88304E',
  text: '#ffffff',
  buttonText: '#ffffff',
  border: '#ffffff',
  infoText: '#5EABD6',
  error: '#FF4C4C',
  exportButton: '#708A58',
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light',
  toggleTheme: () => {
    const current = get().theme
    set({
      theme: current === 'light' ? 'dark' : 'light',
      colors: current === 'light' ? darkColors : lightColors,
    })
  },
  colors: lightColors,
}))
