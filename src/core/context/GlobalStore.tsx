import { create } from 'zustand'
import { RegExASTModel } from '../../features/regExAST/data/models/RegExASTModel'
import { TextASTModel } from '../../features/regExAST/data/models/TextASTModel'

const DEFAULT_PATTERN = 'regex|tester|visualizer'
const DEFAULT_FLAGS = 'gi'
const DEFAULT_STRING = 'Welcome to the RegEx Visualizer & Tester. Modify the inputs below to test and visualize your own regular expression.'

interface RegexGlobalState {
  pattern: string
  flags: string
  testString: string
  text: string
  ast: RegExASTModel | null
  matchTree: TextASTModel[]
  setMatchTree: (text: TextASTModel[]) => void
  setPattern: (p: string) => void
  setFlags: (f: string) => void
  setTestString: (t: string) => void
  setAST: (ast: RegExASTModel | null) => void
  reset: () => void
}

export const useRegexGlobalStore = create<RegexGlobalState>((set) => ({
  pattern: DEFAULT_PATTERN,
  flags: DEFAULT_FLAGS,
  testString: DEFAULT_STRING,
  text: '',
  ast: null,
  matchTree: [],
  setMatchTree: (matchTree) => set({ matchTree }),
  setPattern: (pattern) => set({ pattern }),
  setFlags: (flags) => set({ flags }),
  setTestString: (testString) => set({ testString }),
  setAST: (ast) => set({ ast }),
  reset: () =>
    set({
      pattern: '',
      flags: '',
      testString: '',
      text: '',
      ast: null,
    }),
}))
