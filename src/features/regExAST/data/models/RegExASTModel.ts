// Interface del AST de la expresion regular
export interface RegExASTModel {
  type: string
  value?: string
  children?: RegExASTModel[]
}
