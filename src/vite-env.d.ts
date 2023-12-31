/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL : string
  readonly VITE_PATH_TO_ASSETS : string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}