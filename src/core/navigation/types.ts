// Tipado de la navegación en la aplicación
export type StackParamList = {
  Visualizer: undefined
  Info: undefined
  AST: { pattern: string; flags: string; text: string }
  Railroad: { pattern: string }
}
