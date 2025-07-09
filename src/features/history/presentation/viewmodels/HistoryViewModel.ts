import { useState, useEffect, useCallback } from 'react'
import { getHistory } from '../../domain/usecases/GetHistory'
import { addHistory } from '../../domain/usecases/AddHistory'
import { clearHistory } from '../../domain/usecases/ClearHistory'
import { HistoryEntry } from '../../data/models/HistoryEntry'

export function useHistoryViewModel() {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const list = await getHistory()
      setHistory(list)
    } finally {
      setLoading(false)
    }
  }, [])

  const add = useCallback(
    async (entry: Omit<HistoryEntry, 'date'>) => {
      await addHistory(entry.pattern, entry.flags, entry.testString)
      await load()
    },
    [load]
  )

  const clear = useCallback(async () => {
    await clearHistory()
    setHistory([])
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return { history, loading, load, add, clear }
}
