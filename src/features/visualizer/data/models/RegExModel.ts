export interface RegExModel {
  pattern: string
  flags: string
  testString: string
  matches: RegExpMatchArray[] | RegExpMatchArray | null
}
