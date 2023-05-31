import { useQuery } from 'react-query'

import { getTenantsListFn } from 'src/api/services'

export const useGetTenants = () => {
  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery(
    ['tenants'],
    getTenantsListFn,
    {
      refetchOnMount: false,
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (e: any) => {
        console.log(e)
      },
    },
  )

  return { tenants: data, isLoading, isError, error, isSuccess, refetch }
}
