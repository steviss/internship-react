import { appConfig } from '@config'
import { PreloadedStateShapeFromReducersMapObject } from '@reduxjs/toolkit'

import { RootState } from '../../configureStore'

export const reHydrateStore = (): PreloadedStateShapeFromReducersMapObject<RootState> | undefined => {
  const fromLocalStorage = localStorage.getItem(appConfig.localStorageKey)
  if (fromLocalStorage) return JSON.parse(fromLocalStorage) as unknown as PreloadedStateShapeFromReducersMapObject<RootState>
  return undefined
}
