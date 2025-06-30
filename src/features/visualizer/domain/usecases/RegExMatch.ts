import { RegExModel } from "../../data/models/RegExModel"

// Función que realiza una coincidencia de una expresión regular con un texto y devuelve el resultado
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
