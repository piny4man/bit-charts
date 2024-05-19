import { render, screen } from '@testing-library/react'
import WalletTrends from '@/components/WalletTrends'
import { BlockchainTransaction } from '@/types'

const mockData: BlockchainTransaction[] = [
  {
    paymentMethod: 'BTC',
    purchaseCategory: 'E-Commerce',
    country: 'Italy',
    createdTime: '2021-05-21',
    euroPrice: 13,
    zeroConfTime: '2021-05-21',
    timeToOnchainConf: null,
    isFromExchange: false,
    exchangeName: null,
    feeRate: 56,
    feeEstimates: 54,
    hasAccount: false,
    satoshiAmount: 38895,
    userWallet: 'Blockchain',
    isWalletConnect: 'N',
    id: 1
  },
  {
    paymentMethod: 'BTC',
    purchaseCategory: 'E-Commerce',
    country: 'Italy',
    createdTime: '2021-05-22',
    euroPrice: 206,
    zeroConfTime: null,
    timeToOnchainConf: 2140,
    isFromExchange: false,
    exchangeName: null,
    feeRate: 70,
    feeEstimates: 57,
    hasAccount: false,
    satoshiAmount: 627942,
    userWallet: 'Other',
    isWalletConnect: 'N',
    id: 2
  }
]

describe('WalletTrends', () => {
  it('renders chart with correct title', () => {
    render(<WalletTrends transactions={mockData} />)
    expect(screen.getByText('User Wallet Trends')).toBeInTheDocument()
  })
})
