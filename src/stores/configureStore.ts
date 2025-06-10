import { type PreloadedStateShapeFromReducersMapObject, combineReducers, configureStore } from '@reduxjs/toolkit'

import { localStorageMiddleware, reHydrateStore } from './middlewares'
import { api } from './services'

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
})

export const setupStore = (preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, localStorageMiddleware.middleware),
  })

export const preloadedState = reHydrateStore()

export const store = setupStore(preloadedState)

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
