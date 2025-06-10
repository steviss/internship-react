import { appConfig } from '@config'
import { createListenerMiddleware } from '@reduxjs/toolkit'

import { RootState } from '../../configureStore'
import { setCredentials } from '../../reducers/keycloak'

export const localStorageMiddleware = createListenerMiddleware<RootState>()

localStorageMiddleware.startListening({
  actionCreator: setCredentials,
  effect: async (_action, localStorageApi) => {
    localStorage.setItem(appConfig.localStorageKey, JSON.stringify(localStorageApi.getState()))
  },
})
