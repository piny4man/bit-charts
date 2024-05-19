import { getZeroConfData } from '@/lib/utils'
import { ChartComponentProps } from '@/types'
import { Chart, registerables } from 'chart.js'
import { Pie } from 'react-chartjs-2'

Chart.register(...registerables)

const ZeroConfStats = ({ transactions }: ChartComponentProps) => {
  const { zeroConfCount, nonZeroConfCount } = getZeroConfData(transactions)
  return (
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
  )
}

export default ZeroConfStats
