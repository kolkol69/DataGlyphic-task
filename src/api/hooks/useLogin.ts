import { useMutation } from 'react-query'

import { loginUserFn } from 'src/api/services'
import { ILoginPayload } from 'src/api/types'
import { useAuth } from 'src/hooks'

export const useLogin = () => {
  const { login } = useAuth()
  const {
    mutate: loginUser,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(async (data: ILoginPayload) => await loginUserFn(data), {
    onSuccess: (data) => {
      login(data.sessionId)
    },
    onError: (e: any) => {
      console.log(e)
    },
  })

  return { loginUser, isLoading, isError, error, isSuccess }
}
