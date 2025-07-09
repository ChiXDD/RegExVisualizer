// src/features/railroad/presentation/molecules/RegulexDiagram.tsx
import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

const { width: screenWidth } = Dimensions.get('window')

export const RegulexDiagram = () => {
  const { pattern, flags } = useRegexGlobalStore()

  const html = useMemo(() => {
    const patEsc = JSON.stringify(pattern)
    const flagEsc = JSON.stringify(flags)
    const w = screenWidth

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <style>body,html{margin:0;padding:0;}#diagram{padding:10px;}</style>
      </head>
      <body>
        <div id="diagram"></div>

        <!-- Cargamos el UMD minificado de Regulex -->
        <script src="https://unpkg.com/regulex@0.0.5/dist/regulex.min.js"></script>
        <script>
          (function(){
            // El bundle UMD expone "regulex" en window
            const lib = window.regulex;
            const container = document.getElementById('diagram');
            if (!lib) {
              container.innerHTML = '<p style="color:red">Error: regulex no cargado</p>';
              return;
            }

            try {
              // Parsear y visualizar
              const ast   = lib.parse(${patEsc});
              const paper = lib.Raphael(container, ${w}, 200);
              lib.visualize(ast, ${flagEsc}, paper);
            } catch (err) {
              container.innerHTML = '<p style="color:red">Expresión inválida: ' + err.message + '</p>';
            }
          })();
        </script>
      </body>
      </html>
    `
  }, [pattern, flags])

  return <WebView originWhitelist={['*']} source={{ html }} style={{ width: screenWidth, height: 240 }} scrollEnabled={false} />
}
