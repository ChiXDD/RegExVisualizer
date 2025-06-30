import * as FileSystem from 'expo-file-system'

//Se exporta el AST como un archivo JSON
//Se utiliza FileSystem de Expo para manejar archivos en el dispositivo
export const ExportJSON = async (ast: object) => {
  try {
    const fileName = `regex-ast-${Date.now()}.json`
    const fileUri = FileSystem.documentDirectory + fileName
    const json = JSON.stringify(ast, null, 2)

    await FileSystem.writeAsStringAsync(fileUri, json, {
      encoding: FileSystem.EncodingType.UTF8,
    })

    console.log(`JSON saved in: ${fileUri}`)
    alert('AST exported as JSON file successfully!')
  } catch (error) {
    console.error('Error exporting the AST', error)
    alert('Error exporting the AST')
  }
}
