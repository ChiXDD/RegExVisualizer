import { HistoryAsyncService } from '../../data/local/HistoryAsyncService'

export async function addHistory(pattern: string, flags: string, testString: string): Promise<void> {
  await HistoryAsyncService.add({ pattern, flags, testString })
}
