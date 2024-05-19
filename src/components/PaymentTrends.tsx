import { getPaymentMethodTrends } from '@/lib/utils'
import { ChartComponentProps } from '@/types'
import { Chart, ChartOptions, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'

Chart.register(...registerables)

const WalletTrends = ({ transactions }: ChartComponentProps) => {
  const { labels, datasets } = getPaymentMethodTrends(transactions)

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#E5E5E5'
        }
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        },
        grid: {
          color: '#27272A'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Transactions',
          color: '#E5E5E5'
        },
        grid: {
          color: '#27272A'
        }
      }
    }
  }

  return (
    <section className="flex flex-row gap-5">
      <Line data={{ labels, datasets }} options={options} />
    </section>
  )
}

export default WalletTrends
