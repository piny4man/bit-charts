import { getZeroConfData } from '@/lib/utils'
import { ChartComponentProps } from '@/types'
import { Chart, registerables } from 'chart.js'
import { Percent } from 'lucide-react'
import { Pie } from 'react-chartjs-2'
import ChartCard from './ChartCard'

Chart.register(...registerables)

const ZeroConfStats = ({ transactions }: ChartComponentProps) => {
  const { zeroConfCount, nonZeroConfCount } = getZeroConfData(transactions)
  return (
    <ChartCard icon={<Percent />} title="0-conf Transactions" classNames="max-w-80">
      <Pie
        data={{
          labels: ['0-conf', 'Non 0-conf'],
          datasets: [
            {
              label: '0-conf Transactions',
              data: [zeroConfCount, nonZeroConfCount],
              backgroundColor: ['#0088FE', '#00C49F'],
              borderColor: 'transparent'
            }
          ]
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: 'rgb(229 229 229)'
              }
            }
          }
        }}
      />
    </ChartCard>
  )
}

export default ZeroConfStats
