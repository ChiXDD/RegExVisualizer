import React from 'react'
import { View, Text } from 'react-native'

export const MatchResultPreview = ({ result }: any) => (
  <View>
    <Text>Resultado:</Text>
    {result?.matches ? result.matches.map((match: string, i: number) => <Text key={i}>✓ {match}</Text>) : <Text>No hay coincidencias o la expresión es inválida</Text>}
  </View>
)