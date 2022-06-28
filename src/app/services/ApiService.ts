import axios, { AxiosRequestHeaders } from 'axios'
import config from '../config'

import { AuthService } from './AuthService'

const apiHost = config.apiHost

export default function authHeader(): AxiosRequestHeaders {
  const accessToken = AuthService.getCredentials().accessToken

  if (accessToken) {
    return { Authorization: 'Bearer ' + accessToken }
  } else {
    return {}
  }
}

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      AuthService.clearCredentials()
    }

    return Promise.reject(error)
  }
)

export interface ApiServiceResponse {
  error?: string
  metadata?: { [key: string]: any }
  data?: any
  ok: boolean
}
export const ApiService = {
  get: ({
    endpoint,
    params,
  }: {
    endpoint: string
    params?: any
  }): { id: string; completed: boolean; title: string }[] => {
    return [
      {
        title: 'Task 1',
        id: '1',
        completed: false,
      },
      {
        title: 'Task 2',
        id: '1',
        completed: false,
      },
      {
        title: 'Task 3',
        id: '1',
        completed: true,
      },
    ]
  },

  post: ({ endpoint, data }: { endpoint: string; data: any }): Promise<any> => {
    return false // TODO: Implement
  },

  patch: ({
    endpoint,
    data,
  }: {
    endpoint: string
    data: any
  }): Promise<any> => {
    return false // TODO: Implement

  },

  delete: ({ endpoint }: { endpoint: string }): Promise<any> => {
    return false // TODO: Implement
  },
}
