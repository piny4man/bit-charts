import { getTransactions } from '@/lib/services'
import { mapRawRowToTransactionData } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const useBlockchainTransaction = () => {
  const [transactions, setTransactions] = useState<BlockchainTransaction[]>([])

  const fetchTransactions = () => {
    const { rows } = getTransactions()
    const parsedTransactions = rows.map((row) => mapRawRowToTransactionData(row))
    setTransactions(parsedTransactions)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return {
    transactions
  }
}
