import { getUserWalletTrends } from '@/lib/utils'
import { ChartComponentProps } from '@/types'
import { Chart, ChartOptions, registerables } from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'

Chart.register(...registerables)

const WalletTrends = ({ transactions }: ChartComponentProps) => {
  const { datasets } = getUserWalletTrends(transactions)

  const options: ChartOptions<'scatter' | 'line'> = {
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
      <Scatter
        data={{
          datasets
        }}
        options={options}
      />
    </section>
  )
}

export default WalletTrends
