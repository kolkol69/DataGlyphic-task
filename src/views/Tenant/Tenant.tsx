import { useLocation } from 'react-router-dom'

import { useGetTenantChart } from 'src/api/hooks'
import { LineChart, LoadingSpinner } from 'src/components'

import { ChartContainer } from './Tenant.style'

const Tenant = () => {
  const { tenantChart, isLoading } = useGetTenantChart()
  const { state } = useLocation()

  return (
    <div>
      <h1>{state?.tenantName ?? 'Tenant Line Chart'}</h1>
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
