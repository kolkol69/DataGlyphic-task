import { Line } from 'react-chartjs-2'
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'

interface DataPoint {
  rundate: string
  passed: number
  failed: number
}

interface LineChartProps {
  dataPoints: DataPoint[]
}

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Passed/Failed Line Chart',
    },
  },
}

const LineChart = ({ dataPoints }: LineChartProps) => {
  const labels = dataPoints.map((point) => new Date(point.rundate).toLocaleDateString())
  const passedData = dataPoints.map((point) => point.passed)
  const failedData = dataPoints.map((point) => point.failed)

  const data = {
    labels,
    datasets: [
      {
        label: 'Passed',
        data: passedData,
        fill: false,
        backgroundColor: 'rgb(0, 200, 0)',
        borderColor: 'rgba(0, 200, 0, 0.2)',
      },
      {
        label: 'Failed',
        data: failedData,
        fill: false,
        backgroundColor: 'rgb(200, 0, 0)',
        borderColor: 'rgba(200, 0, 0, 0.2)',
      },
    ],
  }

  return (
    <Line
      data={data}
      options={options}
    />
  )
}

export default LineChart
