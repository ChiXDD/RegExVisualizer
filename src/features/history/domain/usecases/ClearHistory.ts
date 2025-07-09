import { HistoryAsyncService } from '../../data/local/HistoryAsyncService'

export async function clearHistory(): Promise<void> {
  await HistoryAsyncService.clearAll()
}
