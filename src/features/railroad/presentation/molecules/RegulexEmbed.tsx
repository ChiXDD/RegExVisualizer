// src/features/railroad/presentation/molecules/RegulexEmbed.tsx
import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const RegulexEmbed = () => {
  const { pattern, flags } = useRegexGlobalStore()

  // URL con embed=false para que exista #graphCt
  const uri = useMemo(() => {
    const re = encodeURIComponent(pattern)
    const fl = encodeURIComponent(flags)
    return `https://jex.im/regulex/#embed=false&re=${re}&flags=${fl}`
  }, [pattern, flags])

  // Inyectamos CSS que:
  // 1) Oculta todo menos el div#graphCt
  // 2) Hace que #graphCt y el SVG ocupen 100% del viewport
  // 3) Habilita overflow con white-space nowrap para scroll horizontal
  const injectedCSS = `
    (function() {
      const style = document.createElement('style')
      style.innerHTML = \`
        /* oculta todo menos el propio diagrama */
        body > *:not(#graphCt) { display: none !important; }
        /* full-screen para el contenedor */
        html, body, #graphCt {
          margin: 0 !important;
          padding: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          overflow: auto !important;
          white-space: nowrap !important;
        }
        /* el SVG se deja en su tamaño natural, permitiendo scroll */
        #graphCt svg {
          display: inline-block;
          width: auto !important;
          height: 100% !important;
        }
      \`
      document.head.appendChild(style)
    })();
    true;
  `

  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri }}
      style={{ flex: 1, backgroundColor: 'transparent' }}
      injectedJavaScript={injectedCSS}
      javaScriptEnabled
      domStorageEnabled
      startInLoadingState
      // permitimos scroll dentro del WebView
      scrollEnabled={true}
      bounces={false}
    />
  )
}
