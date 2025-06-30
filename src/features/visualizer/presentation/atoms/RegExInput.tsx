import React from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

// Los imputs que se utilizan en la aplicacion
export const RegExInput = ({ label, value, onChangeText }: any) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} autoCorrect={false} multiline/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    fontSize: 20,
  },
})
