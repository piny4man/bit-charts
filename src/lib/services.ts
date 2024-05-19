import dummyData from '@/data/transactions.json'
import { TransactionsResponse } from '@/types'

export const getTransactions = (): TransactionsResponse => {
  const response = JSON.stringify(dummyData)
  return JSON.parse(response)
}
