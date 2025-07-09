import AsyncStorage from '@react-native-async-storage/async-storage'
import { HistoryEntry } from '../models/HistoryEntry'

const STORAGE_KEY = '@history_entries'

export class HistoryAsyncService {
  static async getAll(): Promise<HistoryEntry[]> {
    const raw = await AsyncStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    try {
      return JSON.parse(raw) as HistoryEntry[]
    } catch {
      return []
    }
  }

  static async add(entry: Omit<HistoryEntry, 'date'>): Promise<void> {
    const list = await this.getAll()
    const newEntry: HistoryEntry = { ...entry, date: Date.now() }
    list.unshift(newEntry)
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  }

  static async clearAll(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEY)
  }
}
