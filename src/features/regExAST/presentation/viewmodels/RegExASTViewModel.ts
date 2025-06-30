import { useEffect, useState } from 'react'
import { RegExASTModel } from '../../data/models/RegExASTModel'
import { ParseRegEx } from '../../domain/usecases/ParseRegEx'
import { TextASTModel } from '../../data/models/TextASTModel'
import { ParseText} from '../../domain/usecases/ParseText'

// ViewModel para manejar el estado del AST de la expresión regular y el árbol de coincidencias del texto
export const RegExASTViewModel = (pattern: string, flags: string, text: string) => {
  const [ast, setAst] = useState<RegExASTModel | null>(null)
  const [matchTree, setMatchTree] = useState<TextASTModel[]>([])

  useEffect(() => {
    setAst(ParseRegEx(pattern, flags))
    setMatchTree(ParseText(pattern, flags, text))
  }, [pattern, flags, text])

  return { ast, matchTree }
}
