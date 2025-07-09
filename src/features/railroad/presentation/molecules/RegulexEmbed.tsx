import React, { useMemo } from 'react'
import { Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { useRegexGlobalStore } from '../../../../core/context/GlobalStore'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const RegulexEmbed = () => {
  const { pattern, flags } = useRegexGlobalStore()

  const uri = useMemo(() => {
    const re = encodeURIComponent(pattern)
    const fl = encodeURIComponent(flags)
    return `https://jex.im/regulex/#embed=false&re=${re}&flags=${fl}`
  }, [pattern, flags])

  const injectedCSS = `
    (function() {
      const style = document.createElement('style')
      style.innerHTML = \`
        body > *:not(#graphCt) { display: none !important; }
        html, body, #graphCt {
          margin: 0 !important;
          padding: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          overflow: auto !important;
          white-space: nowrap !important;
        }
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
      scrollEnabled={true}
      bounces={false}
    />
  )
}
