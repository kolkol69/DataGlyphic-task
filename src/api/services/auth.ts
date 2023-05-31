import { authApi } from '../apiClient'
import { ILoginPayload, ILoginResponse } from '../types'

export const loginUserFn = async (user: ILoginPayload) => {
  const response = await authApi.post<ILoginResponse>('auth/login', {
    email: user.email,
    password: user.password,
  })
  return response.data
}
