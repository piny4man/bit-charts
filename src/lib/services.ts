import dummyData from '@/data/transactions.json'

export const getTransactions = (): TransactionsResponse => {
  const response = JSON.stringify(dummyData)
  return JSON.parse(response)
}
