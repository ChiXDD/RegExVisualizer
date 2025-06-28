import React from 'react'
import { TextInput, View, Text } from 'react-native'

export const RegExInput = ({ label, value, onChangeText }: any) => (
  <View style={{ marginBottom: 10 }}>
    <Text>{label}</Text>
    <TextInput style={{ borderWidth: 1, padding: 8, borderRadius: 5 }} value={value} onChangeText={onChangeText} />
  </View>
)
