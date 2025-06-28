import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GoBackButton from '../atoms/GoBackButton'

export default function DetailsScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <GoBackButton />
      </View>
      <ScrollView>
        <View>
          <Text style={styles.title}> Basic Tokens</Text>
          <Text style={styles.item}>. — Any character except newline</Text>
          <Text style={styles.item}>\w — Word character: letters, digits, underscore</Text>
          <Text style={styles.item}>\W — Non-word character</Text>
          <Text style={styles.item}>\d — Digit (0–9)</Text>
          <Text style={styles.item}>\D — Non-digit</Text>
          <Text style={styles.item}>\s — Whitespace</Text>
          <Text style={styles.item}>\S — Non-whitespace</Text>
          <Text style={styles.item}>\t — Tab character</Text>
          <Text style={styles.item}>\n — Newline character</Text>
          <Text style={styles.item}>\r — Carriage return</Text>
          <Text style={styles.item}>\0 - Null character</Text>

          <Text style={styles.title}> Quantifiers</Text>
          <Text style={styles.item}>* — 0 or more times</Text>
          <Text style={styles.item}>+ — 1 or more times</Text>
          <Text style={styles.item}>? — 0 or 1 time (optional)</Text>
          <Text style={styles.item}>{'{n}'} — Exactly n times</Text>
          <Text style={styles.item}>{'{n,}'} — n or more times</Text>
          <Text style={styles.item}>{'{n,m}'} — Between n and m times</Text>

          <Text style={styles.title}> Character Sets and Groups</Text>
          <Text style={styles.item}>[abc] — Any of a, b, or c</Text>
          <Text style={styles.item}>[^abc] — Not a, b, or c</Text>
          <Text style={styles.item}>[a-z] — Lowercase a to z</Text>
          <Text style={styles.item}>[A-Z] — Uppercase A to Z</Text>
          <Text style={styles.item}>[a-zA-Z] — Character a to z or A to Z</Text>
          <Text style={styles.item}>[0-9] — Digits 0–9</Text>
          <Text style={styles.item}>(abc) — Capturing group</Text>
          <Text style={styles.item}>(?:abc) — Non-capturing group</Text>
          <Text style={styles.item}>(?&lt;name&gt;abc) — Named capturing group</Text>
          <Text style={styles.item}>[[:alnum:]] — Letters and Digits</Text>
          <Text style={styles.item}>[[:alpha:]] — Letters</Text>
          <Text style={styles.item}>[[:ascii:]] — ASCII codes</Text>
          <Text style={styles.item}>[[:blank:]] — Space or tab only</Text>
          <Text style={styles.item}>[[:&lt;:]] — Start of word</Text>
          <Text style={styles.item}>[[:&gt;:]] — End of word</Text>

          <Text style={styles.title}> Anchors and Boundaries</Text>
          <Text style={styles.item}>^ — Start of line/string</Text>
          <Text style={styles.item}>$ — End of line/string</Text>
          <Text style={styles.item}>\b — Word boundary</Text>
          <Text style={styles.item}>\B — Non-word boundary</Text>
          <Text style={styles.item}>\A — Start of string</Text>
          <Text style={styles.item}>\Z — End of string</Text>

          <Text style={styles.title}> Alternation and Lookaround</Text>
          <Text style={styles.item}>a|b — a or b</Text>
          <Text style={styles.item}>(?=...) — Positive lookahead</Text>
          <Text style={styles.item}>(?!...) — Negative lookahead</Text>
          <Text style={styles.item}>(?&lt;=...) — Positive lookbehind</Text>
          <Text style={styles.item}>(?&lt;!...) — Negative lookbehind</Text>

          <Text style={styles.title}> Escape Sequences</Text>
          <Text style={styles.item}>\\\ — Escape a special character</Text>
          <Text style={styles.item}>\x — Hex character</Text>
          <Text style={styles.item}>\u — Unicode character</Text>
          <Text style={styles.item}>\c — Control character (e.g. Ctrl + V)</Text>

          <Text style={styles.title}> Flags</Text>
          <Text style={styles.item}>g — Global (match all)</Text>
          <Text style={styles.item}>i — Case-insensitive</Text>
          <Text style={styles.item}>m — Multiline mode</Text>
          <Text style={styles.item}>s — Dot matches newline</Text>
          <Text style={styles.item}>u — Unicode mode</Text>
          <Text style={styles.item}>y — Sticky match</Text>

          <Text style={styles.title}>Special Constructs</Text>
          <Text style={styles.item}>(?#...) — Inline comment</Text>
          <Text style={styles.item}>(?(condition)yes|no) — Conditional match</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 55,
    marginBottom: 20,
    flex: 1,
  },
  title: {
    color: '#ooo',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  item: {
    color: '#ooo',
    fontSize: 16,
    marginVertical: 2,
  },
  token: {
    color: '#ooo',
  },
})
