import { HistoryAsyncService } from '../../data/local/HistoryAsyncService'
import { HistoryEntry } from '../../data/models/HistoryEntry'

export async function getHistory(): Promise<HistoryEntry[]> {
  return HistoryAsyncService.getAll()
}
