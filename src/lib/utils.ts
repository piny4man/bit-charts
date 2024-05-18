import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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

export function getUserWalletTrends(transactions: BlockchainTransaction[]): any {
  const userWalletCounts: { [x: string]: number } = {}
  transactions.forEach((transaction) => {
    const wallet = transaction.userWallet ?? 'Other'
    if (userWalletCounts[wallet]) {
      userWalletCounts[wallet]++
    } else {
      userWalletCounts[wallet] = 1
    }
  })

  const labels = Object.keys(userWalletCounts)
  const walletCounts = Object.values(userWalletCounts)

  return {
    labels,
    datasets: [
      {
        label: '# of transactions',
        data: walletCounts
      }
    ]
  }
}
