/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_PORT: string
    readonly VITE_APP_LOCALSTORAGE_KEY: string
    readonly VITE_API_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  