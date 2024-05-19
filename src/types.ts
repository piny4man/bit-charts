export type RawTransactionRow = {
  payment_method: string
  purchase_category: string
  country: string
  created_time: string
  euro_price: number
  zero_conf_time: string
  time_to_onchain_conf: null
  is_from_exchange: number
  exchange_name: null
  fee_rate: number
  fee_estimates: number
  has_account: number
  satoshi_amount: number
  user_wallet: string
  is_walletconnect: string
  ID: number
}

export type TransactionsResponse = {
  table: string
  rows: RawTransactionRow[]
}

export type BlockchainTransaction = {
  paymentMethod: string
  purchaseCategory: string
  country: string
  createdTime: string
  euroPrice: number
  zeroConfTime: string | null
  timeToOnchainConf: number | null
  isFromExchange: boolean
  exchangeName: string | null
  feeRate: number
  feeEstimates: number
  hasAccount: boolean
  satoshiAmount: number
  userWallet: string
  isWalletConnect: string
  id: number
}

export type ChartComponentProps = {
  transactions: BlockchainTransaction[]
}
