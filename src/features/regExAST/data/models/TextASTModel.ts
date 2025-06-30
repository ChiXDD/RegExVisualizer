// Modelo del AST del texto
export interface TextASTModel {
  label: string
  value: string
  children?: TextASTModel[]
}
