// Modelo de datos de la expresión regular para la visualización en la aplicación
export interface RegExModel {
  pattern: string
  flags: string
  testString: string
  matches: RegExpMatchArray[] | RegExpMatchArray | null
}
