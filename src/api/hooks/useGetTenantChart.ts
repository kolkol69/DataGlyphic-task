import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { getTenantChartFn } from 'src/api/services'

export const useGetTenantChart = () => {
  const { tenantId } = useParams()

  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery(
    ['tenant/:id/chart', tenantId],
    async () => await getTenantChartFn(tenantId ?? ''),
    {
      onSuccess(data) {
        console.log(data)
      },
      onError: (e: any) => {
        console.log(e)
      },
    },
  )

  return {
    tenantChart: data,
    data,
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  }
}
