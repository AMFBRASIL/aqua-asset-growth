/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL base do backend Next (ex.: http://localhost:3000) */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
