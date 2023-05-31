import axios from 'axios'

import { setupInterceptorsTo } from './interceptors'

export const authApi = setupInterceptorsTo(
  axios.create({
    baseURL: 'https://api.dataglyphic.io',
    /*
    `withCredentials` indicates whether or not cross-site
    Access-Control requests should be made using credentials

    You need to set withCredentials: true in the Axios config for 
    the browser to include the cookies along with the requests. 
  */
    withCredentials: false,
  }),
)
