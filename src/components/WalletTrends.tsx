import { getUserWalletTrends } from '@/lib/utils'
import { useMemo } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

type Props = {
  transactions: BlockchainTransaction[]
}

ChartJS.register(ArcElement, Tooltip, Legend)

const WalletTrends = ({ transactions }: Props) => {
  const chartData = useMemo(() => getUserWalletTrends(transactions), [transactions])
  return <Pie data={chartData} />
}

export default WalletTrends
