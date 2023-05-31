import { useLocation } from 'react-router-dom'

import { useGetTenantChart } from 'src/api/hooks'
import { LineChart, LoadingSpinner } from 'src/components'

import { ChartContainer } from './Tenant.style'

const Tenant = () => {
  const { tenantChart, isLoading } = useGetTenantChart()
  const {
    state: { tenantName },
  } = useLocation()

  return (
    <div>
      <h1>{tenantName}</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ChartContainer>
          <LineChart dataPoints={tenantChart} />
        </ChartContainer>
      )}
    </div>
  )
}
export default Tenant
