import { RegExModel } from "../../data/models/RegExModel"

export const RegExMatch = (pattern: string, flags: string, testString: string): RegExModel => {
  try {
    const regex = new RegExp(pattern, flags)
    return {
      pattern,
      flags,
      testString,
      matches: testString.match(regex),
    }
  } catch (error) {
    return {
      pattern,
      flags,
      testString,
      matches: null,
    }
  }
}
