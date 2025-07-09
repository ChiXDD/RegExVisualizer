// src/features/railroad/presentation/molecules/RailroadWebDiagram.tsx
import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import * as RD from 'railroad-diagrams'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

const { width: screenWidth } = Dimensions.get('window')

// CSS oficial recortado
const RAILROAD_CSS = `
.railroad-diagram { overflow: visible; }
.railroad-diagram path,
.railroad-diagram rect,
.railroad-diagram circle { stroke: #000; fill: none; stroke-width:3px; }
.railroad-diagram rect { fill:#c6e5ff; }
.railroad-diagram text { font-family:"Trebuchet MS",Helvetica; font-size:14px; text-anchor:middle; }
`

export const RailroadWebDiagram = () => {
  const { pattern, flags } = useRegexGlobalStore()

  const html = useMemo(() => {
    // 1) PARTES: UNA alternativa por palabra
    const parts = pattern.split('|').map((sub) =>
      // un solo óvalo con "regex", "tester" o "visualizer"
      RD.Terminal(sub)
    )

    // 2) Choice usando la rama del medio como línea base
    const baseline = Math.floor(parts.length / 2)
    const diagram = parts.length > 1 ? RD.Diagram(RD.Choice(baseline, ...parts)) : RD.Diagram(parts[0])

    // 3) Inyectamos el width y devolvemos el SVG
    const rawSvg = diagram.toString().replace('<svg ', `<svg width="${screenWidth}" `)

    return `
      <html><head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <style>${RAILROAD_CSS}</style>
      </head><body>${rawSvg}</body></html>
    `
  }, [pattern, flags])

  return <WebView originWhitelist={['*']} source={{ html }} style={{ width: screenWidth, height: 200, backgroundColor: 'transparent' }} scrollEnabled={false} />
}
