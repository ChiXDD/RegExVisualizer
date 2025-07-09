import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GoBackButton from '../atoms/GoBackButton'
import { useThemeStore } from '../../../../core/context/ThemeStore'

// Pantalla que muestra información sobre los tokens de expresiones regulares
export default function InfoScreen() {
  const navigation = useNavigation()
  const { colors } = useThemeStore()
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View>
        <GoBackButton />
      </View>
      <ScrollView>
        <View>
          <Text style={[styles.title, { color: colors.text }]}> Basic Tokens</Text>
          <Text style={[styles.item, { color: colors.text }]}>. — Any character except newline</Text>
          <Text style={[styles.item, { color: colors.text }]}>\w — Word character: letters, digits, underscore</Text>
          <Text style={[styles.item, { color: colors.text }]}>\W — Non-word character</Text>
          <Text style={[styles.item, { color: colors.text }]}>\d — Digit (0–9)</Text>
          <Text style={[styles.item, { color: colors.text }]}>\D — Non-digit</Text>
          <Text style={[styles.item, { color: colors.text }]}>\s — Whitespace</Text>
          <Text style={[styles.item, { color: colors.text }]}>\S — Non-whitespace</Text>
          <Text style={[styles.item, { color: colors.text }]}>\t — Tab character</Text>
          <Text style={[styles.item, { color: colors.text }]}>\n — Newline character</Text>
          <Text style={[styles.item, { color: colors.text }]}>\r — Carriage return</Text>
          <Text style={[styles.item, { color: colors.text }]}>\0 - Null character</Text>

          <Text style={[styles.title, { color: colors.text }]}> Quantifiers</Text>
          <Text style={[styles.item, { color: colors.text }]}>* — 0 or more times</Text>
          <Text style={[styles.item, { color: colors.text }]}>+ — 1 or more times</Text>
          <Text style={[styles.item, { color: colors.text }]}>? — 0 or 1 time (optional)</Text>
          <Text style={[styles.item, { color: colors.text }]}>{'{n}'} — Exactly n times</Text>
          <Text style={[styles.item, { color: colors.text }]}>{'{n,}'} — n or more times</Text>
          <Text style={[styles.item, { color: colors.text }]}>{'{n,m}'} — Between n and m times</Text>

          <Text style={[styles.title, { color: colors.text }]}> Character Sets and Groups</Text>
          <Text style={[styles.item, { color: colors.text }]}>[abc] — Any of a, b, or c</Text>
          <Text style={[styles.item, { color: colors.text }]}>[^abc] — Not a, b, or c</Text>
          <Text style={[styles.item, { color: colors.text }]}>[a-z] — Lowercase a to z</Text>
          <Text style={[styles.item, { color: colors.text }]}>[A-Z] — Uppercase A to Z</Text>
          <Text style={[styles.item, { color: colors.text }]}>[a-zA-Z] — Character a to z or A to Z</Text>
          <Text style={[styles.item, { color: colors.text }]}>[0-9] — Digits 0–9</Text>
          <Text style={[styles.item, { color: colors.text }]}>(abc) — Capturing group</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?:abc) — Non-capturing group</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?&lt;name&gt;abc) — Named capturing group</Text>
          <Text style={[styles.item, { color: colors.text }]}>[[:alnum:]] — Letters and Digits</Text>
          <Text style={[styles.item, { color: colors.text }]}>[[:alpha:]] — Letters</Text>
          <Text style={[styles.item, { color: colors.text }]}>[[:ascii:]] — ASCII codes</Text>
          <Text style={[styles.item, { color: colors.text }]}>[[:blank:]] — Space or tab only</Text>
          <Text style={[styles.item, { color: colors.text }]}>[[:&lt;:]] — Start of word</Text>
          <Text style={[styles.item, { color: colors.text }]}>[[:&gt;:]] — End of word</Text>

          <Text style={[styles.title, { color: colors.text }]}> Anchors and Boundaries</Text>
          <Text style={[styles.item, { color: colors.text }]}>^ — Start of line/string</Text>
          <Text style={[styles.item, { color: colors.text }]}>$ — End of line/string</Text>
          <Text style={[styles.item, { color: colors.text }]}>\b — Word boundary</Text>
          <Text style={[styles.item, { color: colors.text }]}>\B — Non-word boundary</Text>
          <Text style={[styles.item, { color: colors.text }]}>\A — Start of string</Text>
          <Text style={[styles.item, { color: colors.text }]}>\Z — End of string</Text>

          <Text style={[styles.title, { color: colors.text }]}> Alternation and Lookaround</Text>
          <Text style={[styles.item, { color: colors.text }]}>a|b — a or b</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?=...) — Positive lookahead</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?!...) — Negative lookahead</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?&lt;=...) — Positive lookbehind</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?&lt;!...) — Negative lookbehind</Text>

          <Text style={[styles.title, { color: colors.text }]}> Escape Sequences</Text>
          <Text style={[styles.item, { color: colors.text }]}>\\\ — Escape a special character</Text>
          <Text style={[styles.item, { color: colors.text }]}>\x — Hex character</Text>
          <Text style={[styles.item, { color: colors.text }]}>\u — Unicode character</Text>
          <Text style={[styles.item, { color: colors.text }]}>\c — Control character (e.g. Ctrl + V)</Text>

          <Text style={[styles.title, { color: colors.text }]}> Flags</Text>
          <Text style={[styles.item, { color: colors.text }]}>g — Global (match all)</Text>
          <Text style={[styles.item, { color: colors.text }]}>i — Case-insensitive</Text>
          <Text style={[styles.item, { color: colors.text }]}>m — Multiline mode</Text>
          <Text style={[styles.item, { color: colors.text }]}>s — Dot matches newline</Text>
          <Text style={[styles.item, { color: colors.text }]}>u — Unicode mode</Text>
          <Text style={[styles.item, { color: colors.text }]}>y — Sticky match</Text>

          <Text style={[styles.title, { color: colors.text }]}>Special Constructs</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?#...) — Inline comment</Text>
          <Text style={[styles.item, { color: colors.text }]}>(?(condition)yes|no) — Conditional match</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    marginVertical: 2,
  },
})
