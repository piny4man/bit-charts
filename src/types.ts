interface BlockchainTransaction {
  paymentMethod: string
  purchaseCategory: string
  country: string
  createdTime: string
  euroPrice: number
  zeroConfTime: string | null
  timeToOnchainConf: number | null
  isFromExchange: number
  exchangeName: string | null
  feeRate: number
  feeEstimates: number
  hasAccount: number
  satoshiAmount: number
  userWallet: string
  isWalletConnect: string
  id: number
}
