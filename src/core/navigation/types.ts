// Tipado de la navegación en la aplicación
export type StackParamList = {
  Home: undefined
  Visualizer: undefined
  History: undefined
  Info: undefined
  AST: { pattern: string; flags: string; text: string }
  Railroad: { pattern: string }
}
