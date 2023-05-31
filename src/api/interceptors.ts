import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

const onRequest = (config: any): any => {
  const sessionId = localStorage.getItem('user')
  if (sessionId && config.headers) {
    config.headers.sessionId = JSON.parse(sessionId)
  }
  return config
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = async (error: AxiosError<any>): Promise<AxiosError<any>> => {
  if (error.response?.status === 401) {
    localStorage.clear()
    window.location.href = '/login'
  }
  return await Promise.reject(error)
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
