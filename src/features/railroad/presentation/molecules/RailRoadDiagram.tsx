// src/features/railroad/presentation/molecules/RailroadWebDiagram.tsx
import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { ParseRegEx } from '../../../regExAST/domain/usecases/ParseRegEx'
import { buildRailroadSVG } from '../viewmodels/ASTToRailRoad'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

const { width: screenWidth } = Dimensions.get('window')

// CSS oficial recortado
const CSS = `
.railroad-diagram { overflow: visible; }
.railroad-diagram path,
.railroad-diagram rect,
.railroad-diagram circle { stroke: black; fill: none; stroke-width:3px; }
.railroad-diagram rect { fill:#e8f8e5; }
.railroad-diagram text { font-family:"Trebuchet MS",Helvetica; font-size:14px; text-anchor:middle; }
`

export const RailroadWebDiagram = () => {
  const { pattern, flags } = useRegexGlobalStore()

  const html = useMemo(() => {
    const ast = ParseRegEx(pattern, flags)
    if (!ast) return `<html><body>Invalid Regex</body></html>`

    const raw = buildRailroadSVG(ast, screenWidth)
    return `
      <html><head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <style>${CSS}</style>
      </head><body>${raw}</body></html>
    `
  }, [pattern, flags])

  return <WebView originWhitelist={['*']} source={{ html }} style={{ width: screenWidth, height: 200, backgroundColor: 'transparent' }} scrollEnabled={false} />
}
