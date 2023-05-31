import { authApi } from '../apiClient'
import { ITenantsResponse } from '../types'

export const getTenantsListFn = async () => {
  const response = await authApi.get<ITenantsResponse>('tenants')
  return response.data
}

export const getTenantChartFn = async (tenantId: string) => {
  const response = await authApi.get(`tenants/${tenantId}/historyGraph`)
  return response.data
}
