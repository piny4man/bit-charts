import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { BlockchainTransaction, RawTransactionRow } from '@/types'
import { chartColors } from './constants'
import { ChartData } from 'chart.js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapRawRowToTransactionData(rawData: RawTransactionRow): BlockchainTransaction {
  return {
    paymentMethod: rawData.payment_method,
    purchaseCategory: rawData.purchase_category,
    country: rawData.country,
    createdTime: rawData.created_time,
    euroPrice: rawData.euro_price,
    zeroConfTime: rawData.zero_conf_time,
    timeToOnchainConf: rawData.time_to_onchain_conf,
    isFromExchange: Boolean(rawData.is_from_exchange),
    exchangeName: rawData.exchange_name,
    feeRate: rawData.fee_rate,
    feeEstimates: rawData.fee_estimates,
    hasAccount: Boolean(rawData.has_account),
    satoshiAmount: rawData.satoshi_amount,
    userWallet: rawData.user_wallet,
    isWalletConnect: rawData.is_walletconnect,
    id: rawData.ID
  }
}

export function getUserWalletTrends(transactions: BlockchainTransaction[]): {
  labels: string[]
  datasets: ChartData<'scatter'>['datasets']
} {
  const data = transactions.reduce(
    (acc, transaction) => {
      const date = transaction.createdTime
      const wallet = transaction.userWallet || 'Other'

      if (!acc[date]) {
        acc[date] = {}
      }

      if (!acc[date][wallet]) {
        acc[date][wallet] = 0
      }

      acc[date][wallet] += 1

      return acc
    },
    {} as Record<string, Record<string, number>>
  )

  const labels = Object.keys(data).sort()
  const walletTypes = Array.from(new Set(transactions.map((transaction) => transaction.userWallet || 'Other')))

  const datasets = walletTypes.map((wallet, index) => ({
    label: wallet,
    data: labels
      .map((date) => ({
        x: new Date(date).getTime(),
        y: data[date][wallet] || 0
      }))
      .filter((point) => point.y !== 0),
    borderColor: chartColors[index],
    backgroundColor: chartColors[index]
  }))

  return { labels, datasets }
}

export function getPaymentMethodTrends(transactions: BlockchainTransaction[]): {
  labels: string[]
  datasets: ChartData<'line'>['datasets']
} {
  const data = transactions.reduce(
    (acc, transaction) => {
      const date = transaction.createdTime
      const paymentType = transaction.paymentMethod

      if (!acc[date]) {
        acc[date] = {}
      }

      if (!acc[date][paymentType]) {
        acc[date][paymentType] = 0
      }

      acc[date][paymentType] += 1

      return acc
    },
    {} as Record<string, Record<string, number>>
  )

  const labels = Object.keys(data).sort()
  const paymentTypes = Array.from(new Set(transactions.map((transaction) => transaction.paymentMethod)))

  const datasets = paymentTypes.map((type, index) => ({
    label: type,
    data: labels.map((date) => data[date][type] || 0),
    fill: false,
    borderColor: chartColors[index]
  }))

  return { labels, datasets }
}

export function getZeroConfData(transactions: BlockchainTransaction[]): {
  zeroConfCount: number
  nonZeroConfCount: number
} {
  const zeroConfCount = transactions.filter((transaction) => transaction.zeroConfTime).length
  const nonZeroConfCount = transactions.length - zeroConfCount

  return { zeroConfCount, nonZeroConfCount }
}
