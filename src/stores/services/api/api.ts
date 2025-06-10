import { appConfig } from '@config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '../../configureStore'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).keycloak.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
})
