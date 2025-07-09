import { create } from 'zustand'
import { RegExASTModel } from '../../features/regExAST/data/models/RegExASTModel'

interface RegexExample {
  label: string
  pattern: string
  flags: string
  testString: string
}

interface RegexGlobalState {
  pattern: string
  flags: string
  testString: string
  ast: RegExASTModel | null
  examples: RegexExample[]
  setPattern: (p: string) => void
  setFlags: (f: string) => void
  setTestString: (t: string) => void
  setAST: (ast: RegExASTModel | null) => void
  reset: () => void
}

export const useRegexGlobalStore = create<RegexGlobalState>((set) => ({
  pattern: 'regex|tester|visualizer',
  flags: 'gi',
  testString: 'Welcome to the RegEx Visualizer & Tester. Modify the inputs below to test and visualize your own regular expression.',
  ast: null,
  examples: [
    {
      label: 'Example 1',
      pattern: 'regex|tester|visualizer',
      flags: 'gi',
      testString: 'Welcome to the RegEx Visualizer & Tester. Modify the inputs below to test and visualize your own regular expression.',
    },
    {
      label: 'Example 2',
      pattern: '^(?!.*\\b(\\w+)\\b.*\\b\\1\\b)(?=.*[A-Z].*[A-Z])(?=.*\\d{2,})(?=.*[!@#\\$%\\^&\\*\\(\\)\\-_=\\+\\[\\]\\{\\};:\'",.<>\\/\\?\\\\|`~]).{12,64}(?<!\\s)$',
      flags: 'g',
      testString: 'MyP@ssword2024!SecureKey',
    },
    {
      label: 'Example 3',
      pattern: '^username:(?=[a-zA-Z0-9]{5,12}\\b)[a-zA-Z0-9]{5,12}\\s\\|\\semail:(?=.{6,254}\\b)([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})\\s\\|\\spassword:(?=(?!.*\\b(\\w+)\\b.*\\b\\1\\b))(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*\\(\\)_\\+\\-=\\[\\]\\{\\};:\'"\\\\|,.<>\\/\\?`~]).{12,64}\\s\\|\\sdate:(?:(?:19|20)\\d{2})-(?:(?:0[1-9]|1[0-2]))-(?:(?:0[1-9]|1\\d|2\\d|3[01]))$',
      flags: 'g',
      testString: 'username:JuanP98 | email:juan.perez98@mail.com | password:Xy!2rT#q9wLZ | date:2024-12-31',
    },
  ],
  setPattern: (pattern) => set({ pattern }),
  setFlags: (flags) => set({ flags }),
  setTestString: (testString) => set({ testString }),
  setAST: (ast) => set({ ast }),
  reset: () =>
    set({
      pattern: '',
      flags: '',
      testString: '',
      ast: null,
    }),
}))
